import React from 'react';
import { TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import FontText from '../texts/fontText';

function PrgBtn1({title, color = colors.primary, onPress}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: color}]} activeOpacity={.8} onPress={onPress}>
            <FontText style={styles.text}>{title}</FontText>
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
export {
    PrgBtn1
}