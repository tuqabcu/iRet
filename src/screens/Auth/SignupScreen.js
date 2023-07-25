// Copyright ©,2023, Birmingham City University

//library imports
import { useState } from 'react'
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

//component imports
import SuccessModal from '../../components/modals/SuccessModal'
import ErrorModal from '../../components/modals/ErrorModal'

export default function SignupScreen({ navigation }) {
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
    name: '',
    email: '',
    password: '',
  })

  async function sign_up() {
    await axios
      .post(`${BASE_URL}users`, auth)
      .then((res) => {
        seterror({
          bool: false,
          msg: null,
        })

        setsuccess({
          bool: true,
          msg: 'Successful User Registration! Please Log In.',
        })

        setTimeout(() => {
          setsuccess({
            bool: false,
            msg: null,
          })

          navigation.navigate('LOGIN')
        }, 1500)
      })
      .catch((err) => {
        console.log(err)
        setsuccess({
          bool: false,
          msg: null,
        })

        seterror({
          bool: true,
          msg: 'User Registration Error! Please try again.',
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
          placeholder="Name"
          placeholderTextColor="#acacac"
          onChangeText={(e) => setAuth({ ...auth, name: e })}
        />

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
          onPress={() => sign_up()}
        >
          <Text style={tw`text-white text-center font-bold`}>Sign up</Text>
        </TouchableOpacity>

        <View style={tw`flex flex-row mx-auto`}>
          <Text style={tw`text-gray-500`}>Already have an account?</Text>

          <TouchableOpacity onPress={() => navigation.navigate('LOGIN')}>
            <Text style={tw`text-black mx-1 font-bold`}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>

      <SuccessModal success={success} />
      <ErrorModal error={error} />
    </SafeAreaView>
  )
}
