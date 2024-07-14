import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontText from '../texts/fontText'
import { BackArrow } from '../svg/svgIcons'

const Heading = ({title}) => {
  return (
    <View style={styles.container}>
        <View style={{
            justifyContent:'flex-start',
            // backgroundColor:'blue',

        }}>
        <BackArrow />
        </View>
      
      <FontText style={styles.text}>{title}</FontText>
    </View>
  )
}

export default Heading

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        width:'70%',
        // borderWidth:2,
        alignSelf:'flex-start',
        alignItems:'center',
        position:'absolute',
        top:20
    },
    text:{
        fontSize:22,
        fontWeight:650
    }
})