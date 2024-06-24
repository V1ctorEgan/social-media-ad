import { useState, useEffect } from "react";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import FontText from "../texts/fontText";
import { BackSpace, FingerPrintIcon } from "../svg/svgIcons";
const Btn = (props) =>{
    return(
        <TouchableOpacity onPress={props.onPress} activeOpacity={.5} style={style.btn}>
            <FontText style={style.txt}>{props.txt}</FontText>
        </TouchableOpacity>
    )
}

const BtnSvg = (props) =>{
    return(
        <TouchableOpacity onPress={props.onPress} activeOpacity={.5} style={style.btn}>
            {props.svg}
        </TouchableOpacity>
    )
}

const CustomKeypadForPin = (props) =>{
    
    const [stack, setStack] = useState([]);

    useEffect(()=>{
        exportStack();
        // console.log(stack);
    },[stack])

    const exportStack = () =>{
        if(props.onChange) props.onChange(stack);
    }
    const pushStack = (n) =>{
        setStack(stack.length >= 4? stack : [...stack, n]);
    }
    const pullStack = () =>{
        setStack(stack.length <= 0 ? stack : [...stack].slice(0,-1));
    }
    const clearStack = () =>{
        setStack([]);
    }
    return (
        <View style={style.main}>
            <View style={style.col}>
                <Btn txt={1} onPress={()=>{pushStack(1)}}/>
                <Btn txt={4} onPress={()=>{pushStack(4)}}/>
                <Btn txt={7} onPress={()=>{pushStack(7)}}/>
                {props.fg && <BtnSvg svg={<FingerPrintIcon/>}/>}
            </View>
            <View style={style.col}>
                <Btn txt={2} onPress={()=>{pushStack(2)}}/>
                <Btn txt={5} onPress={()=>{pushStack(5)}}/>
                <Btn txt={8} onPress={()=>{pushStack(8)}}/>
                <Btn txt={0} onPress={()=>{pushStack(0)}}/>
            </View>
            <View style={style.col}>
                <Btn txt={3} onPress={()=>{pushStack(3)}}/>
                <Btn txt={6} onPress={()=>{pushStack(6)}}/>
                <Btn txt={9} onPress={()=>{pushStack(9)}}/>
                <BtnSvg svg={<BackSpace />} onPress={pullStack}/>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    main : {
        width : "100%",
        display : 'grid',
        flexDirection : 'row',
        justifyContent : 'center',
        alignItems : 'flex-start',
        width : 'fit-content',
        gap : 30
    },
    col : {
        justifyContent : 'flex-start',
        gap : 20
    },
    btn : {
        justifyContent : 'center',
        alignItems : "center",
        width : 65,
        height : 65,
        borderWidth : .5,
        borderColor : '#DCDDDD',
        borderRadius : 8
    },
    txt : {
        fontSize : 28,
        fontFamily : 'plusJakataSansBold'
    }

})

export default CustomKeypadForPin;