import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Button from '../components/Button'

const StarterPage = () => {
  const navigation = useNavigation()
  const handleNewUser = () => {
    navigation.navigate('Why Learning')
  }
  const handleExistingUser = () => {
    navigation.navigate('Log In')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>Hi! Welcome To The Bengali Bridge!</Text>
        <Text style={styles.paragraphText}>Our focus is to develop language skills and cultural awareness to our users.</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button shadowColor="#ff3434" buttonColor="#b22222" onPress={handleNewUser} buttonText="New User" />
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 10 }}>
          <View style={styles.line}></View>
          <Text style={styles.orText}>or</Text>
          <View style={styles.line}></View>
        </View>
        <Button shadowColor="#b22222" buttonColor="#6e1616" onPress={handleExistingUser} buttonText="Existing User" />
      </View>
    </SafeAreaView>
  )
}

export default StarterPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fdf6e3',
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
    padding: 5,
    textAlign: 'center'
  },
  buttonWrapper: {
    position: 'relative',
    alignItems: 'center',
    marginVertical: 12,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    borderRadius: 10,
    padding: 15,
    borderWidth: 3
  },
  shadow: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: '100%',
    height: '100%',
    borderRadius: 10,
    zIndex: -1,
    borderWidth: 3
  },
  buttonText: {
    fontWeight: "bold",
    color: "white"
  },
  buttonsContainer: {
    paddingBottom: 50,
    width: '90%',
  },
  line: {
    height: 1,
    flex: 1,
    alignSelf: 'center',
    backgroundColor: '#000',
  },
  orText: {
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  paragraphText: {
    fontSize: 16,
    textAlign: 'center',
    padding: 5,
    marginBottom: 20,
    color: '#333',
  },
})