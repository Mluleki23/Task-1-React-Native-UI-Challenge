import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface PeriodTabProps {
  period: string;
  isSelected: boolean;
  onPress: () => void;
}

const PeriodTab: React.FC<PeriodTabProps> = ({
  period,
  isSelected,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: isSelected ? "#6366f1" : "#1f2937" },
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, { color: isSelected ? "white" : "#9ca3af" }]}>
        {period}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 13,
    fontWeight: "600",
  },
});

export default PeriodTab;
