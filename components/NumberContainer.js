import {
  View,
  Text,
  StyleSheet,
  // Dimensions,
  useWindowDimensions,
} from "react-native";

export const NumberContainer = ({ children }) => {
  const { height } = useWindowDimensions();
  const deviceMargin = height < 380 ? 4 : 36;
  const devicePadding = height < 380 ? 4 : 36;
  // const fnt = height < 380 ? 24 : 32;
  const text = height < 380 ? 16 : 32;
  return (
    <View
      style={[
        styles.container,
        { margin: deviceMargin, padding: devicePadding },
      ]}
    >
      <Text style={[styles.numberText, { fontSize: text }]}>{children}</Text>
    </View>
  );
};

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "yellow",
    // padding: deviceWidth < 380 ? 12 : 24,
    borderRadius: 4,
    // margin: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: "yellow",
    // fontSize: 32,
    fontFamily: "open-sans-bold",
  },
});
