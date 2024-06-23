import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";

import Screen from "../../components/Screen";
import FontText from "../../components/texts/fontText";
import CustomPinInp from "../../components/Input/customPinInp";
import CustomKeypadForPin from "../../components/Input/customKeypadForPin";
import { PrgBtn1 } from "../../components/buttons/progressButtons";
import colors from "../../styles/colors";

const Authenticate = () =>{
    const [stack,setStack] = useState([]);

    return(
        <Screen style={{
            paddingTop: 0,
        }}>
            <View style={style.container}>
                <FontText style={style.head}>Welcome back, John!</FontText>
                <CustomPinInp input={stack} secure/>
                <View style={style.input}>
                    <CustomKeypadForPin fg={true} onChange={(n)=>{
                        setStack(n);
                    }}/>
                </View>
                <View style={style.end}>
                    <PrgBtn1 title={'Login'} />
                    <Link href="#"><FontText style={style.link}>Forgot PIN?</FontText></Link>
                </View>
            </View>
            
        </Screen>
    )
}

const style = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        position : 'absolute',
        width : '100%',
        bottom : 20
    },
    head : {
        fontSize : 22,
        marginVertical : 20,
        fontFamily : 'plusJakataSansSemiBold'
    },
    input : {
        width : "100%",
        justifyContent : 'center',
        marginVertical : 20,
        paddingTop : 25
    },
    end : {
        width : "100%",
        marginBottom : 30,
        alignItems : 'center',
        justifyContent : 'center',
        paddingHorizontal : 10
    },
    link : {
        color : colors.primary,
        fontSize : 14
    }
})

export default Authenticate;