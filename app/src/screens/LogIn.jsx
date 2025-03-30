import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const LogIn = () => {
  const navigation = useNavigation()
  const gotoTabs = () => {
    navigation.navigate("Tabs")
  }
  const gotoStarterPage = () => {
    navigation.navigate("Start")
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>LogIn</Text>
      <TouchableOpacity
        styles={styles.button}
        onPress={gotoTabs}>
          <Text>Next</Text>
      </TouchableOpacity>

      <TouchableOpacity
        styles={styles.button}
        onPress={gotoStarterPage}>
          <Text>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default LogIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf6e3",
  }
})