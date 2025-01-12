import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// 1. chương trình đoán number
// 2. 2 nút để gợi ý cho chương trình là số đó lớn hơn hay nhỏ hơn
// 3. Hiển thị số đã đoán
// 4. Đoán lại dựa trên feedback
function GameScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <Text>Opponent's Guess</Text>
      {/* Guess */}
      <View>
        <Text>Higher or lower?</Text>
        {/* +- */}
      </View>
      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </SafeAreaView>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
