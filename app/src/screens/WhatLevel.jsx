import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Feather, FontAwesome6 } from '@expo/vector-icons'
import IconButton from '../components/IconButton'

const WhatLevel = () => {
  const navigation = useNavigation()
  const gotoAccountCreation = () => {
    navigation.navigate("Account Creation")
  }
  const gotoWhyLearning = () => {
    navigation.navigate("Why Learning")
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>What is your level of fluency?</Text>
      <View style={styles.buttonsContainer}>
        <IconButton buttonText="Beginner" 
        icon={<FontAwesome6 name="solid-circle" size={15} color={"white"}></FontAwesome6>} 
        shadowColor="#ff3434" 
        buttonColor="#b22222" 
        onPress={gotoAccountCreation} />
        <IconButton buttonText="Intermediate" 
        icon={<FontAwesome6 name="circle" size={15} color={"white"}></FontAwesome6>}
        shadowColor="#ff3434" 
        buttonColor="#b22222" 
        onPress={gotoAccountCreation} />
        <IconButton buttonText="Advanced" 
        icon={<FontAwesome6 name="circle" size={15} color={"white"}></FontAwesome6>}
        shadowColor="#ff3434" 
        buttonColor="#b22222" 
        onPress={gotoAccountCreation} />
      </View>
      <IconButton style={styles.backButton} buttonText="Back" 
      icon={<Feather name="arrow-left" size={25} color={"white"}></Feather>} 
      shadowColor="#ff3434" 
      buttonColor="#b22222" 
      onPress={gotoWhyLearning} />
    </SafeAreaView>
  )
}

export default WhatLevel

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fdf6e3',
    alignItems: 'center',
    position: 'relative',
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
    padding: 5,
    textAlign: 'center'
  },
  buttonsContainer: {
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  backButton: {
    position: 'absolute',
    bottom: 50,
    paddingBottom: 15,
    width: '80%',
  },
})