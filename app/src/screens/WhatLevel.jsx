import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const WhatLevel = () => {
  const navigation = useNavigation()
  const gotoAccountCreation = () => {
    navigation.navigate("Account Creation")
  }
  const gotoWhyLearning = () => {
    navigation.navigate("Why Learning")
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>WhatLevel</Text>
      <TouchableOpacity
      style={styles.button}
      onPress={gotoAccountCreation}>
        <Text>Next</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
      style={styles.button}
      onPress={gotoWhyLearning}>
        <Text>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default WhatLevel

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf6e3",
  }
})