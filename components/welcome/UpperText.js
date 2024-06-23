import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function UpperText({title, subtitle, sub2}) {
    return (
        <View style={styles.lowerText}>
        <Text style={styles.welcomeText}>{title}</Text>
        <Text style={styles.subTitle}>{subtitle} </Text>
        <Text style={styles.subTitle}>{sub2}</Text>
    </View>
    );
}
const styles = StyleSheet.create({
    lowerText:{
        alignItems:'center',
        
        
    },
    welcomeText: {
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
export default UpperText;