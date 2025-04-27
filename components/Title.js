import React from "react";
import { Text, StyleSheet } from "react-native";
export const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 16,
    // fontWeight: "bold",
    textAlign: "center",
    color: "white",
    textAlign: "center",
    borderColor: "white",
    borderWidth: 2,
    padding: 16,
  },
});
