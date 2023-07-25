// Copyright ©,2023, Birmingham City University

//library imports
import { useState, useEffect } from 'react'

import {
  ScrollView,
  View,
  SafeAreaView,
  TouchableHighlight,
  TouchableOpacity,
  Text,
} from 'react-native'
import tw from 'twrnc'
import { WithLocalSvg } from 'react-native-svg'

//component imports
import DetailsCard from '../../components/cards/DetailsCard'
import { BASE_URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

export default function ConstructionScreen({ navigation }) {
  const PlusIcon = require('../../../assets/icons/PlusIcon.svg')

  const materials = [
    {
      name: 'wall',
      isSelected: true,
    },
    {
      name: 'window',
      isSelected: false,
    },
    {
      name: 'roof',
      isSelected: false,
    },
    {
      name: 'floor',
      isSelected: false,
    },
  ]
  const [constructions, setConstructions] = useState([])

  const getUserData = async () => {
    try {
      const user = await AsyncStorage.getItem('@user')
      return user != null ? JSON.parse(user) : null
    } catch (e) {
      // error reading value
    }
  }

  async function get_all_constructions() {
    const user = await getUserData()
    const config = {
      headers: {
        'x-access-token': user['token'],
      },
    }
    await axios
      .get(`${BASE_URL}constructions/user/${user['_id']}`, config)
      .then((res) => {
        setConstructions(res.data)
      })
      .catch((err) => {
        console.log(err)
        console.log('err while creating construction')
      })
  }

  useEffect(() => {
    get_all_constructions()
  }, [])

  // event listener to reload the page after adding a new construction
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      get_all_constructions()
    })
    return unsubscribe
  }, [navigation])

  return (
    <View style={tw`flex relative`}>
      {constructions.length > 0 ? (
        <>
          {/* <View style={tw`flex flex-row bg-white px-4`}>
            {materials.map((item, idx) => {
              return (
                <TouchableOpacity
                  key={idx}
                  style={tw`my-3 h-8 w-20 mx-auto rounded-full shadow border ${
                    item.isSelected ? 'bg-black' : ''
                  }`}
                >
                  <Text
                    style={tw`${
                      item.isSelected ? 'text-white' : ''
                    } text-center my-auto`}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )
            })}
          </View> */}

          <ScrollView style={tw`flex h-[100%] bg-white`}>
            {constructions.map((item, idx) => {
              return <DetailsCard data={item} key={idx} />
            })}
          </ScrollView>
        </>
      ) : (
        <View style={tw`flex h-full bg-white`}>
          <View
            style={tw`text-gray-400 p-10 rounded-md m-auto text-xl font-bold text-center border border-dashed border-gray-400`}
          >
            <Text style={tw`text-gray-400 font-medium text-center`}>
              No available constructions
            </Text>
            <Text
              style={tw`text-gray-400 mt-1 text-2xl font-bold text-center`}
              onPress={() => {
                navigation.navigate('NEW_CONSTRUCTION_SCREEN')
              }}
            >
              Add New Construction
            </Text>
          </View>
        </View>
      )}

      <TouchableHighlight
        onPress={() => navigation.navigate('NEW_CONSTRUCTION_SCREEN')}
        underlayColor="gray"
      >
        <SafeAreaView
          style={tw`absolute bottom-10 right-5 flex flex-row bg-green-700 justify-between rounded-full h-14 w-14 shadow`}
        >
          <WithLocalSvg
            onPress={() => navigation.navigate('NEW_CONSTRUCTION_SCREEN')}
            asset={PlusIcon}
            style={tw`m-auto text-white h-10 w-10`}
          />
        </SafeAreaView>
      </TouchableHighlight>
    </View>
  )
}
