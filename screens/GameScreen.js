import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Title } from "../components/Title";
import { NumberContainer } from "../components/NumberContainer";
import { PrimaryButton } from "../components/PrimaryButton";
import { Card } from "../components/Card";
import { GuessLog } from "../components/GuessLog";

let low = 1,
  high = 100;
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

export const GameScreen = ({ exclude, game }) => {
  const initialGuess = generateRandomBetween(1, 100, exclude);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [rounds, setRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === exclude) {
      game(rounds.length);
    }
  }, [currentGuess, exclude, game]);

  useEffect(() => {
    low = 1;
    high = 100;
  }, []);

  const nextNumberHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < exclude) ||
      (direction === "higher" && currentGuess > exclude)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    let newGuess;
    if (direction === "lower") {
      high = currentGuess - 1;
      newGuess = generateRandomBetween(low, high, currentGuess);
    } else {
      low = currentGuess + 1;
      newGuess = generateRandomBetween(low, high, currentGuess);
    }

    setCurrentGuess(newGuess);
    setRounds((prev) => [newGuess, ...prev]);
  };
  // console.log(rounds);
  const listlen = rounds.length;
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Text style={styles.text}>Higher Or Lower</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={() => nextNumberHandler("lower")}>
              <Ionicons name="remove" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={() => nextNumberHandler("higher")}>
              <Ionicons name="add" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={{ flex: 1, padding: 8, marginHorizontal: 8 }}>
        {/* {rounds.map((round) => (
          <Text key={round}>{round}</Text>
        ))} */}
        <FlatList
          data={rounds}
          renderItem={(itemData) => (
            <GuessLog
              guess={itemData.item}
              roundNo={listlen - itemData.index}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 12,
  },
  text: {
    color: "white",
    textAlign: "center",
    padding: 16,
    marginBottom: 16,
    fontFamily: "open-sans",
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    flex: 1,
  },
});
