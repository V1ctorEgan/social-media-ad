import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Heading from '../../components/settings/heading'
import PrivacyDrawer from '../../components/settings/privacyDrawer'

const Privacy = () => {
  return (
    <View style={styles.main}>
        <Heading title={'Privacy & security'} />
        <PrivacyDrawer />
    </View>
  )
}

export default Privacy

const styles = StyleSheet.create({
    main:{
        flex : 1,
        padding : 15,
        // gap : 40,
        width:'100%',
        paddingTop:100
      },
})