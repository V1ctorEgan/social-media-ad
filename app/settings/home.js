import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Heading from "../../components/settings/heading";
import FontText from "../../components/texts/fontText";
import ProfilePic from "../../components/settings/profilePic";
import colors from "../../styles/colors";
import { Input1 } from "../../components/Input/input1";
import FormValidation from "../../components/form/formValidation";
import * as Yup from "yup";
import { router } from "expo-router";

const Index = () => {
	const validationSchema = Yup.object().shape({
		email: Yup.string().required().email().label("Email"),
		phonenumber: Yup.number().required().label("phonenumber"),
	});
	return (
		<View>
			<Heading title={"Profile"} />
			<View style={styles.main}>
				<ProfilePic />
				<TouchableOpacity
					style={styles.button}
					onPress={() => router.navigate('./editProfile')}
				>
					<FontText style={styles.buttonText}>Edit profile</FontText>
				</TouchableOpacity>
				<FormValidation
					initialValues={{ email: "", phonenumber: "" }}
					onSubmit={(values) => console.log(values)}
					validationSchema={validationSchema}
				>
          <View style={{  width:'100%', paddingHorizontal:13, marginTop:24}}>

					<Input1
						title={"Email"}
						name={"email"}
						placeholder={"johndoe@gmail.com"}
					/>
					<Input1
						title={"Phone number"}
						name={"phonenumber"}
						placeholder={"0800000000"}
            style={{marginTop:16}}
					/>
          </View>
				</FormValidation>
			</View>
		</View>
	);
};

export default Index;

const styles = StyleSheet.create({
	button: {
		borderRadius: 5,
		marginTop: 16,
		color: "green",
		backgroundColor: colors.primary,
		width: 111,
		height: 34,
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		fontSize: 12,
		fontWeight: 650,
		color: "white",
	},
	main: {
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 100,
    width:'100%',
	},
	profile: {
		width: 135,
		height: 135,
		borderRadius: 67.5,
		backgroundColor: "#000",
	},
});
