import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import imagePath from '@/src/constants/imagePath';
import ButtonComponent from '@/src/components/atoms/ButtonComponent';
import { router } from 'expo-router';

const AgreeTerms = () => {
  const onAgree = () => {
    router.push("/(auth)/login");
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.whatsapp_text}>Welcome to WhatsApp</Text>
        <Image
          source={imagePath.welcome_img}
          style={styles.welcome_img}
          resizeMode="cover"
        />
        <Text style={styles.agree_text}>
          Read our <Text style={styles.link_text}>Privacy Policy.</Text> Tap
          "Agree and Continue" to accept the{" "}
          <Text style={styles.link_text}>"Terms of Service".</Text>
        </Text>
        <ButtonComponent title="AGREE AND CONTINUE" onPress={onAgree} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.from_text}>from</Text>
        <Text style={styles.facebook_text}>Facebook</Text>
      </View>
    </SafeAreaView>
  );
}

export default AgreeTerms

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems:'center',
    paddingVertical: verticalScale(54),
    paddingHorizontal: scale(30),
    backgroundColor: "white",
  },
  header: {
    flex: 1,
    gap: verticalScale(30),
    width:'100%',
    alignItems:'center'
  },

  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  from_text: {
    color: "#867373",
    fontSize: moderateScale(15),
    alignItems: "center",
  },
  facebook_text: {
    color: "#000",
    fontSize: moderateScale(20),
    alignItems: "center",
    textAlign: "center",
    // textTransform:'uppercase',
    // letterSpacing: scale(0)
  },
  whatsapp_text: {
    textAlign:'center',
    fontSize: moderateScale(30),
    color: "#000",
    fontWeight: "bold",
  },
  welcome_img: {
    width: moderateScale(250),
    height: moderateScale(250),
    borderRadius: moderateScale(250),
    textAlign:'center'
  },
  agree_text: {
    fontSize: moderateScale(14),
    color: "#000",
    lineHeight: verticalScale(20),
  },
  link_text: {
    color: "#0048cc",
  }
});