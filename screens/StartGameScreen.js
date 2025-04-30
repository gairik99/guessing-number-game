import { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Alert,
  Text,
  useWindowDimensions,
  KeyboardAvoidingView,
} from "react-native";
import { PrimaryButton } from "../components/PrimaryButton";
import { Title } from "../components/Title";
import { Card } from "../components/Card";

export const StartGameScreen = ({ pickedNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  const { height } = useWindowDimensions();

  const handleChangeNumber = (number) => {
    setEnteredNumber(number);
  };

  const resetInputHandler = () => {
    setEnteredNumber("");
  };
  const confirmInputHandler = () => {
    const entereNumber = parseInt(enteredNumber);
    if (isNaN(entereNumber) || entereNumber <= 0 || entereNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    pickedNumber(entereNumber);
  };

  const deviceMargin = height < 380 ? 4 : 60;
  const devicePadding = height < 380 ? 4 : 8;
  const inph = height < 380 ? 48 : 60;
  const fonts = height < 380 ? 24 : 32;
  return (
    <KeyboardAvoidingView style={styles.screen} behavior="padding">
      <View
        style={[
          styles.screen,
          { marginTop: deviceMargin, padding: devicePadding },
        ]}
      >
        <Title>Guess My Number</Title>
        <Card>
          <Text style={styles.text}>Enter A Number</Text>
          <TextInput
            style={[styles.input, { height: inph, fontSize: fonts }]}
            maxLength={2}
            keyboardType="number-pad"
            onChangeText={handleChangeNumber}
            value={enteredNumber}
            onSubmitEditing={confirmInputHandler}
            returnKeyType="done"
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.button}>
              <PrimaryButton onPress={confirmInputHandler}>
                Confirm
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    flex: 1,
  },

  // inputContainer: {
  //   marginHorizontal: 16,
  //   borderRadius: 16,
  //   padding: 16,
  //   marginTop: 36,
  //   backgroundColor: "#4e0329",
  //   elevation: 32,
  //   shadowColor: "yellow ",
  //   shadowOffset: { width: 1, height: 2 },
  //   shadowRadius: 4,
  //   shadowOpacity: 0.25,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  input: {
    borderBottomColor: "yellow",
    borderBottomWidth: 2,
    color: "yellow",
    marginVertical: 8,
    fontWeight: "500",
    width: 100,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  button: {
    flex: 1,
  },
  text: {
    color: "white",
    textAlign: "center",
    padding: 16,
    fontFamily: "open-sans",
    // fontSize: 16,
  },
});
