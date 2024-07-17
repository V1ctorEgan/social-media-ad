import React, { useState, useEffect } from 'react';
import {View, StyleSheet, TouchableOpacity, Animated, Dimensions, Image, BackHandler, Text} from 'react-native';

import FontText from '../../components/texts/fontText';
import colors from '../../styles/colors';
import { router } from 'expo-router';
import { MenuCloseIcon, ProfileIcon, SettingsIcon, SendIcon, ToolsIcon, MoonIcon, HeadPhoneIcon, LogoutIcon, AngleRightIcon, ToggleOffIcon, ToggleOnIcon } from '../../components/svg/svgIcons';

const {width} = Dimensions.get('window');


const Section = (props) =>{
    return(
        <View style={style.section}>
            {props.children}
        </View>
    )
}

const MenuBtn = ({icon, title, icon2, onPress}) =>{
    return(
        <TouchableOpacity style={style.btn} onPress={onPress} activeOpacity={.5}>
            <View style={{
                flexDirection : 'row',
                alignItems : 'center',
                gap : 11,
                lineHeight : 21,
                paddingHorizontal : 5
            }}>
                {icon}
                <FontText style={{
                    fontFamily : 'plusJakataSansBold',
                    fontSize : 14
                }}>{title}</FontText>
            </View>
            <View>
                {icon2}
            </View>
        </TouchableOpacity>
    )
}
const PrivacyDrawer = ({isOpen, onClose}) => {
    const [animation] = useState(new Animated.Value(-width));

    React.useEffect(()=>{
        Animated.timing(animation, {
            toValue : isOpen? 0 : -1*width,
            duration : 200,
            useNativeDriver : true
        }).start();
    },[isOpen]);

    useEffect(() => {
        const backHandler = () => {
            if (isOpen) {
                onClose();
                return true;
            }
            return false;
        };
    
        if (isOpen) {
            BackHandler.addEventListener('hardwareBackPress', backHandler);
        } else {
            BackHandler.removeEventListener('hardwareBackPress', backHandler);
        }
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', backHandler);
        };
    }, [isOpen, onClose]);


    return(
        < View style={[style.container ]}>
            <View style={style.body}>
            <FontText style={style.text} >Security</FontText>
            <Section>
                    <MenuBtn 
                        title={'Change login PIN'}
                        icon={<ProfileIcon />}
                        icon2={<AngleRightIcon />}
                    />
                    <MenuBtn 
                        title={'Change password'}
                        icon={<SettingsIcon />}
                        icon2={<AngleRightIcon />}
                        onPress={()=> router.navigate('./../settings/changePassword')}
                    />
                    <MenuBtn 
                        title={'Fingerprint'}
                        icon={<SendIcon />}
                        icon2={<AngleRightIcon />}
                    />
                    <MenuBtn 
                        title={'Close my account'}
                        icon={<ToolsIcon />}
                        icon2={<AngleRightIcon />}
                         
                    />
                </Section>
            <FontText style={style.text}>Privacy</FontText>

                <Section>
                <MenuBtn 
                        title={'Privacy policy'}
                        icon={<SendIcon />}
                        icon2={<AngleRightIcon />}
                        onPress={()=> router.navigate('./../settings/privacyPolicy')}

                    />
                     
                </Section>
            </View>
        </ View>
    )
}

const style = StyleSheet.create({
    container : {
        position :'relative',
        // left : 0,
        // top : 120,
        // bottom : 0,
        zIndex : 1000,
        // paddingHorizontal : 20,
        // paddingTop : 30,
        width : '100%',
        backgroundColor : colors.surfaceLight,
        gap  : 40,
        // marginTop:20
    },
    header : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    body : {
        // alignItems : 'center',
        gap : 8
    },
    section : {
        padding : 20,
        borderRadius : 10,
        backgroundColor : colors.neutral50,
        width : "100%",
        gap : 28
    },
    btn : {
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    text:{
        fontSize:12
    }
});

export default PrivacyDrawer;