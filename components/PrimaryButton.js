import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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
        android_ripple={{ backgroundColor: "#640233" }}
        onPress={props.onPress}
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
    // elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    backgroundColor: "#610432",
    opacity: 0.85,
  },
});

export default PrimaryButton;
