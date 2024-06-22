import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import { Link } from "expo-router";
import Checkbox from "expo-checkbox";
import FormHead from "../../components/form/formHead";
import FontText from "../../components/texts/fontText";
import { Input1 } from "../../components/Input/input1";
import Screen from "../../components/Screen";
import { PrgBtn1 } from "../../components/buttons/progressButtons";
import colors from "../../styles/colors";

function SignUp(props) {

    const [prg, setPrg] = useState(0);


	const [isChecked, setChecked] = useState(false);

	const handleToggle = () => {
		setChecked(!isChecked);
	};

    const Screen1 = () =>{
        return(
            <>
                <FormHead />
                <View style={styles.main}>
                    <FontText style={styles.text}>Create an Account</FontText>
                    <View style={styles.form}>
                        <Input1 title="Email" placeholder="Enter your email" />
                        <Input1
                            title="Username"
                            placeholder="Choose a username"
                        />
                        <View style={styles.check}>
                            <Checkbox
                                style={styles.checkbox}
                                value={isChecked}
                                onValueChange={setChecked}
                            />
                            <FontText style={styles.lowerText}>
                                I have read and agreed to the{" "}
                                <Link href="auth" style={styles.terms}>
                                    Terms & Conditions
                                </Link>{" "}
                            </FontText>
                        </View>
                        <PrgBtn1 title={"Continue"}  onPress={()=>{
                            setPrg(0);
                        }}/>
                        <View style={styles.center}>
                        <FontText style={{color : 'black', fontWeight:'600'}}>Already have an account?  <Link href={'/auth/login'} style={{color: colors.primary}}>Login</Link></FontText>

                        </View>
                    </View>
                </View>
            </>
        )
    }

	return (
		<Screen>
			<View style={styles.container}>
			    {prg == 0 && <Screen1/>}
                {prg == 1 && <FontText>gygygsfd</FontText>}
			</View>
		</Screen>
	);
}
const styles = StyleSheet.create({
	center:{
        alignItems:'center'

    },
    check: {
		flexDirection: "row",
		marginHorizontal: 10,
	},
	checkbox: {
		borderColor: "blue",
		borderRadius: 4,
		width: 16,
		height: 16,
		marginHorizontal: 8,
	},
	container: {
		flex: 1,
	},
	form: {
		width: "100%",
		paddingHorizontal: 10,
		marginVertical: 25,
		gap: 10,
        justifyContent:'center',
	},
	main: {
		flex: 4.3,
		alignItems: "center",
	},
	lowerText: {
		fontSize: 12,
	},
	terms: {
		color: "#0073E6",
	},
	text: {
		fontWeight: "600",
		fontSize: 22,
	},
});
export default SignUp;
