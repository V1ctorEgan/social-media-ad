import React from 'react';
import { TextInput, View, StyleSheet,Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../config/colors';
import defaultStyles from '../config/styles'

function AppTextInput({icon, width='100%', ...otherProps}) {
    return (
   <View style={[styles.container, {width}]}>
       {/* {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon}/>} */}
        <TextInput placeholderTextColor={colors.medium} style={styles.text} {...otherProps}/>
   </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.light,
        borderRadius: 25,
        flexDirection:'row',
        alignItems:'center',
        // justifyContent:'center',
        // width:'100%',
        padding:15,
        marginVertical:10,
    },
    text: { 
        color:'#000',
        fontSize:18, 
        // fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
        
        },
 
    icon:{
        marginRight:10,
    }
})
export default AppTextInput;