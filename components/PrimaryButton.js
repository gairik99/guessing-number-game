import { View, Text, Pressable, StyleSheet } from "react-native";

export const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.container, styles.press] : styles.container
        }
        android_ripple={{ color: "grey" }}
        onPress={onPress}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    margin: 4,
    borderRadius: 16,
    overflow: "hidden",
  },
  container: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 8,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "400",
  },
  press: {
    opacity: 0.75,
  },
});
