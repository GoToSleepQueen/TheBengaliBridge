import "../gesture-handler"
import React from "react"
import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import AppNavigator from './src/components/AppNavigator'
import { UserProvider } from './src/context/UserContext';

const App = () => {
  return (
    <UserProvider>
      <AppNavigator></AppNavigator>
    </UserProvider>
  )
}
const styles = StyleSheet.create({
})
export default App