import { StyleSheet, Text, TouchableOpacity, SafeAreaView, View } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import IconButton from '../components/IconButton'
import { Feather } from '@expo/vector-icons'
import { UserContext } from '../context/UserContext'

const WhyLearning = () => {
  const navigation = useNavigation()
  const gotoWhatLevel = () => {
    navigation.navigate("What Level")
  }
  const gotoStarterPage = () => {
    navigation.navigate("Start")
  }
  const { setLearningReason } = useContext(UserContext);

  const handleReasonSelect = (reason) => {
    setLearningReason(reason); // Set the selected reason in context
    navigation.navigate("What Level");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Why are you learning Bengali?</Text>
      <View style={styles.buttonsContainer}>
        <IconButton buttonText="Culture"
          icon={<Feather name="book-open" size={25} color={"white"}></Feather>}
          shadowColor="#ff3434"
          buttonColor="#b22222"
          onPress={() => handleReasonSelect("Culture")} />
        <IconButton buttonText="Travel"
          icon={<Feather name="briefcase" size={25} color={"white"}></Feather>}
          shadowColor="#ff3434"
          buttonColor="#b22222" onPress={() => handleReasonSelect("Travel")} />
        <IconButton buttonText="Family"
          icon={<Feather name="heart" size={25} color={"white"}></Feather>}
          shadowColor="#ff3434"
          buttonColor="#b22222"
          onPress={() => handleReasonSelect("Family")} />
      </View>
      <IconButton style={styles.backButton} buttonText="Back"
        icon={<Feather name="arrow-left" size={25} color={"white"}></Feather>}
        shadowColor="#ff3434"
        buttonColor="#b22222"
        onPress={gotoStarterPage} />
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
    bottom: 50,
    paddingBottom: 15,
    width: '80%',
  },
})