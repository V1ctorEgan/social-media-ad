import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import FontText from "../texts/fontText";
import colors from "../../styles/colors";

export default function ChangeButtonCon({ firstText, secondText, onPress, setChange }) {
	const [color, setColor] = useState(colors.primary);
	const [color2, setColor2] = useState(colors.neutral50);
  const [here, setHere] = useState(false)
  const handleChange = ()=>{
    setChange(!here)
  }
	return (
		<View style={[styles.container]}>
			<TouchableOpacity
				style={[styles.conOne, { backgroundColor: color }]}
				onPress={() => {
					setColor2(colors.neutral50);
          setColor(colors.primary)
          handleChange()
				}}
			>
				<FontText>{firstText}</FontText>
			</TouchableOpacity>
			<TouchableOpacity
				style={[styles.conT, { backgroundColor: color2 }]}
				onPress={() => {
          setColor(colors.neutral50);
          setColor2(colors.primary)
          handleChange()

        }}
			>
				<FontText>{secondText}</FontText>
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		backgroundColor: colors.neutral50,
		width: 324,
		height: 56,
		top: 70,
		// left:33,
		alignItems: "center",
		borderRadius: 40,
		paddingVertical: 8,
		paddingHorizontal: 12,
		gap: 12,
	},
	conOne: {
		backgroundColor: colors.primary,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30,
		width: 144,
		height: 40,
	},
	conT: {
		backgroundColor: colors.neutral50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 30,
		width: 144,
    height: 40,
	},
});
