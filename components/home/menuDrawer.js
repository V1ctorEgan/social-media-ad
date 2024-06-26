import React, { useState, useEffect } from 'react';
import {View, StyleSheet, TouchableOpacity, Animated, Dimensions, Image, BackHandler} from 'react-native';

import FontText from '../texts/fontText';
import colors from '../../styles/colors';
import { MenuCloseIcon, ProfileIcon, SettingsIcon, SendIcon, ToolsIcon, MoonIcon, HeadPhoneIcon, LogoutIcon, AngleRightIcon, ToggleOffIcon, ToggleOnIcon } from '../svg/svgIcons';


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
const MenuDrawer = ({isOpen, onClose}) => {
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
        <Animated.View style={[style.container,{transform : [{translateX : animation}]}]}>
            {/* <TouchableOpacity onPress={onClose}>
                <FontText style={{fontSize:20}}>Close</FontText>
            </TouchableOpacity> */}
            <View style={style.header}>
                <Image source={require('../../assets/images/icons/logo-blue.png')} style={{width : 62}} resizeMode='contain'/>
                <TouchableOpacity onPress={onClose} style={{padding : 7}}>
                    <MenuCloseIcon />
                </TouchableOpacity>
            </View>
            <View style={style.body}>
                <Section>
                    <MenuBtn 
                        title={'Profile'}
                        icon={<ProfileIcon />}
                        icon2={<AngleRightIcon />}
                    />
                    <MenuBtn 
                        title={'Settings'}
                        icon={<SettingsIcon />}
                        icon2={<AngleRightIcon />}
                    />
                    <MenuBtn 
                        title={'Published posts'}
                        icon={<SendIcon />}
                        icon2={<AngleRightIcon />}
                    />
                    <MenuBtn 
                        title={'Tools'}
                        icon={<ToolsIcon />}
                        icon2={<AngleRightIcon />}
                    />
                </Section>
                <Section>
                    <MenuBtn 
                        title={'Dark mode'}
                        icon={<MoonIcon />}
                        icon2={<ToggleOnIcon/>} 
                    />
                    <MenuBtn 
                        title={'Support'}
                        icon={<HeadPhoneIcon />}
                        icon2={<AngleRightIcon />}
                    />
                </Section>
                <Section>
                    <MenuBtn 
                        title={'Sign out'}
                        icon={<LogoutIcon />}
                    />
                </Section>
            </View>

        </Animated.View>
    )
}

const style = StyleSheet.create({
    container : {
        position :'absolute',
        left : 0,
        top : 0,
        bottom : 0,
        zIndex : 1000,
        paddingHorizontal : 20,
        paddingTop : 30,
        width : width,
        backgroundColor : colors.surfaceLight,
        gap  : 40,
    },
    header : {
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between'
    },
    body : {
        alignItems : 'center',
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
    }
});

export default MenuDrawer;