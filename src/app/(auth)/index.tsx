import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ActivityIndicator,
} from "react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import React, { useEffect, useState } from "react";
import { Link, router } from "expo-router";

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);

  let navigate_to_welcome_screen = () => {
    router.push("/(auth)/agree_terms");
  };

  let loading_timeout = () => {
    setIsLoading(true);
    setTimeout(navigate_to_welcome_screen, 3000);
  };

  useEffect(() => {
    setTimeout(loading_timeout, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Image
          style={styles.logo_img}
          source={require("@/src/assets/images/icon.png")}
        />
        <Text style={styles.whatsapp_text}>WhatsApp</Text>
      </View>
      <View style={styles.footer}>
        {isLoading ? (
          <>
            <ActivityIndicator size={moderateScale(35)} color={"#0ccc83"} />
            <Text style={styles.loading_text}>Loading...</Text>
          </>
        ) : (
          <>
            <Text style={styles.from_text}>from</Text>
            <Text style={styles.facebook_text}>Facebook</Text>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(30),
  },
  header: {},
  body: {
    alignItems: "center",
    gap: verticalScale(10),
  },
  logo_img: {
    width: moderateScale(50),
    height: moderateScale(50),
  },
  whatsapp_text: {
    fontSize: moderateScale(25),
  },
  footer: {
    alignItems: "center",
    height: verticalScale(70),
    justifyContent: "flex-end",
  },
  facebook_text: {
    fontSize: moderateScale(15),
    color: "#020029",
  },
  from_text: {
    fontSize: moderateScale(13),
    color: "#867373",
  },
  loading_text: {
    marginTop: verticalScale(10),
    fontSize: moderateScale(15),
  },
});
