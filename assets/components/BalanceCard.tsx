import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";

interface BalanceCardProps {
  label: string;
  amount: string;
  change: string;
  style?: StyleProp<ViewStyle>;
}

const BalanceCard: React.FC<BalanceCardProps> = ({
  label,
  amount,
  change,
  style,
}) => {
  const isPositive = !change.startsWith("-");
  const changeColor = isPositive ? "#10b981" : "#ef4444";

  return (
    <View style={[styles.container, style]}>
      <View style={styles.innerContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.amount}>{amount}</Text>
        <Text style={[styles.change, { color: changeColor }]}>{change}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1f2937",
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#374151",
  },
  innerContainer: {
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    color: "#9ca3af",
    marginBottom: 8,
    fontWeight: "500",
  },
  amount: {
    fontSize: 32,
    fontWeight: "700",
    color: "white",
    marginBottom: 8,
  },
  change: {
    fontSize: 14,
    fontWeight: "600",
  },
});

export default BalanceCard;
