import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Heading from '../../components/settings/heading'
import { MenuBtn, Section } from '../../components/settings/un'
import { AngleRightIcon } from '../../components/svg/svgIcons'

const support = () => {
  return (
    <View style={styles.main}>
       <Heading title={'Support'} />
       <Section>
            <MenuBtn title={'Call support'} icon2={<AngleRightIcon />}/>
       </Section>

    </View>
  )
}

export default support

const styles = StyleSheet.create({
    main: {
		flex: 1,
		padding: 10,
		// gap : 40,
		width: "100%",
		paddingTop: 80,
	},
})