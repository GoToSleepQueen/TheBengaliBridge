import { StyleSheet, Text, SafeAreaView, TouchableOpacity, Platform, Keyboard, View, TextInput, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { getAuth, signInWithEmailAndPassword, } from "firebase/auth";
import { auth } from '../config/firebaseConfig';
import { KeyboardAvoidingView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';
import Button from '../components/Button';
import IconButton from '../components/IconButton';
import { Feather } from '@expo/vector-icons';
import AuthContext from '../context/AuthContext';

const LogIn = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signingIn, setSigningIn] = useState(false);

  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    console.log("User: ", user)
    console.log("Loading: ", loading)
    if (!loading && user) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Tabs' }],
      });
    }
  }, [user, loading]);

  const gotoStarterPage = () => {
    navigation.navigate("Start")
  }
  const handleSignIn = async () => {
    setSigningIn(true)
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user.uid)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
    setSigningIn(false)
  }
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <SafeAreaView style={styles.container}>
          <View>
            <Text style={styles.text}>Log in to your account!</Text>
            <View style={styles.inputContainer}>
              <TextInput placeholder="Email" style={styles.input} placeholderTextColor={"#6c6c6c"} value={email} onChangeText={setEmail} />
              <TextInput placeholder="Password" style={styles.input} placeholderTextColor={"#6c6c6c"} secureTextEntry value={password} onChangeText={setPassword} />
            </View>
            <Button
              buttonText={signingIn ? "Signing In..." : "Sign In!"}
              shadowColor="#ff3434"
              buttonColor="#b22222"
              buttonStyle={styles.button}
              onPress={handleSignIn}
              disabled={signingIn || !email || !password}
            />
          </View>
          <Image style={styles.image} source={require("../../../assets/images/BridgeNoBG.png")} />
          <IconButton
            style={styles.backButton}
            buttonText="Back"
            icon={<Feather name="arrow-left" size={25} color={"white"} />}
            shadowColor="#ff3434"
            buttonColor="#b22222"
            onPress={gotoStarterPage}
          />
        </SafeAreaView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

export default LogIn

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