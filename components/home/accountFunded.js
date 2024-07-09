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
            // width:'90%',
            // // height:0.2,
            // backgroundColor:colors.neutral200,
            // paddingVertical:5,
            // height:.001,
            // borderBottomColor: 'black',
            // borderBottomWidth: StyleSheet.hairlineWidth,
            borderWidth:.5,
            paddingHorizontal:10,
            // borderWidth: 2, // Adjust border thickness as needed
            // borderStyle: 'dashed', // Any border style you prefer
            borderColor: 'gray',
            marginHorizontal: '5%'
            
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
        // width:340,
        paddingHorizontal:20,
        paddingVertical:10,
        // borderWidth:1
        // borderBottomColor:colors.neutral200,
        // borderBottomWidth:1,

    },
    two:{
        flexDirection:'column',


    }
})