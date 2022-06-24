import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-web";
import { GlobalStyle } from "../constants/style";

const ErrorOverLay = ({ message, onComfirm }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occurred!</Text>
      <Text style={styles.text}>{message}</Text>
      <Button onPress={onComfirm}>Okay!</Button>
    </View>
  );
};

export default ErrorOverLay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: GlobalStyle.colors.primary700,
  },
  text: {
    textAlign: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
