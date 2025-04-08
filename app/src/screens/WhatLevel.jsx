import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Feather, FontAwesome6 } from '@expo/vector-icons'
import IconButton from '../components/IconButton'
import OneCircle from '../components/OneCircle'
import TwoCircle from '../components/TwoCircle'
import ThreeCircle from '../components/ThreeCircle'

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
          icon={<OneCircle width={15} height={15}></OneCircle>}
          shadowColor="#ff3434"
          buttonColor="#b22222"
          onPress={gotoAccountCreation} />
        <IconButton buttonText="Intermediate"
          icon={<TwoCircle width={25} height={25}></TwoCircle>}
          shadowColor="#ff3434"
          buttonColor="#b22222"
          onPress={gotoAccountCreation} />
        <IconButton buttonText="Advanced"
          icon={<ThreeCircle width={30} height={30}></ThreeCircle>}
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