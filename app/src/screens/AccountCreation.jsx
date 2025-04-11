import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View, TextInput, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Button from '../components/Button'
import IconButton from '../components/IconButton'
import { Feather } from '@expo/vector-icons'

const AccountCreation = () => {
  const navigation = useNavigation()
  const gotoTabs = () => {
    navigation.navigate("Tabs")
  }
  const gotoWhatLevel = () => {
    navigation.navigate("What Level")
  }
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <View>
            <Text style={styles.text}>Create your account!</Text>
            <View style={styles.inputContainer}>
              <TextInput placeholder="Email" style={styles.input} placeholderTextColor={"#6c6c6c"} />
              <TextInput placeholder="Password" style={styles.input} placeholderTextColor={"#6c6c6c"} secureTextEntry />
              <TextInput placeholder="First Name" style={styles.input} placeholderTextColor={"#6c6c6c"} />
              <TextInput placeholder="Last Name" style={styles.input} placeholderTextColor={"#6c6c6c"} />
            </View>
            <Button buttonText={"Sign Up!"} shadowColor="#ff3434" buttonColor="#b22222" buttonStyle={styles.button} onPress={gotoTabs} />
          </View>
          <Image style={styles.image} source={require("../../../assets/images/BridgeNoBG.png")} />
          <IconButton
            style={styles.backButton}
            buttonText="Back"
            icon={<Feather name="arrow-left" size={25} color={"white"} />}
            shadowColor="#ff3434"
            buttonColor="#b22222"
            onPress={gotoWhatLevel}
          />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default AccountCreation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf6e3",
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: "bold",
    fontSize: 24,
    padding: 5,
    textAlign: 'center',
    padding: 20,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '70%',
    alignSelf: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#6c6c6c',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    paddingVertical: 15,
  },
  button: {
    width: '50%',
    alignItems: 'center',
    alignSelf: 'center',
  },
  backButton: {
    width: '80%',
    alignSelf: 'center',
    marginBottom: 50,
  },
  image: {
    width: '100%',
    height: "25%",
    resizeMode: 'contain',
  },
})