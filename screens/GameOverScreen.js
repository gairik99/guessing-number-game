import { Text, View, Image, StyleSheet } from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";
import { Title } from "../components/Title";
export const GameOverScreen = ({ rounds, userNumber, startOver }) => {
  return (
    <View style={styles.screen}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image source={require("../assets/success.jpg")} style={styles.image} />
      </View>
      <Text style={styles.text}>
        Your phone needed{" "}
        <Text style={{ fontWeight: "bold", color: "orange" }}>{rounds}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={{ fontWeight: "bold", color: "orange" }}>
          {userNumber}
        </Text>
      </Text>
      <PrimaryButton onPress={startOver}>Start New Game</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  imageContainer: {
    height: 300,
    width: 300,
    borderRadius: 150,
    borderWidth: 4,
    borderColor: "black",
    overflow: "hidden",
    margin: 32,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    textAlign: "center",
    fontSize: 24,
    marginVertical: 8,
    fontFamily: "open-sans",
    marginBottom: 24,
  },
});
