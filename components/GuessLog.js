import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const GuessLog = ({ roundNo, guess }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.text}>#{roundNo}</Text>
      <Text style={styles.text}>Opponent's Guess: {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderColor: "green",
    borderWidth: 1,
    padding: 12,
    marginVertical: 8,
    backgroundColor: "yellow",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "green",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    borderRadius: 16,
  },
  text: {
    color: "black",
    fontSize: 16,
    fontFamily: "open-sans-bold",
  },
});
