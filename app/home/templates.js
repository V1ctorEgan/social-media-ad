import { View, Text } from 'react-native'
import React from 'react'
import ChangeButtonCon from '../../components/home/changeButtonCon'
import MenuButton from '../../components/home/menuButton'

const Templates = () => {
  return (
    <View>
        <View>
            <MenuButton onPress={()=>console.log('working')} />
        </View>
      <ChangeButtonCon firstText={'Online'} secondText={'Local'} />
    </View>
  )
}

export default Templates