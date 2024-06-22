import { View, StyleSheet } from "react-native";

import colors from "../../styles/colors";

import FontText from "../texts/fontText";

const CustomPinInp = (props) =>{
    return(
        <View style={style.main}>
            <View style={style.field}><FontText style={style.txt}>1</FontText></View>
            <View style={style.field}><FontText style={style.txt}>2</FontText></View>
            <View style={style.field}><FontText style={style.txt}>3</FontText></View>
            <View style={style.field}><FontText style={style.txt}>4</FontText></View>
        </View>
    )
}

const style = StyleSheet.create({
    main : {
        width : "fit-content",
        flexDirection : 'row',
        justifyContent : 'space-between',
        gap : 20,
        borderRadius : 5
    },
    field : {
        backgroundColor : colors.neutral50,
        justifyContent : 'center',
        alignItems : 'center',
        height : 50,
        width : 50
    },
    txt : {
        fontSize : 22,
        fontFamily : 'plusJakataSansBold'
    }
})

export default CustomPinInp;