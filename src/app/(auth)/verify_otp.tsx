import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import AntDesign from "@expo/vector-icons/AntDesign";
import ButtonComponent from '@/src/components/atoms/ButtonComponent';
import OTPInput from "@codsod/react-native-otp-input";



const VerifyOPT = () => {
  const [otp, setOTP] = useState("");
  const otp_verify = ()=> {
    console.log(otp)
   
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="arrowleft" size={24} color="black" />
        <Text style={styles.header_text}>Enter OTP Code</Text>
      </View>
      <View style={styles.body}>
        <Text>Code has been sent to +880 17*******96</Text>
        <OTPInput length={4} onOtpComplete={(txt: string) => setOTP(txt)} inputStyle={styles.otp_input}/>
        <Text>
          Resend Code in <Text style={{ color: "#0ccc83" }}>56 </Text>s
        </Text>
      </View>
      <View style={styles.footer}>
        <ButtonComponent
          title="Verify"
          style={{ borderRadius: moderateScale(20) }}
          onPress = {otp_verify}
        />
      </View>
    </SafeAreaView>
  );
}

export default VerifyOPT

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20),
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    gap: scale(10),
    alignItems: "center",
  },
  body: {
    alignItems: "center",
    gap: verticalScale(20),
  },
  footer: {
    width: "100%",
  },
  header_text: {
    fontSize: moderateScale(20),
    fontWeight: "700",
    color: "#000",
  },
  otp_input: {
    borderColor: '#333'
  }
});