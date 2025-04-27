import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import Button from '../components/Button'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebaseConfig'
import { useNavigation } from '@react-navigation/native'
import AuthContext from '../context/AuthContext'

const ProfilePage = () => {
  const navigation = useNavigation()
  const { user, loading } = useContext(AuthContext);

  useEffect(() => {
    console.log("User: ", user)
    console.log("Loading: ", loading)
    if (!loading && !user) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Log In' }],
      });
    }
  }, [user, loading]);

  const handleSignOut = async () => {
    await signOut(auth).then(() => {
      console.log("User signed out")
    }).catch((error) => {
      console.error("Error signing out: ", error)
    })

  }
  return (
    <View>
      <Text>ProfilePage</Text>
      <Button buttonText={"Sign Out"} shadowColor="#ff3434" buttonColor="#b22222" onPress={handleSignOut}></Button>
    </View>
  )
}

export default ProfilePage

const styles = StyleSheet.create({})