import {
  Text,
  View,
  Image,
  StyleSheet,
  // Dimensions,
  useWindowDimensions,
} from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";
import { Title } from "../components/Title";
export const GameOverScreen = ({ rounds, userNumber, startOver }) => {
  // console.log(deviceWidth);
  const { height } = useWindowDimensions();
  return (
    <View style={styles.screen}>
      <Title>Game Over!</Title>
      <View
        style={[
          styles.imageContainer,
          {
            height: height < 380 ? 150 : 300,
            width: height < 380 ? 150 : 300,
            borderRadius: height < 380 ? 75 : 150,
            marginTop: height < 380 ? 8 : 32,
          },
        ]}
      >
        <Image source={require("../assets/success.jpg")} style={styles.image} />
      </View>
      <Text
        style={[
          styles.text,
          {
            fontSize: height < 380 ? 20 : 24,
            marginBottom: height < 380 ? 8 : 24,
          },
        ]}
      >
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

// const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  imageContainer: {
    // height: deviceWidth < 380 ? 180 : 300,
    // width: deviceWidth < 380 ? 180 : 300,
    // borderRadius: deviceWidth < 380 ? 90 : 150,
    borderWidth: 4,
    borderColor: "black",
    overflow: "hidden",
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
