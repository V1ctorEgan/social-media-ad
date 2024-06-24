import { StyleSheet, View, TouchableOpacity, Platform } from "react-native";
import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {router} from 'expo-router';

import { BackArrow, FaceID, FingerPrintIcon } from "../../components/svg/svgIcons";
import Screen from "../../components/Screen";
import FontText from "../../components/texts/fontText";
import { PrgBtn1 } from "../../components/buttons/progressButtons";
import { Link } from "expo-router";
import colors from "../../styles/colors";


import biometric from "../../utils/biometric";

const Enable = () => {
    const [prg, setPrg] = useState(0)
    const Screen1 = () => {
        return(
            <>
            <Screen>
			<TouchableOpacity
				style={{
					marginTop: 35,
					marginLeft: 15,
				}}
			>
				<BackArrow />
			</TouchableOpacity>
			<View style={styles.container}>
				<View style={{ alignItems: "center", marginTop: 100 }}>
					<FingerPrintIcon />
				</View>
				<View style={styles.core}>
                    <View style={{alignItems:'center'}}>
					<FontText style={styles.text}>Enable Fingerprint</FontText>
					<FontText style={[{ marginTop: 20 }, styles.txt]}>Signing in with your fingerprint is and more secure </FontText>
					<FontText style={styles.txt}>way to login to your account</FontText>
                </View>
                <View style={{ paddingHorizontal: 15, alignItems: "center", width: "100%" }}>
                    <PrgBtn1 title={"Enable fingerprint now"} onPress={()=>{
                        // 
                        biometric.authenticate().then(async (data) =>{
                            if(data.success){
                                await AsyncStorage.setItem('biometric_enabled','1');
                                if(biometric.FIDEnabled && Platform.OS === 'ios'){
                                    setPrg(1);
                                } else {
                                    router.navigate('/');
                                }
                                
                            }
                        })
                    }} />
                    
                    <Link href={"#"} style={{ color: colors.primary }}>
                        Not now
                    </Link>
                </View>
				</View>
			</View>
		</Screen>
            </>
        )
    }
    const Screen2 = () => {
        return(
            <>
                <Screen>
                    <TouchableOpacity onPress={()=>setPrg(0)} style={{marginTop: 35,marginLeft: 15,}} >
                        <BackArrow />
                    </TouchableOpacity>
                    <View style={styles.container}>
                        <View style={{ alignItems: "center", marginTop: 100 }} >
                            <FaceID />
                        </View>
                        <View style={styles.core}>
                            <View style={{alignItems:'center'}}>
                                <FontText style={styles.text}>Enable Face ID</FontText>
                                <FontText style={[{ marginTop: 20 }, styles.txt]}>Face ID is a convenient and secure way to login</FontText>
                                <FontText style={styles.txt}>to your account</FontText>
                            </View>
                            <View style={{ paddingHorizontal: 15, alignItems: "center", width: "100%" }}>
                                <PrgBtn1 title={"Enable face ID now"} onPress={()=>{
                                    router.navigate('/');
                                }} />
                                <Link href={"#"} style={{ color: colors.primary }}>Not now</Link>
                            </View>
                        </View>
                    </View>
                </Screen>
            </>
        )
    }
	return (
		<>
            {prg == 0 && <Screen1 />}
            {prg == 1 && <Screen2 />}
        </>
	);
};

export default Enable;

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		bottom:30,
		width: "100%",
	},
	core: {
		marginTop: 60,
		alignItems: "center",
        gap:270
	},
	text: {
		color: "black",
		fontSize: 22,
	},
	txt: {
		fontSize: 14,
		fontWeight: "650",
	},
});
