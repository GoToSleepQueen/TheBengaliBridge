import { StyleSheet, Text, TouchableOpacity, SafeAreaView, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import IconButton from '../components/IconButton'
import { Feather } from '@expo/vector-icons'

const WhyLearning = () => {
  const navigation = useNavigation()
  const gotoWhatLevel = () => {
    navigation.navigate("What Level")
  }
  const gotoStarterPage = () => {
    navigation.navigate("Start")
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Why are you learning Bengali?</Text>
      <View style={styles.buttonsContainer}>
        <IconButton buttonText="Culture" icon={<Feather name="book-open" size={25} color={"white"}></Feather>} shadowColor="#ff3434" buttonColor="#b22222" onPress={gotoWhatLevel} />
        <IconButton buttonText="Travel" icon={<Feather name="briefcase" size={25} color={"white"}></Feather>} shadowColor="#ff3434" buttonColor="#b22222" onPress={gotoWhatLevel} />
        <IconButton buttonText="Family" icon={<Feather name="heart" size={25} color={"white"}></Feather>} shadowColor="#ff3434" buttonColor="#b22222" onPress={gotoWhatLevel} />
      </View>
      <IconButton style={styles.backButton} buttonText="Back" icon={<Feather name="arrow-left" size={25} color={"white"}></Feather>} shadowColor="#ff3434" buttonColor="#b22222" onPress={gotoStarterPage} />
    </SafeAreaView>
  )
}

export default WhyLearning

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
    bottom: 20,
    left: 20,
    width: '30%',
  },
})