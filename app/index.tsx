import "../gesture-handler"
import React from "react"
import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import AppNavigator from './src/components/AppNavigator'
import { UserProvider } from './src/context/UserContext';
import { AuthProvider } from "./src/context/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <AppNavigator></AppNavigator>
      </UserProvider>
    </AuthProvider>
  )
}
const styles = StyleSheet.create({
})
export default App