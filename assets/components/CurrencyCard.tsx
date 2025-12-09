import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

interface CurrencyCardProps {
  icon?: string;
  symbol: string;
  amount: string;
  balanceLabel: string;
  balanceValue: string;
  isUSD?: boolean;
  marginTop?: number;
}

const CurrencyCard: React.FC<CurrencyCardProps> = ({
  icon = "ethereum",
  symbol,
  amount,
  balanceLabel,
  balanceValue,
  isUSD = false,
  marginTop = 20,
}) => {
  return (
    <View style={[styles.currencyCard, { marginTop }]}>
      <View style={styles.currencyHeader}>
        <View style={styles.currencyInfo}>
          {!isUSD && (
            <View style={styles.iconContainer}>
              <MaterialIcon name={icon} size={28} color="white" />
            </View>
          )}
          {isUSD && <Text style={styles.currencySymbolUSD}>$</Text>}
          <Text style={styles.currencySymbol}>{symbol}</Text>
          <MaterialIcon name="chevron-down" size={20} color="#9ca3af" />
        </View>
        <View style={styles.currencyAction} />
      </View>

      <Text style={styles.currencyAmount}>{amount}</Text>

      <View style={styles.currencyBalance}>
        <Text style={styles.balanceLabel}>{balanceLabel}</Text>
        <Text style={styles.balanceValue}>{balanceValue}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  currencyCard: {
    marginHorizontal: 20,
    marginBottom: 0,
    backgroundColor: "#2a2a3e",
    borderRadius: 16,
    padding: 20,
  },
  currencyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  currencyInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  currencySymbol: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
  currencySymbolUSD: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
    marginRight: 4,
  },
  currencyAction: {
    width: 24,
    height: 24,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  currencyAmount: {
    fontSize: 44,
    fontWeight: "700",
    color: "white",
    marginBottom: 12,
  },
  currencyBalance: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  balanceLabel: {
    fontSize: 12,
    color: "#9ca3af",
  },
  balanceValue: {
    fontSize: 14,
    color: "white",
    fontWeight: "600",
  },
});

export default CurrencyCard;
