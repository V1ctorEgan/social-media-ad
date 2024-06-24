import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { BackArrow, FingerPrintIcon, PinIcon } from "../../components/svg/svgIcons";
import Screen from "../../components/Screen";
import FontText from "../../components/texts/fontText";
import { PrgBtn1 } from "../../components/buttons/progressButtons";
import CustomPinInp from "../../components/Input/customPinInp";
import CustomKeypadForPin from "../../components/Input/customKeypadForPin";
import colors from "../../styles/colors";
import { Link, router } from "expo-router";

import biometric from "../../utils/biometric";

let prePin = [];
function SetUp(props) {
	const [prg, setPrg] = useState(0);
    
    const setPrePin = (pin) =>{
        if(prePin.length != 4) prePin = pin;
    }

	const Screen1 = () => {
		return (
			<>
				<View style={{justifyContent: "center", alignItems: "center"}}>
					<PinIcon />
				</View>
				<View style={{width: "100%", alignItems: "center", justifyContent: "center", marginTop: 90}}>
					<FontText style={styles.text}>Setup Login PINs</FontText>
					<FontText style={styles.text1}>Your PIN secures your account and makes it easy</FontText>
					<FontText style={styles.text1}>to login to your account</FontText>
				</View>
				<View style={styles.button}>
					<PrgBtn1 title={"continue"} onPress={()=>setPrg(1)} />
				</View>
			</>
		);
	};

	const Screen2 = () => {
        const [stack,setStack] = useState([]);
        const [clear, setClear] = useState(false);
        const [allowProg,setAllowProg] = useState(false);
        const [correspondence, setCorrespondence] = useState([false,true]);
    
        useEffect(()=>{
            if(stack.length == 4) {
                setPrePin([...stack]);
                setAllowProg(true);
            }
        }, [stack]);
		return (
			<>
				<View width='100%' style={{marginBottom: 90,  }}>
                    <TouchableOpacity style={{ paddingHorizontal:14, top:-42}} onPress={()=> setPrg(0)}>
                        <BackArrow />
                    </TouchableOpacity>
                    <View style={{alignItems:'center'}}>
                        <FontText style={{fontWeight: "650",fontSize: 22,fontFamily: "plusJakataSansSemiBold",marginVertical : 20}}>
                            {prg == 1 ? 'Create PIN' : 'Confirm PIN'}
                        </FontText>
                    </View>
					<View style={{width : "100%", justifyContent : 'center', alignItems:'center', marginVertical : 20}}>
                        <CustomPinInp input={stack}/>
                        {correspondence[0] && <FontText style={{color: colors.error}}>Pin doesn't match</FontText>}
                        {!correspondence[1] && <FontText style={{color: colors.success}}>Success please wait...</FontText>}
                    </View>
                    <View style={styles.inputn}>
                        <CustomKeypadForPin  onChange={(n)=>{
                            setStack(n);
                        }} clear={clear}/>
                    </View>
                    <View style={{
                        width:'100%',
                        marginBottom:40,
                        paddingHorizontal:20
                    }}>

                    <PrgBtn1 disabled={!allowProg} title={'Continue'} onPress={ async ()=>{
                        if(prg == 1){
                            setStack([]);
                            setClear(true);
                            setPrg(2);
                        }
                        else if(prg == 2 && JSON.stringify(stack) === JSON.stringify(prePin)){  
                            setCorrespondence([false,false]);
                            biometric.checkBiometricAccess((e)=>{
                                setTimeout(async()=>{
                                    await AsyncStorage.setItem('pin',JSON.stringify(prePin));
                                    await AsyncStorage.setItem('user_authenticated','1');
                                    if(e && (biometric.FNGEnabled || biometric.FIDEnabled)) router.navigate('auth/enable');
                                    else router.navigate('/');
                                },500);
                            });
                        }
                        else {
                            setAllowProg(false);
                            setCorrespondence([true,true]);
                            // console.log('Pin doesn\'t match');
                            setTimeout(()=>{
                                setStack([]);
                                setClear(true);
                                setCorrespondence([false,true]);
                                prePin = [];
                                setPrg(1);
                            },500)
                        }
                    }}/>
                    </View>
				</View>
			</>
		);
	};
	return (
		<View style={styles.container}>
			{prg == 0 && <Screen1 />}
			{prg >= 1 && <Screen2 />}
		</View>
	);
}

const styles = StyleSheet.create({
	button: {
		marginTop: 220,
		width: "100%",
		paddingHorizontal: 15,
	},
	container: {
		justifyContent: "center",
		alignItems: "center",
		marginTop: 150,
		width: "100%",
		justifyContent: "center",
	},
	text: {
		fontWeight: "650",
		fontSize: 22,
		borderColor: "red",
		marginBottom: 20,
	},
	text1: {
		fontSize: 14,
		fontWeight: "650",
	},
	containere: {
		flex: 1,
		alignItems: "center",
		position: "absolute",
		width: "100%",
		bottom: 20,
	},
	head: {
		fontSize: 22,
		marginVertical: 20,
		// fontFamily: "plusJakataSansSemiBold",
	},
	input: {
		width: "100%",
		justifyContent: "center",
		marginVertical: 20,
		paddingTop: 25,
	},
    inputn:{
        width : "100%",
        justifyContent : 'center',
        marginVertical : 10,
        paddingTop : 25
    },
	end: {
		width: "100%",
		marginBottom: 30,
		alignItems: "center",
		justifyContent: "center",
		paddingHorizontal: 10,
	},
	link: {
		color: colors.primary,
		fontSize: 14,
	},
});
export default SetUp;
