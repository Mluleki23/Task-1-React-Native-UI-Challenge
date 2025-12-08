import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface CryptoCardProps {
  symbol: string;
  name: string;
  price: string;
  change: string;
  icon?: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const CryptoCard: React.FC<CryptoCardProps> = ({
  symbol,
  name,
  price,
  change,
  icon = "bitcoin",
  onPress,
  style,
}) => {
  const isPositive = !change.startsWith("-");
  const changeColor = isPositive ? "#10b981" : "#ef4444";

  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.iconContainer}>
        <Icon name={icon} size={28} color={changeColor} />
      </View>

      <View style={styles.detailsContainer}>
        <Text style={styles.symbol}>{symbol}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.price}>{price}</Text>
        <Text style={[styles.change, { color: changeColor }]}>{change}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#1f2937",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    alignItems: "center",
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  detailsContainer: {
    flex: 1,
  },
  symbol: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
    marginBottom: 4,
  },
  name: {
    fontSize: 12,
    color: "#9ca3af",
  },
  priceContainer: {
    alignItems: "flex-end",
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
    marginBottom: 4,
  },
  change: {
    fontSize: 12,
    fontWeight: "600",
  },
});

export default CryptoCard;
