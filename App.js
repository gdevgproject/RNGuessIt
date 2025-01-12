import { ImageBackground, StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [userNumber, setUserNumber] = useState(null);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  if (userNumber) {
    screen = <GameScreen />;
  }
  return (
    <SafeAreaProvider>
      <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
        <ImageBackground
          source={require("./assets/images/background.jpg")}
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
          // resizeMode="cover"
        >
          {screen}
        </ImageBackground>
      </LinearGradient>
    </SafeAreaProvider>
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
