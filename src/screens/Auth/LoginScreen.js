// Copyright ©,2023, Birmingham City University

//library imports
import { useState, useContext } from 'react'
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import tw from 'twrnc'
import { WithLocalSvg } from 'react-native-svg'
import axios from 'axios'
import { BASE_URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { AuthContext } from '../../contexts/AuthContext'

//component imports
import SuccessModal from '../../components/modals/SuccessModal'
import ErrorModal from '../../components/modals/ErrorModal'

export default function LoginScreen({ navigation }) {
  const context = useContext(AuthContext)
  const Logo = require('../../../assets/iRet-logo.svg')

  const [success, setsuccess] = useState({
    bool: false,
    msg: null,
  })

  const [error, seterror] = useState({
    bool: false,
    msg: null,
  })

  const [auth, setAuth] = useState({
    email: '',
    password: '',
  })

  async function login() {
    axios
      .post(`${BASE_URL}users/login`, auth)
      .then(async (res) => {
        const user = JSON.stringify(res.data)
        await AsyncStorage.setItem('@user', user)

        setTimeout(() => {
          seterror({
            bool: false,
            msg: null,
          })
          setsuccess({
            bool: true,
            msg: 'User Logged in Successfully!',
          })
          setTimeout(() => {
            context.login(user)
            setsuccess({
              bool: false,
              msg: null,
            })
          }, 1500)
        }, 200)
      })
      .catch((err) => {
        console.log(err)
        setsuccess({
          bool: false,
          msg: null,
        })
        seterror({
          bool: true,
          msg: 'Error while Logging in! Please try again.',
        })
        setTimeout(() => {
          seterror({
            bool: false,
            msg: null,
          })
        }, 2000)
      })
  }

  return (
    <SafeAreaView style={tw`flex h-full bg-white justify-center`}>
      <View style={tw`my-auto mx-7`}>
        <WithLocalSvg asset={Logo} style={tw`mx-auto mb-3 h-14 w-32`} />

        <TextInput
          style={tw`h-12 w-auto my-2 p-3 rounded-full border border-gray-100 bg-gray-50`}
          placeholder="Email"
          placeholderTextColor="#acacac"
          onChangeText={(e) => setAuth({ ...auth, email: e })}
        />

        <TextInput
          style={tw`h-12 w-auto my-2 p-3 rounded-full border border-gray-100 bg-gray-50`}
          placeholder="Password"
          placeholderTextColor="#acacac"
          onChangeText={(e) => setAuth({ ...auth, password: e })}
          secureTextEntry={true}
        />

        <TouchableOpacity
          style={tw`mt-7 mb-4 w-auto  py-3 rounded-full bg-black`}
          onPress={() => login()}
        >
          <Text style={tw`text-white text-center font-bold`}>Login</Text>
        </TouchableOpacity>

        <View style={tw`flex flex-row mx-auto`}>
          <Text style={tw`text-gray-500`}>Don't have an account?</Text>

          <TouchableOpacity onPress={() => navigation.navigate('SIGN_UP')}>
            <Text style={tw`text-black mx-1 font-bold`}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>

      <SuccessModal success={success} />
      <ErrorModal error={error} />
    </SafeAreaView>
  )
}
