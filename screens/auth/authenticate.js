import { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Link, router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

import Screen from "../../components/Screen";
import FontText from "../../components/texts/fontText";
import CustomPinInp from "../../components/Input/customPinInp";
import CustomKeypadForPin from "../../components/Input/customKeypadForPin";
import { PrgBtn1 } from "../../components/buttons/progressButtons";
import colors from "../../styles/colors";

import biometric from "../../utils/biometric";

const Authenticate = () =>{
    const [stack,setStack] = useState([]);
    const [useBio,setUseBio] = useState(false);
    const [authenticated,authenticate] = useState(false);
    const [buttonEnabled, enableButton] = useState(false);
    const [invalid, invalidate] = useState(false);

    useEffect(()=>{
        const checkIfBioIsEnabled = async () =>{
            const BioEnabled = await AsyncStorage.getItem('biometric_enabled');
            biometric.checkBiometricAccess(e=>{
                if(BioEnabled && e) setUseBio(true);
            })
            
        }
        checkIfBioIsEnabled();
    },[]);

    useEffect(()=>{
        if(stack.length == 4) enableButton(true);
        else enableButton(false);
    },[stack])

    useEffect(()=>{
        if(authenticated){
            // console.log('Access Granted');
            alert('Congratulations! Beta User.\nOur dedicated team is diligently working on enhancing other aspects of the app.\n----------\nPlease stay tuned for further updates.\n----------\nYour feedback on your experience so far is welcome');
            setTimeout(()=>{
                router.replace('/home')
            },300)
        }
        authenticate(false);
    },[authenticated]);




    return(
        <Screen style={{
            paddingTop: 0,
        }}>
            <View style={style.container}>
                <FontText style={style.head}>Welcome back, John!</FontText>
                <CustomPinInp input={stack} secure/>
                {<FontText style={{color:colors.error}}>{invalid && 'Invalid Pin'}</FontText>}
                <View style={style.input}>
                    <CustomKeypadForPin fg={useBio} onChange={(n)=>{
                        setStack(n);
                    }} onBiometric={(data)=>{
                        if(data.success){
                            authenticate(true);
                        }
                    }}/>
                </View>
                <View style={style.end}>
                    <PrgBtn1 title={'Login'} disabled={!buttonEnabled} 
                        onPress={async ()=>{
                            const pin = await AsyncStorage.getItem('pin');
                            if(JSON.stringify(stack) === pin) authenticate(true);
                            else{
                                invalidate(true);
                                setTimeout(()=>{
                                    invalidate(false);
                                },700);
                            }
                        }}
                    />
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
        bottom : 0
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
        paddingTop : 20
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