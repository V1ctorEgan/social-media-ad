import React, {useState} from 'react';

import { ImageBackground, Text, View, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import colors from '../../styles/colors';

import Screen from '../../components/Screen';
import {PrgBtn1} from '../../components/buttons/progressButtons';
import FontText from '../../components/texts/fontText';

function WelcomeScreen(props) {
    
    return (
       <Screen style={{
            paddingTop: 0,
            backgroundColor: colors.neutral900
       }}>
            <ImageBackground source={require("../../assets/images/backgrounds/bg1.png")} style={styles.background} imageStyle= {{opacity:.8}}>
                <View style={styles.mainContainer}>
                    <View style={styles.carouselContainer}>
                        
                    </View>
                    {/* <View style={styles.lowerText}>
                        <FontText style={styles.welcomeText}>Welcome To ASM</FontText>
                        <FontText style={styles.subTitle}>Take control of your social media </FontText>
                        <FontText style={styles.subTitle}>presence effortlessly</FontText>
                    </View> */}
                    <View style={styles.actionContainer}>
                        <PrgBtn1 title={'Get Started'} onPress={()=>{
                            alert('hey hey');
                        }}/>
                        <FontText style={{color : colors.neutral100, fontWight:'600'}}>Already have an account?  <Link href={'/auth/login'} style={{color: colors.primary}}>Login</Link></FontText>
                    </View>
                </View>
        </ImageBackground>
       </Screen>
    );
}
const styles = StyleSheet.create({
    // buttonContainer:{
    //     flex : 1,
    //     width:'100%',
    //     padding:20,
    //     marginTop:400
    // },
    // lowerText:{
    //     alignItems:'center',
    //     borderColor: "#AAA",
    //     borderWidth: 1,
    //     paddingTop : 22
    // },
    
    // welcomeText: {
    //     fontSize:22,
    //     fontWeight:'600',
    //     marginBottom:20,
    //     color:'#fff',
    // },
    // subTitle:{
    //     fontSize:16,
    //     fontWeight:'500',
    //     color:'#fff',
    // },
    background : {
        flex : 1,
        alignItems : 'center',
        width : '100%'
    },
    mainContainer:{
        flex:1,
        alignItems:'center',
        width:'100%',
        justifyContent: 'space-between'
    },
    carouselContainer : {
        width: "100%",
        flexGrow: 3.5,  
    },
    actionContainer: {
        width: "100%",
        flex: 1,
        padding: 10,
        alignItems: "center",
    }

})
export default WelcomeScreen;