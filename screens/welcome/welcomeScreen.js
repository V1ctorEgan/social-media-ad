import React, {useState} from 'react';

import { ImageBackground, Text, View, StyleSheet } from 'react-native';

import Screen from '../../components/Screen';
import AppButton from '../../components/buttons/AppButton';

function WelcomeScreen(props) {
    
    return (
       <Screen style={{
            paddingTop: 0
       }}>
            <ImageBackground source={require("../../assets/images/backgrounds/bg1.png")} style={styles.background}>
                <View style={styles.textContainer}>
                    <View style={styles.lowerText}>
                        <Text style={styles.welcomeText}>Welcome To ASM</Text>
                        <Text style={styles.subTitle}>Take control of your social media </Text>
                        <Text style={styles.subTitle}>presence effortlessly</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <AppButton title={'Get Started'}/>
                        <Text>Already have an account? Login</Text>
                    </View>
                </View>
        </ImageBackground>
       </Screen>
    );
}
const styles = StyleSheet.create({
    background : {
        flex : 1,
        flexDirection : 'column',
        justifyContent : 'flex-end',
        alignItems : 'center',
        width : '100%'
    },
    buttonContainer:{
        flex : 1,
        width:'100%',
        padding:20,
        marginTop:400
    },
    lowerText:{
        alignItems:'center',
    },
    textContainer:{
        alignItems:'center',
        position:'absolute',
        top:70,
        width:'100%'
    },
    welcomeText: {
        fontSize:22,
        fontWeight:'600',
        marginBottom:20,
        color:'#fff',
    },
    subTitle:{
        fontSize:16,
        fontWeight:'500',
        color:'#fff',
    }

})
export default WelcomeScreen;