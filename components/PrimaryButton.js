import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

function PrimaryButton({ children, ...props }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) => {
          const style = pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer;
          return style;
        }}
        android_ripple={{ backgroundColor: Colors.primary600 }}
        onPress={props.onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    backgroundColor: Colors.primary500,
    margin: 4,
    borderRadius: 28,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    // elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    backgroundColor: Colors.primary600,
    opacity: 0.85,
  },
});

export default PrimaryButton;
