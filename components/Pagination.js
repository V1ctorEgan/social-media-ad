import { StyleSheet, Animated,  View } from 'react-native'
import React from 'react'
import { Dimensions } from 'react-native';


const {width} = Dimensions.get('screen');
const Pagination = ({data, scrollX, index}) => {
  return (
    <View style={styles.container}>
    {data.map((_, idx) => {
      const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

      const dotWidth = scrollX.interpolate({
        inputRange,
        outputRange: [24, 60, 24],
        extrapolate: 'clamp',
      });

      const opacity = scrollX.interpolate({
        inputRange,
        outputRange: [0.2, 1, 0.1],
        extrapolate: 'clamp',
      });

      const backgroundColor = scrollX.interpolate({
        inputRange,
        outputRange: ['#0000ff', '#fff', '#0000ff'],
        extrapolate: 'clamp',
      });

      return (
        <Animated.View
          key={idx.toString()}
          style={[
            styles.dot,
            {width: dotWidth, backgroundColor},
            // idx === index && styles.dotActive,
          ]}
        />
      );
    })}
  </View>
);
};

   

export default Pagination

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        bottom:50,
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    dot:{
        width:24,
        height:12,
        marginHorizontal:3,
        borderRadius:6,
        backgroundColor:'#ccc'
    },
    dotActive: {
        backgroundColor: '#000',
      },
})