import React from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';
import AppButton from '../components/AppButton';
import colors from '../config/colors';
import AccountQuestion from '../components/AccountQuestion';
import UpperText from '../components/UpperText';

function WelcomeOneScreen(props) {
    return (
       <ImageBackground source={require("../assets/images/backgrounds/bg1.png")} style={styles.background}>
            <View style={styles.textContainer}>
                {/* <View style={styles.lowerText}>
                    <Text style={styles.welcomeText}>Welcome To AMS</Text>
                    <Text style={styles.subTitle}>Take control of your social media </Text>
                    <Text style={styles.subTitle}>presence effortlessly</Text>
                </View> */}
                <UpperText title={'Welcome To AMS'} subtitle={'Take control of your social media'} sub2={'presence effortlessly'}/>
                <View style={styles.buttonContainer}>
                    <AppButton title={'Get Started'}/>
                    <AccountQuestion />
                </View>
            </View>

       </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        width:'100%'
    },
    buttonContainer:{
        flex:1,
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

    },
    accountQuestion:{
        color:colors.white
    }

})
export default WelcomeOneScreen;