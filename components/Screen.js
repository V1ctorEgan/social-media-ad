import React, { useCallback } from 'react';
import {SafeAreaView, StyleSheet, Platform, StatusBar, View } from 'react-native';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen'

import colors from '../styles/colors';


function Screen(props) {
    SplashScreen.preventAutoHideAsync();
    const [fontsLoaded, fontError] = useFonts({
        'plusJakataSans' : require('../assets/fonts/plus-jakatar-sans/PlusJakartaSans.ttf'),
        'plusJakataSansBold' : require('../assets/fonts/plus-jakatar-sans/static/PlusJakartaSans-Bold.ttf'),
        'plusJakataSansSemiBold' : require('../assets/fonts/plus-jakatar-sans/static/PlusJakartaSans-SemiBold.ttf')
    });

    const onLayoutRootView = useCallback(async () =>{
        if(fontsLoaded || fontError){
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded,fontError]);

    if(!fontsLoaded && !fontError){
        return null;
    }

    return (
        <SafeAreaView style={[styles.screen, props.style]}>
            <View style={[styles.view, props.viewStyle]} onLayout={onLayoutRootView}>
                {props.children}
            </View >
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen:{
        paddingTop: Platform.OS === 'android'? StatusBar.currentHeight : 0,
        flex : 1,
        backgroundColor : colors.surfaceLight
    },
    view:{
        flex : 1,
    }
})
export default Screen;