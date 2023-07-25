// Copyright ©,2023, Birmingham City University

import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-async-storage/async-storage'

const Stack = createStackNavigator()

export const AuthContext = React.createContext()

//pages imports
import LoginScreen from '../screens/Auth/LoginScreen'
import SignupScreen from '../screens/Auth/SignupScreen'

const Auth = ({ children }) => {
  const [user, setUser] = useState(null)

  const navigationOptions = {
    title: '',
    headerTintColor: 'black',
    headerBackTitleVisible: false,
  }

  const login = (userData) => {
    setUser(userData)
  }

  const log_out = () => {
    setUser(null)
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@user')
      setUser(jsonValue != null ? JSON.parse(jsonValue) : null)
    } catch (e) {
      // error reading value
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        log_out,
      }}
    >
      <NavigationContainer>
        {user ? (
          children
        ) : (
          <Stack.Navigator>
            <Stack.Screen
              name="LOGIN"
              component={LoginScreen}
              options={{ ...navigationOptions, headerShown: false }}
            />

            <Stack.Screen
              name="SIGN_UP"
              component={SignupScreen}
              options={{ ...navigationOptions, headerShown: false }}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  )
}

export default Auth
