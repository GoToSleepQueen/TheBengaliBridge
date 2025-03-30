import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import StarterPage from '../screens/StarterPage'
import WhyLearning from '../screens/WhyLearning'
import WhatLevel from "../screens/WhatLevel"
import AccountCreation from "../screens/AccountCreation"
import LogIn from "../screens/LogIn"
import Tabs from "./Tabs"

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: "fdf6e3"
        }
      }}>
       <Stack.Screen 
      name='Start' 
      component={StarterPage}
      options={{headerShown: false}}>
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
      component={WhatLevel} 
      options={{headerTitle:"What level are you at?"}}>
      </Stack.Screen>

      <Stack.Screen
      name="Account Creation" 
      component={AccountCreation} 
      options={{headerTitle:"Let's create your account"}}>
      </Stack.Screen>

      <Stack.Screen
      name="Tabs"
      component={Tabs}>
      </Stack.Screen>
    </Stack.Navigator>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})