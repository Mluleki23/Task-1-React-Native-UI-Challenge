import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

interface HeaderProps {
  title: string;
  onBackPress?: () => void;
  onNotificationsPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  title,
  onBackPress = () => alert("Back pressed"),
  onNotificationsPress = () => alert("Notifications"),
}) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onBackPress}>
        <Icon name="chevron-back" size={28} color="white" />
      </TouchableOpacity>

      <Text style={styles.headerTitle}>{title}</Text>

      <TouchableOpacity onPress={onNotificationsPress}>
        <Icon name="notifications-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default Header;
