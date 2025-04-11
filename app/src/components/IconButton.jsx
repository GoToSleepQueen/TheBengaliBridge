import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const IconButton = ({ buttonText, icon, shadowColor, buttonColor, onPress, style }) => {
  return (
    <View style={[styles.buttonWrapper, style]}>
      <View style={[styles.shadow, { backgroundColor: shadowColor }]}></View>
      <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: buttonColor }]}>
        <View style={styles.iconWrapper}>{icon}</View>
        <View style={styles.buttonTextWrapper}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default IconButton

const styles = StyleSheet.create({
  buttonWrapper: {
    position: 'relative',
    alignItems: 'center',
    marginVertical: 12,
    //backgroundColor: "white",
    //padding: 3,
    borderRadius: 10,
  },
  button: {
    width: '100%',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    minHeight: 60,
    maxHeight: 100,
    overflow: 'hidden',
    backgroundColor: "#b22222",
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
  buttonTextWrapper: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#6e1616",
    height: '100%',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    //borderWidth: 3
    //borderTopWidth: 3,
    borderLeftWidth: 3,
    //marginLeft: 3,
    marginRight: -3,
  },
  iconWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //borderWidth: 3,
    height: '100%',
    borderRadius: 10,
    borderRightWidth: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
})