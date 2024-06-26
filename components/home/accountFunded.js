import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontText from '../texts/fontText'
import ListItemSeparator from './listSeparator'
import colors from '../../styles/colors'

const AccountFunded = ({title, color}) => {
  return (
    <>
    <View style={styles.container}>
        <View style={styles.two}><FontText>Account Funded</FontText><FontText>October 26, 4:34 PM</FontText></View>
        <FontText style={{
            color,
            fontSize:14,
            fontWeight:'700',
        }} >{title}</FontText>
        
    </View>
     <View style={
        {
            width:'100%',
            height:1,
            backgroundColor:'#000',
            paddingVertical:5
        }
     }></View>
    </>
  )
}

export default AccountFunded

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        gap:6,
        width:365,
        paddingHorizontal:20,
        paddingVertical:10,
        // borderWidth:1
        borderBottomColor:colors.neutral200,
        borderBottomWidth:1,





    },
    two:{
        flexDirection:'column',


    }
})