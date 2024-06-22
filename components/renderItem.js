import React from 'react';
import { View,StyleSheet, Text,Dimensions } from 'react-native';

function RenderItem({item}) {
    return (
         <View style={styles.container}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.subTitle}>{item.subtitle} </Text>
            <Text style={styles.subTitle}>{item.sub}</Text>
            <Text style={styles.subTitle}>{item.sub2}</Text>
         </View>
    );
}
const styles = StyleSheet.create({
    container:{
        marginBottom:40,
        width: Dimensions.get('window').width,
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        flex:0.5
        // backgroundColor:'red'

    },
    text:{
        fontSize:22,
        fontWeight:'600',
        marginBottom:20,
        color:'#fff',
    },
    subTitle:{
        fontSize:16,
        fontWeight:'500',
        color:'#fff',
    },

})
export default RenderItem;