import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

function StartGameScreen() {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredNumber) {
    setEnteredNumber(enteredNumber);
  }

  // FIXME: triển khai hàm resetInputHandler ở đây
  function resetInputHandler() {
    setEnteredNumber("");
  }

  // TODO: triển khai hàm confirmInputHandler ở đây
  function confirmInputHandler() {
    // convert to Int
    const chosenNumber = parseInt(enteredNumber);
    // check NaN, <= 0, >= 99

    if (!isFinite(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) {
      // Alert API: alert message

      // press ok => reset the input content

      Alert.alert(
        "invalid Number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Ok", style: "destructive", onPress: resetInputHandler }]
      );
    }
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false}
        autoCapitalize="none"
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#4e0329",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    // justifyContent: "center",
    alignItems: "center",
  },
  numberInput: {
    color: "#ddb52f",
    height: 58,
    fontSize: 24,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: "bold",
    width: 50,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
