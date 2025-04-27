import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import StarterPage from '../screens/StarterPage'
import WhyLearning from '../screens/WhyLearning'
import WhatLevel from "../screens/WhatLevel"
import AccountCreation from "../screens/AccountCreation"
import LogIn from "../screens/LogIn"
import Tabs from "./Tabs"
import LoadingScreen from "../screens/LoadingScreen"
import { useContext } from 'react'
import { AuthContext, AuthProvider } from '../context/AuthContext' // Import AuthContext

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Start"
    >
      <Stack.Screen name="Start" component={StarterPage} />
      <Stack.Screen name="Why Learning" component={WhyLearning} />
      <Stack.Screen name="What Level" component={WhatLevel} />
      <Stack.Screen name="Account Creation" component={AccountCreation} />
      <Stack.Screen name="Log In" component={LogIn} />
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="Loading" component={LoadingScreen} />
    </Stack.Navigator>
  );
};


export default AppNavigator