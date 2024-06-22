import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import Slider from './Slider'
import Pagination from './Pagination'

data = [{
    id:1,
    title:'Welcome To AMS',
    subTitle:'Take control of your social media',
    sub: 'presence effortlessly'
},
{
    id:2,
    title:'Ever So Effective',
    subTitle:'Publish and analyze your posts all in ',
    sub: 'one place, saving you time and boosting your productivity'
},
]

export default function Slide() {
    const [index, setIndex] = useState(0);

    const scrollX = useRef(new Animated.Value(0)).current
    const handleOnScroll = event => {
        Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          {
            useNativeDriver: false,
          },
        )(event);
      };
      const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
        // console.log('viewableItems', viewableItems);
        setIndex(viewableItems[0].index);
      }).current;
      const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
      }).current;
    
  return (
    <View>
      <FlatList
        data={data}
        renderItem={(item)=> <Slider item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment='center'
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination  data={data} scrollX={scrollX} index={index}/>
    </View>
  )
}

const styles = StyleSheet.create({})