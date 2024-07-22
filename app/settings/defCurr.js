import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Heading from "../../components/settings/heading";
import { MenuBtn, Section } from "../../components/settings/un";
import { AngleRightIcon, Ticked } from "../../components/svg/svgIcons";
import FontText from "../../components/texts/fontText";
import { router } from "expo-router";
import colors from "../../styles/colors";

const defCurr = () => {
	const [click1, setClick1] = useState(false);
	const [click2, setClick2] = useState(false);
	const [click3, setClick3] = useState(false);
	const [click4, setClick4] = useState(false);
	const Curr = ({ icon, title, t2, icon2, onPress, click1 }) => {
		return (
			<TouchableOpacity
				style={styles.btn}
				onPress={onPress}
				activeOpacity={0.5}
			>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						gap: 8,
						lineHeight: 21,
						paddingHorizontal: 5,
					}}
				>
					<FontText
						style={{
							fontFamily: "plusJakataSansBold",
							fontSize: 14,
							color: colors.neutral800,
						}}
					>
						{title}
					</FontText>
					<FontText
						style={{
							fontFamily: "plusJakataSansBold",
							fontSize: 14,
						}}
					>
						{t2}
					</FontText>
				</View>
				<View>{click1 && icon2}</View>
			</TouchableOpacity>
		);
	};
	return (
		<View style={styles.main}>
			<Heading title={"Default currency"} />
			<Section>
				<Curr
					title={"USD"}
					t2={"USdollars"}
					onPress={() => {
						setClick1(!click1);
						setClick2(false);
						setClick3(false);
						setClick4(false);
					}}
					icon2={<Ticked />}
					click1={click1}
				/>
				<Curr
					title={"NGN"}
					t2={"Naira"}
					onPress={() => {
						setClick2(!click2);
						setClick1(false);
						setClick3(false);
						setClick4(false);
					}}
					icon2={<Ticked />}
					click1={click2}
				/>
				<Curr
					title={"EUR"}
					t2={"Euro"}
					onPress={() => {
						setClick3(!click3);
						setClick2(false);
						setClick1(false);
						setClick4(false);
					}}
					icon2={<Ticked />}
					click1={click3}
				/>
				<Curr
					title={"GBP"}
					t2={"pounds"}
					onPress={() => {
						setClick4(!click4);
						setClick2(false);
						setClick3(false);
						setClick1(false);
					}}
					icon2={<Ticked />}
					click1={click4}
				/>
			</Section>
		</View>
	);
};

export default defCurr;

const styles = StyleSheet.create({
	main: {
		flex: 1,
		padding: 10,
		// gap : 40,
		width: "100%",
		paddingTop: 80,
	},
	text: {
		marginVertical: 8,
	},
	btn: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
});
