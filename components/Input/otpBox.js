import React, { useState, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import colors from '../../styles/colors';

const OtpInputBox = ({ numberOfInputs, onChangeText }) => {
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
          style={styles.inputBox}
          autoFocus={i === 0} // Focus on first input initially
        />
      );
    }
    return inputs;
  };

  return <View style={styles.container}>{renderInputs()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    textAlign: 'center',
    backgroundColor:colors.neutral50
  },
});

export default OtpInputBox;
