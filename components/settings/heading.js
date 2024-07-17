import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import FontText from '../texts/fontText'
import { BackArrow } from '../svg/svgIcons'
import { router } from 'expo-router'

const Heading = ({title}) => {
  return (
    <View style={styles.container}>
        <View style={{
            // justifyContent:'flex-start',
            position:'absolute',
            left:10,
            justifyContent:'center',
            alignItems:'center',
            top:-1

        }}>
            <TouchableOpacity onPress={()=> router.navigate('../../home/templates')}>
                
        <BackArrow />
            </TouchableOpacity>
        </View>
      
      <FontText style={styles.text}>{title}</FontText>
    </View>
  )
}

export default Heading

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'center',
        paddingHorizontal:10,
        width:'100%',
        alignItems:'center',
        position:'absolute',
        top:20
    },
    text:{
        fontSize:22,
        fontWeight:'650',
        top: -10
    }
})