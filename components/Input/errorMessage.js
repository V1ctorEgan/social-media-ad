import React from "react";
import { StyleSheet, Text } from "react-native";
import FontText from "../texts/fontText";


function ErrorMessage({ error, visible }) {
	if (!visible || !error) return null;
	return <FontText style={styles.error}>{error}</FontText>;
}

const styles = StyleSheet.create({
	error: {
		color: "red",
	},
});
export default ErrorMessage;
