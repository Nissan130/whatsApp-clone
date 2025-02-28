import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Chats = () => {
  return (
    <View style={styles.chat_container}>
      <Text>Chats</Text>
    </View>
  )
}

export default Chats
const styles = StyleSheet.create({
  chat_container: {
    flex:1
  }
});