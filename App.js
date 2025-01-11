import { ImageBackground, StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function App() {
  const [enteredNumber, setEnteredNumber] = useState("");
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/background.jpg")}
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
        // resizeMode="cover"
      >
        <StartGameScreen />
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.25,
  },
});
