import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

const ButtonComponent = ({title, onPress, style}: any) => {
  return (
    <TouchableOpacity style={[styles.button_container, style]} activeOpacity={0.8} onPress={onPress}>
      <Text style={styles.button_text}>{title}</Text>
    </TouchableOpacity>
  );
}

export default ButtonComponent

const styles = StyleSheet.create({
  button_container: {
    backgroundColor: "#0ccc83",
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(20),
    alignItems: "center",
    borderRadius: moderateScale(4),
    width:'100%'
  },
  button_text: {
    color: "#fff",
    fontSize: moderateScale(15),
  },
});