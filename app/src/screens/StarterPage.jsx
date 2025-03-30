import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

const StarterPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hi! Welcome To The Bengali Bridge!</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonWrapper}>
          <View style={[styles.shadow, {backgroundColor: '#ff3434'}]}></View>
          <TouchableOpacity style={[styles.button, {backgroundColor: "#b22222"}]}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonWrapper}>
          <View style={[styles.shadow, {backgroundColor: "#b22222"}]}></View>
          <TouchableOpacity style={[styles.button, {backgroundColor: "#6e1616"}]}>
            <Text style={styles.buttonText}>What The Meower</Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: '#fdf6e3'
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
  }
})