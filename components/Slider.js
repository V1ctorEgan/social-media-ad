import { StyleSheet, Text, View,Dimensions, Animated } from 'react-native'
import React from 'react'


const { width: windowWidth, height: windowHeight } = Dimensions.get("screen");
export default function Slider({item}) {
  
 
  return (
    <ImageBackground source={require("../assets/images/backgrounds/bg1.png")} style={styles.background}>
            <View style={styles.textContainer}>
                <View style={styles.lowerText}>
                    <Text style={styles.welcomeText}>{item.title}</Text>
                    <Text style={styles.subTitle}>{item.subTitle} </Text>
                    <Text style={styles.subTitle}>{item.sub}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <AppButton title={'Get Started'}/>
                    <AccountQuestion />
                </View>
            </View>

       </ImageBackground>
  )
}
const styles = StyleSheet.create({
    background:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        width ,
        height
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