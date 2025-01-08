import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>
        <View>
          <Text>Guess My Number</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text>Enter a Number</Text>
          <TextInput placeholder="____" />
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button}>
              <Text>Reset</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text>Confirm</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    backgroundColor: "",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#71063c",
    padding: 10,
    borderRadius: 20,
    paddingHorizontal: 40,
  },
});
