import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function PrimaryButton({ children }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) => {
          console.log(pressed);
          const style = pressed
            ? [styles.buttonInnerContainer, styles.pressed, { elevation: 0 }]
            : styles.buttonInnerContainer;
          return style;
        }}
        android_ripple={{ backgroundColor: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    backgroundColor: "#72063c",
    margin: 4,
    borderRadius: 28,
    overflow: "hidden",
  },

  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
  },
  pressed: {
    backgroundColor: "yellow",
    opacity: 0.75,
  },
});

export default PrimaryButton;
