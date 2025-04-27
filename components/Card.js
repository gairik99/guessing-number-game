import React from "react";
import { View, StyleSheet } from "react-native";

export const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    borderRadius: 16,
    padding: 16,
    marginTop: 36,
    backgroundColor: "#4e0329",
    elevation: 32,
    shadowColor: "yellow ",
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.25,
    justifyContent: "center",
    alignItems: "center",
  },
});
