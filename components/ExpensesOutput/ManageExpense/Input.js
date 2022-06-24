import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { GlobalStyle } from "../../../constants/style";

const Input = ({ label, style, textinputConfig, invalid }) => {
  const inputStyles = [styles.input];

  if (textinputConfig && textinputConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if (invalid) {
    inputStyles.push(styles.invalidInput);
  }

  return (
    <View style={[styles.inputContainer, style]}>
      <Text style={[styles.label, invalid && styles.invalidLabel]}>
        {label}
      </Text>
      <TextInput style={inputStyles} {...textinputConfig} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginHorizontal: 8,
  },
  label: {
    fontSize: 12,
    color: GlobalStyle.colors.primary100,
    marginBottom: 10,
  },
  input: {
    backgroundColor: GlobalStyle.colors.primary100,
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
    color: GlobalStyle.colors.primary700,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel: {
    color: GlobalStyle.colors.error500,
  },
  invalidInput: {
    backgroundColor: GlobalStyle.colors.error50,
  },
});
