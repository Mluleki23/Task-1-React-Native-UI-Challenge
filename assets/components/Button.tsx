import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  style?: any;
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  backgroundColor = "#333",
  textColor = "white",
  style,
}) => {
  const [isPressed, setIsPressed] = useState(false);

  const adjustedBackgroundColor = isPressed
    ? adjustBrightness(backgroundColor, -20)
    : backgroundColor;

  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: adjustedBackgroundColor },
        style,
      ]}
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      activeOpacity={0.8}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
};

// Helper function to adjust color brightness
const adjustBrightness = (color: string, percent: number): string => {
  const num = parseInt(color.replace("#", ""), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = (num >> 8) & (0x00ff + amt);
  const B = (num & 0x0000ff) + amt;
  return (
    "#" +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Button;
