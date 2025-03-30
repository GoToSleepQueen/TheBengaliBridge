import { StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const WhyLearning = () => {
  const navigation = useNavigation()
  const gotoWhatLevel = () => {
    navigation.navigate("What Level")
  }
  const gotoStarterPage = () => {
    navigation.navigate("Start")
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>WhyLearning</Text>
      <TouchableOpacity
      style={styles.button}
      onPress={gotoWhatLevel}>
        <Text>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.button}
      onPress={gotoStarterPage}>
        <Text>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default WhyLearning

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf6e3',
  }
})