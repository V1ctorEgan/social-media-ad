import React, { useCallback } from 'react';
import {SafeAreaView, StyleSheet, Platform, StatusBar, View } from 'react-native';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen'


function Screen(props) {

    SplashScreen.preventAutoHideAsync();
    const [fontsLoaded, fontError] = useFonts({
        'plusJakataSans' : require('../assets/fonts/plus-jakatar-sans/PlusJakartaSans.ttf')
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
            <View style={[styles.view, props.ViewStyle]} onLayout={onLayoutRootView}>
                {props.children}
            </View >
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen:{
        paddingTop: Platform.OS ==='android'? StatusBar.currentHeight : 0,
        flex : 1,
    },
    view:{
        flex : 1,
    }
})
export default Screen;