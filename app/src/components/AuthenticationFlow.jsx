import React from "react"
import useIsSignedIn from "../context/UserContext"
import useIsSignedOut from "../context/UserContext"
import { createStackNavigator } from "@react-navigation/stack";
import AccountCreation from "../screens/AccountCreation"
import LogIn from "../screens/LogIn"
import Tabs from "./Tabs"

const AuthNavigator = createStackNavigator({
    groups: {
      SignedIn: {
        if: useIsSignedIn,
        screens: {
          Tabs: Tabs,
        },
      },
      SignedOut: {
        if: useIsSignedOut,
        screens: {
          SignIn: LogIn,
          SignUp: AccountCreation,
        },
      },
    },
  });

  return (
    AuthNavigator
  )

export default AuthenticationFlow