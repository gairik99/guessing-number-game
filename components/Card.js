import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";

export const Card = ({ children }) => {
  const { height } = useWindowDimensions();
  const deviceMargin = height < 380 ? 16 : 36;
  const devicePadding = height < 380 ? 4 : 36;
  return (
    <View
      style={[styles.card, { marginTop: deviceMargin, padding: devicePadding }]}
    >
      {children}
    </View>
  );
};

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    borderRadius: 16,
    // padding: 16,
    // marginTop: deviceWidth < 380 ? 16 : 36,
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
