import { View, Image, TouchableOpacity, StyleSheet } from "react-native";

import FontText from "../texts/fontText";
import colors from "../../styles/colors";
const SSA = ({g,a}) =>{
    return(
        <View style={{
            width : "100%",
            justifyContent : "center",
            alignItems : 'center',
            position : "absolute",
            bottom : 20
        }}>
            <FontText style={{
                fontWeight : '650'
            }}>OR</FontText>
            <View style={{
                width : "100%",
                gap : 10,
                padding : 10
            }}>
                <TouchableOpacity style={style.button} onPress={g} activeOpacity={.5}>
                    <Image source={require('../../assets/images/icons/google.png')} style={{
                        height : 20
                    }} resizeMode="contain"/>
                    <FontText>Continue with Google</FontText>
                </TouchableOpacity>
                <TouchableOpacity style={style.button} onPress={a} activeOpacity={.5}>
                    <Image source={require('../../assets/images/icons/apple.png')} style={{
                        height : 20,
                        width : 20
                    }} resizeMode="contain"/>
                    <FontText style={style.txt}>Continue with Apple</FontText>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    button : {
        backgroundColor : colors.neutral50,
        flexDirection : 'row',
        justifyContent :'center',
        width : "100%",
        paddingVertical : 16,
        borderRadius : 5,
        alignItems : 'center',
        gap : 7
    },
    txt : {
        fontWeight : 650
    }
})

export default SSA;