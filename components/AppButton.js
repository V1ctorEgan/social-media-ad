import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';

function AppButton({title, color ='primary'}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button:{
        backgroundColor:colors.primary,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
        padding:15,
        width:'100%',
        marginVertical:10,

    },
    text: {
        color: '#fff',
        fontSize:18,
        textTransform:'upperCase',
        fontWeight:'800',
    }
})
export default AppButton;