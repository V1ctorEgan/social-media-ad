import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Heading from '../../components/settings/heading'
import { MenuBtn, Section } from '../../components/settings/un'
import { AngleRightIcon, NotificationBell, ToggleOnIcon } from '../../components/svg/svgIcons'
import FontText from '../../components/texts/fontText'

const appSet = () => {
  return (
    <View style={styles.container}>
      <Heading title={'App settings & pref'} style={{marginBottom:20}} />
      <FontText style={[styles.text,{  top:50,  marginTop:30}]} >Notifications</FontText>

      <Section style={styles.sec}>
        <MenuBtn title={'Allow notifications for updates'} icon2={<ToggleOnIcon /> } icon={<NotificationBell />} />
        <MenuBtn title={'Allow notifications for something'} icon2={<ToggleOnIcon /> } icon={<NotificationBell />} />
      </Section>
      <FontText style={styles.text} >Language</FontText>
      <Section>
        <MenuBtn title={'Select language'} icon2={<AngleRightIcon />} />
      </Section>
    </View>
  )
}

export default appSet

const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        gap : 8,
        paddingHorizontal:12
    },
    sec:{
        marginTop:50,
        
    },
    text:{
        fontSize:12,
        width:'100%',
        textAlign:'left'
    }
})