import React, { useState } from 'react';
import {View, StyleSheet, TouchableOpacity, Animated, Dimensions} from 'react-native';

import FontText from '../texts/fontText';
import colors from '../../styles/colors';


const {width} = Dimensions.get('window');

const MenuDrawer = ({isOpen, onClose}) => {
    const [animation] = useState(new Animated.Value(-width));

    React.useEffect(()=>{
        Animated.timing(animation, {
            toValue : isOpen? 0 : -1*width,
            duration : 300,
            useNativeDriver : true
        }).start();
    },[isOpen]);


    return(
        <Animated.View style={[style.container,{transform : [{translateX : animation}]}]}>
            <TouchableOpacity onPress={onClose}>
                <FontText style={{fontSize:20}}>Close</FontText>
            </TouchableOpacity>
        </Animated.View>
    )
}

const style = StyleSheet.create({
    container : {
        position :'absolute',
        left : 0,
        top : 0,
        bottom : 0,
        zIndex : 1000,
        padding : 40,
        width : width,
        backgroundColor : colors.primary50
    }
});

export default MenuDrawer;