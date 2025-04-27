import { View, Text, StyleSheet } from "react-native";

export const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "yellow",
    padding: 16,
    borderRadius: 16,
    margin: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: "yellow",
    fontSize: 32,
    fontFamily: "open-sans-bold",
  },
});
