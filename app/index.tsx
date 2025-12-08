import Button from "@/assets/components/Button";
import { useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Index() {
  const [fromCrypto, setFromCrypto] = useState("ETH");
  const [toCrypto, setToCrypto] = useState("USD");

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => alert("Back pressed")}>
          <Icon name="chevron-back" size={28} color="white" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Exchange</Text>

        <TouchableOpacity onPress={() => alert("Notifications")}>
          <Icon name="notifications-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Currency Card 1 - From */}
        <View style={styles.currencyCard}>
          <View style={styles.currencyHeader}>
            <View style={styles.currencyInfo}>
              <MaterialIcon name="ethereum" size={28} color="white" />
              <Text style={styles.currencySymbol}>ETH</Text>
              <MaterialIcon name="chevron-down" size={20} color="#9ca3af" />
            </View>
            <View style={styles.currencyAction} />
          </View>

          <Text style={styles.currencyAmount}>12,695</Text>

          <View style={styles.currencyBalance}>
            <Text style={styles.balanceLabel}>Balance</Text>
            <Text style={styles.balanceValue}>293.0187</Text>
          </View>
        </View>

        {/* Exchange Toggle Button */}
        <View style={styles.exchangeButtonContainer}>
          <TouchableOpacity
            style={styles.exchangeButton}
            onPress={() => {
              const temp = fromCrypto;
              setFromCrypto(toCrypto);
              setToCrypto(temp);
            }}
          >
            <MaterialIcon name="swap-vertical" size={24} color="white" />
          </TouchableOpacity>
        </View>

        {/* Currency Card 2 - To */}
        <View style={styles.currencyCard}>
          <View style={styles.currencyHeader}>
            <View style={styles.currencyInfo}>
              <Text style={styles.currencySymbolUSD}>$</Text>
              <Text style={styles.currencySymbol}>USD</Text>
              <MaterialIcon name="chevron-down" size={20} color="#9ca3af" />
            </View>
            <View style={styles.currencyAction} />
          </View>

          <Text style={styles.currencyAmount}>43,937.4</Text>

          <View style={styles.currencyBalance}>
            <Text style={styles.balanceLabel}>Balance</Text>
            <Text style={styles.balanceValue}>12,987.21</Text>
          </View>
        </View>

        {/* Exchange Rate */}
        <View style={styles.rateContainer}>
          <Text style={styles.rateText}>1 ETH = 3,461.02 USD</Text>
        </View>

        {/* Buy Button */}
        <View style={styles.buyButtonContainer}>
          <Button
            title="Buy ETH"
            onPress={() => alert("Buy ETH")}
            backgroundColor="white"
            textColor="black"
            style={{ width: "100%" }}
          />
        </View>

        {/* Fee Details */}
        <View style={styles.detailsContainer}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Estimate fee</Text>
            <Text style={styles.detailValue}>4.28 usd</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>You will receive</Text>
            <Text style={styles.detailValue}>43,941.68 USD</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Spread</Text>
            <Text style={styles.detailValue}>0.2%</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Gas fee</Text>
            <Text style={styles.detailValue}>0.0045 ETH</Text>
          </View>
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a2e",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#2a2a3e",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "white",
  },
  scrollContent: {
    paddingBottom: 20,
  },
  currencyCard: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 8,
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
  exchangeButtonContainer: {
    alignItems: "center",
    marginVertical: 8,
  },
  exchangeButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#3a3a4e",
    alignItems: "center",
    justifyContent: "center",
  },
  rateContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  rateText: {
    fontSize: 13,
    color: "#9ca3af",
  },
  buyButtonContainer: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  detailsContainer: {
    marginHorizontal: 20,
    backgroundColor: "#2a2a3e",
    borderRadius: 12,
    padding: 16,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  detailLabel: {
    fontSize: 13,
    color: "#9ca3af",
  },
  detailValue: {
    fontSize: 13,
    color: "white",
    fontWeight: "600",
  },
});
