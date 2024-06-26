import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import FontText from '../texts/fontText'
import colors from '../../styles/colors'

export default function ChangeButtonCon({firstText, secondText}) {
  return (
    <View style={styles.container}>
       <TouchableOpacity style={styles.conOne}><FontText>{firstText}</FontText></TouchableOpacity>
       <TouchableOpacity style={styles.conT}><FontText>{secondText}</FontText></TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        backgroundColor:colors.neutral50,
        width:324,
        height:56,
        top:70,
        // left:33,
        alignItems:'center',
        borderRadius:40,
        paddingVertical:8,
        paddingHorizontal:12,
        gap:12,
    },
    conOne:{
        backgroundColor:colors.primary,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        width:144,
        height:40

    },
    conT:{
        backgroundColor:colors.neutral50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:30,
        width:144,

    }
})