import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import ButtonComponent from "@/src/components/atoms/ButtonComponent";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import CountryPicker from "react-native-country-picker-modal";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [countryCode, setCountryCode] = useState("880");
  const [countryName, setCountryName] = useState("Bangladesh");

  const onNextClick = () => {
    router.push("/(auth)/verify_otp");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.heading_container}>
          <Text style={styles.heading}>Enter your phone number</Text>
          <Text style={styles.description}>
            WhatsApp will need to verify your phone number.{" "}
            <Text style={styles.link_description}>What's my number</Text>
          </Text>
        </View>
        <View style={styles.input_main_container}>
          <TouchableOpacity
            style={styles.dropdwn_container}
            activeOpacity={0.8}
            onPress={() => {
              setVisible(true);
            }}
          >
            <View />
            <View style={styles.country_title}>
              <Text>{countryName}</Text>
            </View>
            <AntDesign name="caretdown" size={14} color="black" />
          </TouchableOpacity>
          <View style={styles.horizontal_line}></View>
          <View style={styles.input_container}>
            <View style={styles.country_code}>
              <Text style={{ fontSize: moderateScale(14), color: "#000" }}>
                {`+ ${countryCode}`}
              </Text>
            </View>
            <View style={{ gap: verticalScale(10), flex: 1 }}>
              <TextInput
                placeholder="Enter phone number"
                style={{ fontSize: moderateScale(14), color: "#000" }}
              />
            </View>
          </View>
          <View style={styles.horizontal_line}></View>
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonComponent title="Next" onPress={onNextClick} />
      </View>
      {visible && (
        <CountryPicker visible={true} onClose={() => setVisible(false)} onSelect={(e:any)=>{
          setCountryCode(e.callingCode)
          setCountryName(e.name)
        }}
        withFilter
        />
      )}
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(60),
    backgroundColor: "#fff",
    paddingHorizontal: scale(20),
  },
  header: {
    gap: verticalScale(30),
  },
  footer: {},
  heading_container: {
    gap: verticalScale(20),
  },
  heading: {
    fontSize: moderateScale(20),
    textAlign: "center",
    color: "#000",
    fontWeight: "bold",
  },
  description: {
    fontSize: moderateScale(13),
    textAlign: "center",
    fontWeight: "400",
    color: "#000",
  },
  link_description: {
    color: "#0048cc",
  },
  horizontal_line: {
    width: "100%",
    height: verticalScale(1),
    backgroundColor: "#0ccc83",
  },
  input_main_container: {
    paddingHorizontal: scale(20),
  },
  dropdwn_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20),
  },
  country_title: {},
  input_container: {
    flexDirection: "row",
    paddingVertical: verticalScale(12),
    gap: scale(10),
    alignItems: "center",
  },
  country_code: {
    gap: verticalScale(10),
  },
});
