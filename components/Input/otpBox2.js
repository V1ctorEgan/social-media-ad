import React, {useRef, useState}from "react";
import { View, StyleSheet, TextInput } from "react-native";
import colors from "../../styles/colors";

function OtpBox2(props) {
    const numberOfInputs = 6;
    const [currentInput, setCurrentInput] = useState(0);
    const inputRefs = useRef([]);
  
    const handleKeyPress = (text, index) => {
      if (text.length === 1) {
        const nextIndex = index + 1;
        if (nextIndex < numberOfInputs) {
          inputRefs.current[nextIndex].focus();
          setCurrentInput(nextIndex);
        } else {
          onChangeText(text); // Call parent function with OTP
        }
      } else if (text === '') { // Handle backspace
        const prevIndex = index - 1;
        if (prevIndex >= 0) {
          inputRefs.current[prevIndex].focus();
          setCurrentInput(prevIndex);
        }
      }
    };
    const renderInputs = () => {
        const inputs = [];
        for (let i = 0; i < numberOfInputs; i++) {
          inputs.push(
            <TextInput
              key={i}
              ref={(ref) => (inputRefs.current[i] = ref)}
              maxLength={1}
              keyboardType="numeric"
              onChangeText={(text) => handleKeyPress(text, i)}
              style={styles.box}
              autoFocus={i === 0} // Focus on first input initially
            />
          );
        }
        return inputs;
      };
	return (
		<View style={styles.container}>
            {renderInputs()}
			
		</View>
	);
}

const styles = StyleSheet.create({
	inputBox: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        textAlign: 'center',
      },
    box: {
		width: 50,
		height: 53,
		borderColor: "black",
		backgroundColor: colors.neutral50,
		borderRadius: 5,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center'
	},
	container: {
		flexDirection: "row",
		// gap:10,
		width: "100%",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 15,
		paddingVertical: 20,
	},
});
export default OtpBox2;
