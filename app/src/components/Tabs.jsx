import React from 'react';
import { Text } from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from "@expo/vector-icons"
import { FontAwesome6 } from '@expo/vector-icons';
import Home from '../screens/HomeScreen'
import LanguageModules from '../screens/LanguageModules';
import CulturePage from '../screens/CulturePage';
import CommunityPage from '../screens/CommunityPage';
import ProfilePage from '../screens/ProfilePage';

const Tab = createBottomTabNavigator()

const Tabs = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: '#b22222',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: {
        backgroundColor: '#fdf6e3',
      },
    }}
    >
      <Tab.Screen
        name="Home" 
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name="home" size={25} color={focused ? 'tomato' : 'black'} />
          ),
        }}
      />
      <Tab.Screen
        name="Language Modules"
        component={LanguageModules}
        options={{
          tabBarIcon: ({ focused }) => (
            <Text>আ</Text>
          )
        }}
      />
      <Tab.Screen
        name="Culture Page"
        component={CulturePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome6 name="book-atlas" size={25} color={focused ? "tomato" : "black"}/>
          )
        }}
      />
      <Tab.Screen
        name="Community Page"
        component={CommunityPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome6 name="hand-holding-heart" size={25} color={focused? "tomato" : "black"}/>
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <Feather name='user' size={25} color={focused? "tomato" : "black"}/>
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default Tabs