import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const Status = () => {
  return (
    <View style={styles.container}>
      <Text>Status</Text>
    </View>
  )
}

export default Status
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});