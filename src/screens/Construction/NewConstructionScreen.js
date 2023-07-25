// Copyright ©,2023, Birmingham City University

//library imports
import {
  ScrollView,
  View,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native'
import tw from 'twrnc'
import { WithLocalSvg } from 'react-native-svg'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function NewConstructionScreen({ navigation }) {
  const PlusIcon = require('../../../assets/icons/PlusIcon.svg')
  const MinusIcon = require('../../../assets/icons/MinusIcon.svg')

  const [newItem, setNewItem] = useState({
    name: '',
    type: '',
    materials: [],
  })

  const getUserData = async () => {
    try {
      const user = await AsyncStorage.getItem('@user')
      return user != null ? JSON.parse(user) : null
    } catch (e) {
      // error reading value
    }
  }

  const materials = [
    {
      name: 'wall',
    },
    {
      name: 'window',
    },
    {
      name: 'roof',
    },
    {
      name: 'floor',
    },
  ]

  const [items, setitems] = useState([])

  async function onSubmitItem() {
    const user = await getUserData()
    let item = {
      ...newItem,
      user: user._id,
    }

    const config = {
      headers: {
        'x-access-token': user['token'],
      },
    }

    await axios
      .post(`${BASE_URL}constructions`, item, config)
      .then((res) => {
        navigation.navigate('CONSTRUCTION_SCREEN')
      })
      .catch((err) => {
        console.log('err')
      })
  }

  async function get_all_materials() {
    const user = await getUserData()

    const config = {
      headers: {
        'x-access-token': user['token'],
      },
    }

    await axios
      .get(`${BASE_URL}materials`, config)
      .then((res) => {
        setitems(res.data)
      })
      .catch((err) => {
        console.log('err')
      })
  }

  useEffect(() => {
    get_all_materials()
  }, [])

  // event listener to reload the page after adding a new material
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      get_all_materials()
    })
    return unsubscribe
  }, [navigation])

  return (
    <View style={tw`flex-1 bg-white px-4 py-2`}>
      <TextInput
        style={tw`h-12 w-auto my-2 p-3 rounded-full border border-gray-100 bg-gray-50`}
        placeholder="Construction Name"
        placeholderTextColor="#acacac"
        onChangeText={(e) =>
          setNewItem({
            ...newItem,
            name: e,
          })
        }
      />

      <View style={tw`flex flex-row`}>
        {materials.map((item, idx) => {
          return (
            <TouchableOpacity
              onPress={() =>
                setNewItem({
                  ...newItem,
                  type: item.name,
                })
              }
              key={idx}
              style={tw`my-3 h-8 w-20 mx-auto rounded-full shadow border ${
                item.name == newItem.type ? 'bg-black' : 'bg-white'
              }`}
            >
              <Text
                style={tw`${
                  item.name == newItem.type ? 'text-white' : ''
                } text-center my-auto`}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )
        })}
      </View>

      <ScrollView style={tw`flex`}>
        {items.map((item, idx) => {
          return (
            <TouchableOpacity
              onPress={() => {
                if (newItem.materials.includes(item._id)) {
                  var result = newItem.materials.filter(function (ele) {
                    return ele != item._id
                  })

                  setNewItem({
                    ...newItem,
                    materials: result,
                  })
                } else {
                  setNewItem({
                    ...newItem,
                    materials: [...newItem.materials, item._id],
                  })
                }
              }}
              key={idx}
            >
              <View
                style={tw`${
                  newItem.materials.includes(item._id) ? 'border' : ''
                } flex flex-row justify-between bg-gray-50 my-2 rounded-lg shadow-sm py-4 px-4`}
              >
                <View style={tw`my-auto`}>
                  <Text style={tw`font-bold`}>{item.name}</Text>
                </View>
                {newItem.materials.includes(item._id) ? (
                  <WithLocalSvg
                    asset={MinusIcon}
                    style={tw`my-auto text-black h-6 w-6`}
                  />
                ) : (
                  <WithLocalSvg
                    asset={PlusIcon}
                    style={tw`my-auto text-black h-6 w-6`}
                  />
                )}
              </View>
            </TouchableOpacity>
          )
        })}

        <TouchableOpacity
          style={tw`flex flex-row justify-center border my-2 rounded-lg shadow-sm py-3 px-4 bg-white`}
          onPress={() => navigation.navigate('MATERIAL_SCREEN')}
        >
          <Text style={tw`my-auto`}>Add New Material</Text>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity
        style={tw`my-5 py-3 rounded-full bg-black`}
        onPress={() => onSubmitItem()}
        // onPress={() => setisModalOpen(!isModalOpen)}
      >
        <Text style={tw`text-white text-center font-bold`}>Create</Text>
      </TouchableOpacity>
    </View>
  )
}
