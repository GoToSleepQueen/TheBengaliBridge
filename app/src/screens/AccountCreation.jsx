import { StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AccountCreation = () => {
  const navigation = useNavigation()
  const gotoTabs = () => {
    navigation.navigate("Tabs")
  }
  const gotoWhatLevel = () => {
    navigation.navigate("What Level")
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>AccountCreation</Text>
      <TouchableOpacity
        styles={styles.button}
        onPress={gotoTabs}>
          <Text>Next</Text>
        </TouchableOpacity>

        <TouchableOpacity
        styles={styles.button}
        onPress={gotoWhatLevel}>
          <Text>Back</Text>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default AccountCreation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf6e3",
  }
})