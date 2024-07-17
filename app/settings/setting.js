import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import Heading from '../../components/settings/heading'
import MenuDrawer from '../../components/settings/menuDrawer'

const setting = () => {
    
    const [menuDrawn, setMenuDrawn] = useState(false);

    const toogleDrawer = () =>{
        setMenuDrawn(!menuDrawn);
    }
  return (
    <View style={styles.main}>
        <Heading title={'Settings'} />
        <View style={styles.sub} >

        <MenuDrawer isOpen={menuDrawn} onClose={toogleDrawer}/>
        </View>
    </View>
  )
}

export default setting

const styles = StyleSheet.create({
  main:{
    flex : 1,
    padding : 15,
    // gap : 40,
    width:'100%',
    paddingTop:80
  },
  sub:{
    top:-10
  }
})