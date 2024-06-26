import { useState, useEffect} from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useSegments, router } from "expo-router";

import { HomeIcon, ActionsIcon, WalletIcon, DiscoverIcon } from "../svg/svgIcons";
import colors from "../../styles/colors";
import FontText from "../texts/fontText";

const Btn = ({Icon, title, onPress, active = false}) =>{
    return (
        <TouchableOpacity onPress={onPress} style={style.btn} activeOpacity={.7} delayPressOut={0} delayPressIn={0}>
            <Icon active={active}/>
            <FontText style={{color:active?colors.primary:colors.neutral600, fontSize : 14}}>{title}</FontText>
        </TouchableOpacity>
    )
}

const NavPane = () =>{
    const segments = useSegments();
    const [active, setActive] = useState(1);
    const [curr, setCurr] = useState();
    
    useEffect(()=>{
        setCurr(segments[segments.length-1]);
    },[segments]);

    useEffect(()=>{
        switch (curr) {
            case "home":
                setActive(1);
                break;
            case "wallet":
                setActive(3);
                break;
            case "actions":
                setActive(2);
                break;
            case "discover":
                setActive(4);
                break;
            default:
                setActive(0);
                break;
        }
    },[curr])
    return (
        <View style={style.navBar}> 
            <View style={style.container}>
                <Btn Icon={HomeIcon} title={'Home'} active={active==1} onPress={()=>{
                    router.replace('/home')
                }}/>
            </View>
            <View>
                <Btn Icon={ActionsIcon} title={'Actions'} active={active==2} onPress={()=>{
                    router.navigate('/home/actions')
                }}/>
            </View>
            <View>
                <Btn Icon={WalletIcon} title={'Wallet'} active={active==3} onPress={()=>{
                    router.navigate('/home/wallet')
                }}/>
            </View>
            <View>
                <Btn Icon={DiscoverIcon} title={'Discover'} active={active==4} onPress={()=>{
                    router.navigate('/home/discover')
                }}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    navBar : {
        position : 'absolute',
        bottom : 0,
        width : '100%',
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        paddingVertical : 10,
        paddingHorizontal : 15,
        backgroundColor : colors.surfaceLight
    },
    container : {
        justifyContent : 'center',
    },
    btn : {
        alignItems : 'center',
        justifyContent : 'center',
        gap : 1,
        paddingHorizontal : 15
    }
});

export default NavPane;