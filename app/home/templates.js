import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React, {useState} from 'react'
import ChangeButtonCon from '../../components/home/changeButtonCon'
import MenuButton from '../../components/home/menuButton'
import FontText from '../../components/texts/fontText'


const Online = ()=> {
  const windowWidth = Dimensions.get('window').width;
  return(

  <View style={{
    borderWidth:1,
    backgroundColor:'green',
    borderColor:'yellow',
    width:windowWidth,
    marginHorizontal:10,
    flex:1
    
  }}>
    <View style={styles.firstBox}>
      <View style={{
        backgroundColor:'red',
        width:'100%',
        height:213

      }}></View>
      <FontText>Template 1</FontText>
    </View>
  </View>
  )
}
const Local = () => {
return(

  <View style={{
    flex:1,
    alignItems:'center',

  }}>
    <FontText>You have no local template. Click on  the ‘+’ </FontText>
    <FontText>icon to add a template</FontText>
  </View>
)
}
const Templates = () => {
  // const [color, setColor] = useState('blue');
  const [change, setChange] = useState(true)
  return (
    <View style={styles.container}>
        
      <ChangeButtonCon firstText={'Online'} secondText={'Local'} setChange={setChange}/>
      <View style={{
        position:'relative',
        top:120
      }}>

      {change ? <Online /> : <Local />}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',

  },
  firstBox:{
    height:242,
    width: 169,
    flexDirection:'column',
    gap:8,
    borderWidth:2,
    alignItems:'flex-start',
    justifyContent:'flex-start'

  }
})
export default Templates