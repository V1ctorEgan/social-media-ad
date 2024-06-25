import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import * as Yup from "yup";

import { Link } from "expo-router";
import Checkbox from "expo-checkbox";
import FormHead from "../../components/form/formHead";
import FontText from "../../components/texts/fontText";
import { Input1 } from "../../components/Input/input1";
import Screen from "../../components/Screen";
import { PrgBtn1 } from "../../components/buttons/progressButtons";
import colors from "../../styles/colors";
import SSA from "../../components/form/ssa";
import OtpBox2 from "../../components/Input/otpBox2";
import { router } from "expo-router";
import FormValidation from "../../components/form/formValidation";

function SignUp(props) {
	const [prg, setPrg] = useState(0);

	const [isChecked, setChecked] = useState(false);

	const handleToggle = () => {
		setChecked(!isChecked);
	};
	const passwordSchema = Yup.string()
  .min(8, 'Password must be at least 8 characters long')
  .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/, 'Password must contain one lowercase, one uppercase, one number, and one special character')
  .required('Password is required');

const confirmPasswordSchema = Yup.string()
  .oneOf([Yup.ref('password'), null], 'Passwords must match')
  .required('Confirm password is required');

	const validationSchema = Yup.object().shape({
		email: Yup.string().required().email().label("Email"),
		username: Yup.string().required().label("Username"),
		password: passwordSchema,
		confirmPassword: confirmPasswordSchema,
	});

	const Screen1 = () => {
		return (
			<>
				<FormHead />
				<View style={styles.main}>
					<FontText style={styles.text}>Create an Account</FontText>
					<FormValidation
					initialValues={{ email: "", username: "" }}
					onSubmit={(values) => console.log(values)}
					validationSchema={validationSchema}
					>
					<View style={styles.form}>
						<Input1 title="Email" placeholder="Enter your email" name="email"  />
						<Input1
							title="Username"
							placeholder="Choose a username"
							name= "username"
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
						<PrgBtn1
							title={"Continue"}
							onPress={() => {
								setPrg(1);
							}}
						/>
						<View style={styles.center}>
							<FontText
								style={{ color: "black", fontWeight: "600" }}
							>
								Already have an account?{" "}
								<Link
									href={"/auth/login"}
									style={{ color: colors.primary }}
								>
									Login
								</Link>
							</FontText>
						</View>
					</View>
					</FormValidation>
					<SSA />
				</View>
			</>
		);
	};
	const Screen2 = () => {
		return (
			<View style={[styles.main, styles.next]}>
				<FontText style={styles.text}>Verify your Email</FontText>
				<FontText style={styles.text1}>
					Enter the 6 digit code sent to johndoe@gmail.com
				</FontText>
				<View style={styles.box}>
					<OtpBox2 />
				</View>
				<View
					style={{ width: "100%", flex: 1, paddingHorizontal:10,alignItems:'center'}}
				>
					<PrgBtn1 title={"Continue"}  onPress={ ()=> setPrg(2)}/>
                    <FontText style={{color: colors.primary}}>Didn’t receive a code?</FontText>
				</View>
			</View>
		);
	};
	const Screen3 = () =>{
		return(
			<View style={[styles.main, styles.next]}> 
				<FontText style={styles.text}>Create a Password</FontText>
				<View style={styles.form}>
					<FormValidation initialValues={{ password: "", confirmPassword: "" }}
					onSubmit={(values) => console.log(values)}
					validationSchema={validationSchema}>
				<Input1 title="Password" placeholder="Enter your password" name="password" />
				<Input1 title="Confirm password" placeholder="Confirm your password" name="confirmPassword" />
				<PrgBtn1 title={'Continue'} onPress={()=>{
					router.navigate('auth/setUp')
				}}/>
				</FormValidation>
				</View>

			</View>
		)
	}
	return (
		<Screen>
			<View style={styles.container}>
				{prg == 0 && <Screen1 />}
				{prg == 1 && <Screen2 />}
				{prg == 2 && <Screen3 />}
			</View>
		</Screen>
	);
}
const styles = StyleSheet.create({
	box: {
		// backgroundColor:'red'
		width:'100%'

	},
	center: {
		alignItems: "center",
	},
	check: {
		flexDirection: "row",
		marginHorizontal: 10,
		marginLeft: 0,
		marginVertical: 10,
	},
	checkbox: {
		borderColor: colors.primary,
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
		justifyContent: "center",
	},
	main: {
		flex: 4.3,
		alignItems: "center",
        // flex:1,
        width:'100%',
        // backgroundColor:'yellow'
		// backgroundColor:'red'
	},
	next: {
		marginTop: 110,
	},
	lowerText: {
		fontSize: 12,
	},
	terms: {
		color: "#0073E6",
	},
	text: {
		fontWeight: "650",
		fontSize: 22,
		fontFamily:'plusJakataSansSemiBold'
	},
	text1: {
		marginTop: 10,
        fontWeight:'650',
        fontSize:14,
		fontFamily:'plusJakataSansSemiBold'

        
		// backgroundColor:'blue'
	},
});
export default SignUp;
