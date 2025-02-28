import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import Chats from "@/src/components/molecules/Chats";
import Status from "@/src/components/molecules/Status";
import Calls from "@/src/components/molecules/Calls";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";

const Index = () => {
  const [currentPage, setCurrenPage] = useState("chats");
  const activePage = () => {
    switch (currentPage) {
      case "chats":
        return <Chats />;
      case "status":
        return <Status />;
      case "calls":
        return <Calls />;
      default:
        return <Chats />;
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={"#128c7e"} />
      <View style={styles.header}>
        <View>
          <Text style={styles.whatsapp_text}>WhatsApp</Text>
        </View>
        <View style={styles.iconContainer}>
          <AntDesign name="search1" size={24} color="#fff" />
          <Entypo name="dots-three-vertical" size={24} color="#fff" />
        </View>
      </View>

      <View style={styles.topBarContainer}>
        {["chats", "status", "calls"].map((item, index) => {
          return (
            <TouchableOpacity
              style={[
                styles.buttonContainer,
                item == currentPage && { borderColor: "#fff" },
              ]}
              key={index}
              onPress={() => setCurrenPage(item)}
              activeOpacity={0.8}
            >
              <Text style={styles.button_text}>{item}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {activePage()}
    </SafeAreaView>
  );
};

export default Index;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ddd",
  },
  topBarContainer: {
    backgroundColor: "#128c7e",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(10),
    gap: scale(10),
  },
  buttonContainer: {
    flex: 1,
    paddingBottom: verticalScale(10),
    borderBottomWidth: 3,
    borderColor: "#128c7e",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: verticalScale(10),
  },
  button_text: {
    textTransform: "uppercase",
    fontWeight: "700",
    color: "#fff",
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: scale(10),
    backgroundColor: "#128c7e",
    paddingVertical: verticalScale(10),
  },
  whatsapp_text: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
    color: "#fff",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(10),
  },
});
