import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontText from '../texts/fontText'

const ProfilePic = () => {
  return (
    <View style={styles.container}>
       <View style={styles.profile} /> 
       <FontText style={{fontSize:32, fontWeight:'700',  }}>John Doe</FontText>

    </View>
  )
}

export default ProfilePic

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        gap:16,
    },
    profile:{
        width:135,
        height:135,
        borderRadius:67.5,
        backgroundColor:'#D9D9D9',
      }
})