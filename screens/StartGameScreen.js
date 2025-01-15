import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../constants/colors";

function StartGameScreen(props) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredNumber) {
    setEnteredNumber(enteredNumber);
  }

  // 1. triển khai hàm resetInputHandler ở đây
  function resetInputHandler() {
    setEnteredNumber("");
  }

  // 2. triển khai hàm confirmInputHandler ở đây
  function confirmInputHandler() {
    // 3. convert to Int
    const chosenNumber = parseInt(enteredNumber);

    // 4. check NaN, <= 0, >= 99
    if (!isFinite(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) {
      // 5. Alert API: alert message
      Alert.alert(
        "invalid Number!",
        "Number has to be a number between 1 and 99",
        [{ text: "Ok", style: "destructive", onPress: resetInputHandler }]
      );
    }
    props.onPickNumber(chosenNumber);
  }

  return (
    <SafeAreaView style={styles.inputContainer}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: Colors.primary800,
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
    color: Colors.accent500,
    height: 58,
    fontSize: 24,
    borderBottomColor: Colors.accent500,
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
