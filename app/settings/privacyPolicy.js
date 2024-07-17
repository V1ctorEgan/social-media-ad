import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontText from '../../components/texts/fontText'
import Heading from '../../components/settings/heading'

const privacyPolicy = () => {
  return (
    <View style={styles.main}>
        <Heading title={'Privacy policy'} />
      <View style={{paddingHorizontal:10}}>
        <Text style={styles.text}>Lorem ipsum </Text>
      <FontText style={{        textAlign:'justify'
}}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec feugiat metus. Fusce faucibus quam eget elit tincidunt suscipit. Phasellus vel volutpat eros, ut viverra ante. Proin non egestas justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus m
      us. Donec et lobortis enim, ac dapibus lectus. Nullam eget pulvinar nibh. Nam a augue et enim bibendum bibendum. Donec gravida dapibus felis vitae sollicitudin. Aliquam lacinia vehicula semper. Ut et risus gravida nisi commodo fringilla. Suspendisse sed lobortis quam, sed imperdiet ex. Aliquam vel purus placerat augue condimentum fermentum in quis augue.
Mauris mattis ante nisi, sed dignissim ex lobortis quis. Etiam porta bibendum lacus, et varius nisl rhoncus sed. Etiam purus velit, dapibus in arcu ut, laoreet posuere arcu. Nunc tincidunt, odio vitae rhoncus blandit, justo mauris fringilla metus, id lobortis urna leo et risus. Sed mi tellus, condimentum a tempor at, porttitor lacinia ex. Nunc eleifend sapien quis sem convallis, quis tempor velit pulvinar. Nunc vel nisl vitae libero interdum ultrices ut at ligula. Ut iaculis tortor hendrerit arcu blandit, quis ultrices elit volutpat. Sed lectus dui, pretium at rutrum in, tincidunt a sapien. Etiam maximus velit in sapien maximus, ac aliquam sem pulvinar.
Etiam convallis metus sapien, placerat consectetur sem pharetra eu. Nunc suscipit volutpat sagittis. Nulla nec euismod felis. Mauris egestas nisi eget placerat posuere. Praesent tincidunt nulla vitae lectus auctor, id elementum orci tristique. Integer et magna quis velit convallis elementum. Praesent elementum diam vehicula dignissim tempus. Sed imperdiet at mi in laoreet. Pellentesque bibendum arcu risus, ac finibus eros iaculis sit amet. Quisque aliquet ligula massa, sit amet pellentesque erat egestas et. Suspendisse eu metus mauris. Integer a enim ut ligula maximus iaculis. Nulla vel risus efficitur, bibendum erat non, laoreet dolor. Quisque vehicula nibh vitae posuere eleifend. Maecenas imperdiet consequat massa, sed imperdiet turpis fermentum vel.
Ut facilisis neque ac justo vestibulum ullamcorper. Curabitur in mauris vitae odio pretium consectetur. Nunc a libero id neque accumsan cursus a sed elit. Duis tincidunt ligula non mi feugiat, ac bibendum erat bibendum. Donec rhoncus mattis ipsum, ac pretium sem mollis ac. Phasellus tristique, nisi id pellentesque efficitur, nunc magna consequat ligula, quis lacinia est tellus vel nibh. Mauris tristique placerat aliquam. Nunc bibendum tincidunt varius. Fusce vestibulum lacinia metus, ut elementum dolor efficitur nec. Praesent eu pellentesque dui, nec mollis mi. Morbi interdum faucibus dolor in rhoncus. Nunc imperdiet diam mi, eu suscipit risus porttitor ac. Curabitur sit amet vehicula nulla. In iaculis, libero vitae ornare convallis, neque tellus ullamcorper felis, ut tempus neque turpis in sem.
      </FontText>
    </View>
    </View>
  )
}

export default privacyPolicy

const styles = StyleSheet.create({
    main:{
        flex : 1,
        padding : 10,
        // gap : 40,
        width:'100%',
        paddingTop:90
      },
      text:{
        fontWeight:'700',
        fontSize:16,
        paddingBottom:16,
        textAlign:'justify'
      }
})