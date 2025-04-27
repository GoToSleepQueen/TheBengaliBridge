import "../gesture-handler"
import React, { useContext } from "react"
import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import AppNavigator from './src/components/AppNavigator'
import { UserProvider } from './src/context/UserContext';
import AuthContext, { AuthProvider } from "./src/context/AuthContext";
import LoadingScreen from "./src/screens/LoadingScreen";
console.log("RENDER: NavigationContainer hit")
import { NavigationContainer } from "@react-navigation/native";

const App = () => {

  return (
    <AuthProvider>
      <UserProvider>
        <AppInner />
      </UserProvider>
    </AuthProvider>
  );
};
const AppInner = () => {
  const { loading } = useContext(AuthContext);

  if (loading) return <LoadingScreen/>;

  return <AppNavigator/>;
};

const styles = StyleSheet.create({
})
export default App