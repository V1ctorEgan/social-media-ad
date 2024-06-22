import React, { useState, useRef } from 'react';
import { View, Dimensions, FlatList, Image, StyleSheet, Text } from 'react-native';

import UpperText from './UpperText';
import RenderItem from './renderItem';

const data = [
  { id: 1, image: '../assets/images/backgrounds/bg1.png', title: 'Welcome To AMS', subtitle:'Take control of your social media', sub:'presence effortlessly'},
  { id: 2, image: '../assets/images/backgrounds/bg1.png', title: 'Ever So Effective', subtitle:'Publish and analyze your posts all in one', sub:'place, saving you time and boosting your'},
 
  // ... more items
];

const styles = StyleSheet.create({
  carousel: {
    width: '100%',
    height: 800,
  },
  carouselItem: {
    width: Dimensions.get('window').width,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'red'
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});


const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatlistRef = useRef(null);

  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image source={{ uri: item.image }} style={styles.carouselImage} />
      <Text>{item.title}</Text>
    </View>
  );

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    flatlistRef.current.scrollToIndex({ index: currentIndex });
  };

  return (
    <View style={styles.carousel}>
      <FlatList
        ref={flatlistRef}
        data={data}
        renderItem={ ({item})=> 
                    <RenderItem item={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        onMomentumScrollEnd={(event) => {
          const newIndex = Math.floor(event.nativeEvent.contentOffset.x / Dimensions.get('window').width);
          setCurrentIndex(newIndex);
        }}
      />
      {/* Optional navigation indicators (adjust styles as needed) */}
      {/* <View style={{ flexDirection: 'row' }}>
        {data.map((item, index) => (
          <View key={index} style={[styles.indicator, currentIndex === index && styles.indicatorActive]} />
        ))}
      </View> */}
    </View>
  );
};

export default Carousel;
