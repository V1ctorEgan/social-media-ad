import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { BackArrow, FingerPrintIcon, PinIcon } from "../../components/svg/svgIcons";
import Screen from "../../components/Screen";
import FontText from "../../components/texts/fontText";
import { PrgBtn1 } from "../../components/buttons/progressButtons";
import CustomPinInp from "../../components/Input/customPinInp";
import CustomKeypadForPin from "../../components/Input/customKeypadForPin";
import colors from "../../styles/colors";
import { Link, router } from "expo-router";


function SetUp(props) {
	const [prg, setPrg] = useState(0);
	const [stack, setStack] = useState([]);

	const Screen1 = () => {
		return (
			<>
				<View
					style={{ justifyContent: "center", alignItems: "center" }}
				>
					<PinIcon />
				</View>
				{/* <FontText style={styles.text}>Create a Password</FontText>
				 */}
				<View
					style={{
						width: "100%",
						alignItems: "center",
						justifyContent: "center",
						marginTop: 90,
					}}
				>
					<FontText style={styles.text}>Setup Login PINs</FontText>
					<FontText style={styles.text1}>
						Your PIN secures your account and makes it easy
					</FontText>
					<FontText style={styles.text1}>
						to login to your account
					</FontText>
				</View>
				<View style={styles.button}>
					<PrgBtn1 title={"continue"} onPress={()=>setPrg(1)} />
				</View>
			</>
		);
	};

	const Screen2 = () => {
        const [stack,setStack] = useState([]);
		return (
			<>
				<View  width='100%' style={{marginBottom: 90,  }}>
                    <TouchableOpacity style={{ paddingHorizontal:14, top:-42}} onPress={()=> setPrg(0)}>
                    <BackArrow />
                    </TouchableOpacity>
                    <View style={{
                        alignItems:'center'
                    }}>
                    <FontText
						style={{
							fontWeight: "650",
							fontSize: 22,
							fontFamily: "plusJakataSansSemiBold",
                            marginVertical : 20,
						}}
					>
						{prg ==1 ? 'Create PIN' : 'Confirm PIN'}
                        {/* {if prg == 1} */}
					</FontText>
                    </View>
					<View style={{width : "100%",
        justifyContent : 'center',
        alignItems:'center',
        marginVertical : 20,}}>
                    <CustomPinInp input={stack}/>
                    </View>
                    <View style={styles.inputn}>
                    <CustomKeypadForPin  onChange={(n)=>{
                        setStack(n);
                    }}/>
                    </View>
                    <View style={{
                        width:'100%',
                        // borderWidth:1,
                        marginBottom:40,
                        paddingHorizontal:20

                    }}>

                    <PrgBtn1 title={'Continue'} onPress={()=>(setPrg(2), prg == 2 && router.navigate('auth/enable')) }  />
                    </View>
				</View>
			</>
		);
	};
	return (
		<View style={styles.container}>
			{prg == 0 && <Screen1 />}
			{prg >= 1 && <Screen2 />}
			{/* {prg == 2 && <Screen3 />} */}
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
        marginVertical : 20,
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
