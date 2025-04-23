import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
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
  const { loading, user } = useContext(AuthContext); // Get loading and user from AuthContext

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name='Start'
        component={StarterPage}
        options={{ headerShown: false }}>
      </Stack.Screen>

      <Stack.Screen
        name='Log In'
        component={LogIn}
      >
      </Stack.Screen>

      <Stack.Screen
        name="Why Learning"
        component={WhyLearning}>
      </Stack.Screen>

      <Stack.Screen
        name="What Level"
        component={WhatLevel}>
      </Stack.Screen>

      <Stack.Screen
        name="Account Creation"
        component={AccountCreation}>
      </Stack.Screen>

      {loading ? <Stack.Screen
        name="Loading"
        component={LoadingScreen}>
      </Stack.Screen> : user ? (
        <Stack.Screen
          name="Tabs"
          component={Tabs}>
        </Stack.Screen>
      ) : (
        <Stack.Screen
          name="Log In"
          component={LogIn}>
        </Stack.Screen>
      )}
    </Stack.Navigator>
  )
}

export default AppNavigator