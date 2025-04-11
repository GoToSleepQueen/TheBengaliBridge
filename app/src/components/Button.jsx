import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const Button = ({ shadowColor, buttonColor, onPress, buttonText, buttonStyle }) => {
  return (
    <View style={[styles.buttonWrapper, buttonStyle]}>
      {/* Shadow effect */}
      <View style={[styles.shadow, { backgroundColor: shadowColor }]}></View>
      <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: buttonColor }]}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
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
})