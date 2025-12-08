import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface FeeDetail {
  label: string;
  value: string;
}

interface FeeDetailsProps {
  details: FeeDetail[];
}

const FeeDetails: React.FC<FeeDetailsProps> = ({ details }) => {
  return (
    <View style={styles.detailsContainer}>
      {details.map((detail, index) => (
        <View key={index} style={styles.detailRow}>
          <Text style={styles.detailLabel}>{detail.label}</Text>
          <Text style={styles.detailValue}>{detail.value}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
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

export default FeeDetails;
