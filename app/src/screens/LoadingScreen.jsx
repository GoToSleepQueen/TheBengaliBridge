import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>LoadingScreen</Text>
    </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
})