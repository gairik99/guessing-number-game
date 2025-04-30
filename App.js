import { useState } from "react";
import { StyleSheet, ImageBackground, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { StartGameScreen } from "./screens/StartGameScreen";
import { GameScreen } from "./screens/GameScreen";
import { GameOverScreen } from "./screens/GameOverScreen";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const [rounds, setRounds] = useState(0);
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };

  const gameOverHandler = (numberOfRound) => {
    setGameOver(true);
    setRounds(numberOfRound);
  };

  const startNewGameHandler = () => {
    setUserNumber(null);
    setGameOver(false);
    setRounds(0);
  };

  if (!fontsLoaded) {
    return (
      <ActivityIndicator size="large" color="#ddb52f" style={styles.loading} />
    );
  }
  let screen = <StartGameScreen pickedNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = <GameScreen exclude={userNumber} game={gameOverHandler} />;
  }
  if (gameOver) {
    screen = (
      <GameOverScreen
        userNumber={userNumber}
        rounds={rounds}
        startOver={startNewGameHandler}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" translucent={true} />
      <LinearGradient style={styles.container} colors={["#4e0329", "#ddb52f"]}>
        <ImageBackground
          source={require("./assets/background.png")}
          resizeMode="cover"
          style={styles.container}
          imageStyle={{ opacity: 0.2 }}
        >
          <SafeAreaView
            style={styles.container}
            edges={["top", "bottom", "left", "right"]}
          >
            {screen}
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
