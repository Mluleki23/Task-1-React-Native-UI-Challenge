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
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import CurrencyCard from "../assets/components/CurrencyCard";
import FeeDetails from "../assets/components/FeeDetails";
import Header from "../assets/components/Header";

export default function Index() {
  const [fromCrypto, setFromCrypto] = useState("ETH");
  const [toCrypto, setToCrypto] = useState("USD");

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />

      {/* Header */}
      <Header title="Exchange" />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Currency Card 1 - From */}
        <CurrencyCard
          icon="ethereum"
          symbol="ETH"
          amount="12,695"
          balanceLabel="Balance"
          balanceValue="293.0187"
        />

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
        <CurrencyCard
          symbol="USD"
          amount="43,937.4"
          balanceLabel="Balance"
          balanceValue="12,987.21"
          isUSD={true}
          marginTop={0}
        />

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
        <FeeDetails
          details={[
            { label: "Estimate fee", value: "4.28 usd" },
            { label: "You will receive", value: "43,941.68 USD" },
            { label: "Spread", value: "0.2%" },
            { label: "Gas fee", value: "0.0045 ETH" },
          ]}
        />

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
  scrollContent: {
    paddingBottom: 20,
  },
  exchangeButtonContainer: {
    alignItems: "center",
    marginTop: 0,
    marginBottom: 0,
  },
  exchangeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
    marginBottom: 0,
  },
});
