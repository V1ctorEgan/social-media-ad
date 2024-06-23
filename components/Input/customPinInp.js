import { View, StyleSheet } from "react-native";

import colors from "../../styles/colors";
import FontText from "../texts/fontText";
import { PinDot } from "../svg/svgIcons";

const CustomPinInp = (props) =>{
    const data = [
        props.input[0]!=null?props.secure?<PinDot/>:props.input[0]:null,
        props.input[1]!=null?props.secure?<PinDot/>:props.input[1]:null,
        props.input[2]!=null?props.secure?<PinDot/>:props.input[2]:null,
        props.input[3]!=null?props.secure?<PinDot/>:props.input[3]:null,
    ]
    
    return(
        <View style={style.main}>
            <View style={style.field}><FontText style={style.txt}>{data[0]}</FontText></View>
            <View style={style.field}><FontText style={style.txt}>{data[1]}</FontText></View>
            <View style={style.field}><FontText style={style.txt}>{data[2]}</FontText></View>
            <View style={style.field}><FontText style={style.txt}>{data[3]}</FontText></View>
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