import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [number, setNumber] = useState(null);
  const [isInvalidNumber, setIsInvalidNumber] = useState(false);
  console.log(number);
  function resetHandler() {
    setNumber(null);
  }
  function setNumberHandler(value) {
    value = value.replace(/[^0-9]/g, "");
    setNumber(value);
  }

  function confirmHandler() {
    if (number < 0 || number > 99) {
      setIsInvalidNumber(true);
    }
  }

  function closeInvalidNumberModal() {
    setIsInvalidNumber(false);
  }
  return (
    <>
      <StatusBar style="auto" />
      <IsInvalidNumberModal
        isInvalidNumber={isInvalidNumber}
        closeInvalidNumberModal={closeInvalidNumberModal}
      />
      <View style={styles.appContainer}>
        <View style={styles.title}>
          <Text style={styles.titleText}>Guess My Number</Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.typeContainer}>
            <Text style={styles.inputTitle}>Enter a Number</Text>
            <TextInput
              style={styles.textInput}
              onChangeText={(value) => setNumberHandler(value)}
              value={number}
            />
          </View>
          <View style={styles.buttonContainer}>
            {/* TODO: 1. Làm cho pressable này có style khi nhấn vào */}
            <Pressable style={styles.button} onPress={resetHandler}>
              <Text style={styles.buttonText}>Reset</Text>
            </Pressable>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText} onPress={confirmHandler}>
                Confirm
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </>
  );
}

function IsInvalidNumberModal({ isInvalidNumber, ...props }) {
  // Góc nhìn user:
  // Nhập số quá giới hạn và ấn confirm thì hiện modal thông báo
  // Tắt bằng nút okay, và nhập lại số

  // Góc nhìn dev:
  // 1. Tạo và gọi hàm kiểm tra khi ấn confirm: nếu số nhỏ hơn 0 và lớn hơn 99
  // 2. Hàm gọi modal thông báo
  // 3. Modal thông báo hiển thị title, content và nút okay
  // 4. Khi ấn nút okay thì gọi function đóng modal
  console.log(props.closeInvalidNumberModal);
  return (
    <Modal visible={isInvalidNumber}>
      <View>
        <Text>Invalid Number</Text>
        <Text>Please enter a number between 1 and 99</Text>
        <Button title="Okay" onPress={props.closeInvalidNumberModal} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#7b4542",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "white",
  },
  titleText: {
    color: "white",
    padding: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  inputContainer: {
    backgroundColor: "#3b021e",
    padding: 20,
    borderRadius: 10,
    width: "90%",
  },
  inputTitle: {
    color: "#d2a352",
    marginBottom: 10,
  },
  typeContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#d2a352",
    color: "#d2a352",
    width: "20%",
    padding: 2,
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#71063b",
    padding: 6,
    borderRadius: 20,
    paddingHorizontal: 50,
  },
  buttonText: {
    color: "white",
  },
  testBorder: {
    borderWidth: 1,
    borderColor: "white",
  },
});
