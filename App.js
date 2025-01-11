import { ImageBackground, StyleSheet, Text, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";

export default function App() {
  // 1. triển khai useState để userNumber có hay chưa (phụ thuộc vào component StartGameScreen)
  const [userNumber, setUserNumber] = useState(null);

  // 2. tạo hàn handle set state cho useState khi mà có giá trị đã nhập vào từ màn hình StartGameScreen
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }

  // 3. Triển khai nếu có thì gán biến screen vào GameScreen
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

  // 4. Triển khai nếu không thì gán biến screen vào StartGameScreen
  if (userNumber) {
    screen = <GameScreen />;
  }
  const [enteredNumber, setEnteredNumber] = useState("");
  return (
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
