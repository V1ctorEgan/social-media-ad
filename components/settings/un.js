import React, { useState, useEffect } from 'react';
import {View, StyleSheet, TouchableOpacity, Animated, Dimensions, Image, BackHandler, Text} from 'react-native';

import FontText from '../../components/texts/fontText';
import colors from '../../styles/colors';
import { router } from 'expo-router';
import { MenuCloseIcon, ProfileIcon, SettingsIcon, SendIcon, ToolsIcon, MoonIcon, HeadPhoneIcon, LogoutIcon, AngleRightIcon, ToggleOffIcon, ToggleOnIcon } from '../../components/svg/svgIcons';

const {width} = Dimensions.get('window');


const Section = (props) =>{
    return(
        <View style={[style.section, props.style]}>
            {props.children}
        </View>
    )
}
const Currency = (props) =>{
    return(
         <TouchableOpacity>

         </TouchableOpacity>
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
                {icon && icon}
                <FontText style={{
                    fontFamily : 'plusJakataSansBold',
                    fontSize : 14
                }}>{title}</FontText>
            </View>
            <View>
                {icon2 && icon2}
            </View>
        </TouchableOpacity>
    )
}
const New = ({icon, title, icon2, onPress}) =>{
    return(
        <TouchableOpacity style={{
        justifyContent : 'center',
        color:colors.primary,
        alignItems : 'center'}} onPress={onPress} activeOpacity={.5}>
            <View style={{
                flexDirection : 'row',
                alignItems : 'center',
                gap : 11,
                lineHeight : 21,
                paddingHorizontal : 5
            }}>
                 
                <FontText style={{
                    fontFamily : 'plusJakataSansBold',
                    fontSize : 14,
                    color:colors.primary
                }}>{title}</FontText>
            </View>
             
        </TouchableOpacity>
    )
}
const style = StyleSheet.create({
    container : {
        position :'relative',
        zIndex : 1000,
        width : '100%',
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
export {MenuBtn, Section, New}