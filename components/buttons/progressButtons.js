import React from 'react';
import { TouchableOpacity, StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import FontText from '../texts/fontText';

function PrgBtn1({title, color = colors.primary, onPress, disabled = false}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: disabled?colors.primary300:color, }]} activeOpacity={.8} onPress={disabled?()=>{}:onPress}>
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
        paddingVertical : 16,
        paddingHorizontal : 12,
        width:'100%',
        marginVertical:10,

    },
    text: {
        color : '#fff',
        fontSize : 14,
        fontWeight:'800',
    }
})
export {
    PrgBtn1
}