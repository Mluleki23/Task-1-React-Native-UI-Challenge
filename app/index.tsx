import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        paddingTop: 55,
        paddingHorizontal: 18,
      }}
    >
    
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 30,
        }}
      >
     
        <TouchableOpacity>
          <Icon name="chevron-back" size={28} color="white" />
        </TouchableOpacity>

       
        <Text
          style={{
            fontSize: 20,
            fontWeight: "600",
            color: "white",
          }}
        >
          Exchange
        </Text>

    
        <TouchableOpacity>
          <Icon name="notifications-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>

     
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>
          Edit app/index.tsx to edit this screen.
        </Text>
      </View>
    </View>
  );
}
