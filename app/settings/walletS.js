import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Heading from '../../components/settings/heading'
import { MenuBtn, Section } from '../../components/settings/un'
import { AngleRightIcon } from '../../components/svg/svgIcons'
import FontText from '../../components/texts/fontText'
import { router } from 'expo-router'

const walletS = () => {
  return (
    <View style={styles.main}>
       <Heading title={'Wallet settings'} />
       <FontText style={styles.text}>Currency</FontText>
       <Section  >
            <MenuBtn title={'Default currency'} icon2={<AngleRightIcon />} onPress={()=> router.navigate('./defCurr')}/>
       </Section>
       <FontText style={styles.text}>Payment</FontText>

       <Section>
            <MenuBtn title={'Set spending limit'} icon2={<AngleRightIcon />}/>
            <MenuBtn title={'Saved payment methods'} icon2={<AngleRightIcon />} onPress={()=> router.navigate('./pay')}/>
       </Section>
    </View>
  )
}

export default walletS

const styles = StyleSheet.create({
    main:{
        flex : 1,
        padding : 10,
        // gap : 40,
        width:'100%',
        paddingTop:90
      },
      text:{
        marginVertical:8
      }
})