// Copyright ©,2023, Birmingham City University

//library imports
import { useState, useEffect, useContext } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { WithLocalSvg } from 'react-native-svg'
import { Picker } from '@react-native-picker/picker'
import tw from 'twrnc'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

//config imports
import { BASE_URL } from '@env'
import { ZoneContext } from '../../contexts/ZoneContext'

//component imports
import TopModal from '../../components/modals/TopModal'

export default function EditRoomScreen({ route }) {
  const context = useContext(ZoneContext)
  const room = context.floors[context.activeFloorIndex].rooms.filter(
    (item) => item.id === route.params.room.id
  )[0]

  const ConstructionIcon = require('../../../assets/icons/ConstructionIcon.svg')
  const HomeIcon = require('../../../assets/icons/HomeIcon.svg')

  const [isModalOpen, setisModalOpen] = useState(false)
  const [constructions, setconstructions] = useState([])
  const [selectedConstruction, setselectedConstruction] = useState('')
  const [selectedConstructionMaterials, setselectedConstructionMaterials] =
    useState([])
  const [selectedField, setselectedField] = useState('')

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
        setconstructions(res.data)
      })
      .catch((err) => {
        console.log(err)
        console.log('err while creating construction')
      })
  }

  useEffect(() => {
    get_all_constructions()
  }, [])

  return (
    <ScrollView style={tw`m-3`}>
      {/* Room details card */}
      <View
        style={tw`flex flex-row bg-gray-50 mb-5 my-2 rounded-lg shadow py-4 px-2`}
      >
        <View>
          <WithLocalSvg asset={HomeIcon} style={tw`text-gray-700 h-6 w-6`} />
        </View>

        <View style={tw`mx-2`}>
          <Text style={tw`font-bold text-lg text-gray-700`}>{room.name}</Text>

          <View style={tw`flex flex-row my-1`}>
            <Text style={tw`mr-2 text-gray-600`}>
              Height:{' '}
              <Text style={tw`text-black font-bold`}>{room.heightMeter}</Text>m
            </Text>

            <Text style={tw`mr-2 text-gray-600`}>
              Width:{' '}
              <Text style={tw`text-black font-bold`}>{room.widthMeter}</Text>m
            </Text>

            <Text style={tw`mr-2 text-gray-600`}>
              Depth:{' '}
              <Text style={tw`text-black font-bold`}>{room.depthMeter}</Text>m
            </Text>
          </View>
        </View>
      </View>

      {/* construction cards */}
      <View style={tw`flex flex-row mb-5 my-2 py-4 px-2`}>
        <View>
          <WithLocalSvg
            asset={ConstructionIcon}
            style={tw`text-gray-700 h-6 w-6`}
          />
        </View>
        <View style={tw`mx-2`}>
          <Text style={tw`font-bold text-lg text-gray-700`}>Construction</Text>

          <View style={tw`flex flex-row flex-wrap my-1`}>
            <View style={tw`m-2 bg-gray-50 rounded-lg shadow py-4 px-2 w-56`}>
              <Text style={tw`font-bold text-gray-700`}>Floor</Text>
              <TouchableOpacity
                onPress={() => {
                  setisModalOpen(!isModalOpen)
                  setselectedField('floorConstruction')
                }}
              >
                <View style={tw`my-2 bg-gray-100 rounded-lg shadow p-2`}>
                  <Text>{room.floorConstruction?.name}</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={tw`m-2 bg-gray-50 rounded-lg shadow py-4 px-2 w-56`}>
              <Text style={tw`font-bold text-gray-700`}>Roof</Text>
              <TouchableOpacity
                onPress={() => {
                  setisModalOpen(!isModalOpen)
                  setselectedField('roofConstruction')
                }}
              >
                <View style={tw`my-2 bg-gray-100 rounded-lg shadow p-2`}>
                  <Text>{room.roofConstruction?.name}</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={tw`m-2 bg-gray-50 rounded-lg shadow py-4 px-2 w-56`}>
              <Text style={tw`font-bold text-gray-700`}>Walls</Text>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    setisModalOpen(!isModalOpen)
                    setselectedField('wall1Construction')
                  }}
                >
                  <View style={tw`my-2 bg-gray-100 rounded-lg shadow p-2`}>
                    <Text>Wall 1: {room.wall1Construction?.name}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    setisModalOpen(!isModalOpen)
                    setselectedField('wall2Construction')
                  }}
                >
                  <View style={tw`my-2 bg-gray-100 rounded-lg shadow p-2`}>
                    <Text>Wall 2: {room.wall2Construction?.name}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    setisModalOpen(!isModalOpen)
                    setselectedField('wall3Construction')
                  }}
                >
                  <View style={tw`my-2 bg-gray-100 rounded-lg shadow p-2`}>
                    <Text>Wall 3: {room.wall3Construction?.name}</Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    setisModalOpen(!isModalOpen)
                    setselectedField('wall4Construction')
                  }}
                >
                  <View style={tw`my-2 bg-gray-100 rounded-lg shadow p-2`}>
                    <Text>Wall 4: {room.wall4Construction?.name}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            {/* 
            {room.windows.length > 0 ? (
              <View style={tw`m-2 bg-gray-50 rounded-lg shadow py-4 px-2 w-56`}>
                <Text style={tw`font-bold text-gray-700`}>Windows</Text>
                <View>
                  {room.windows.map((window, idx) => {
                    console.log(window.windowConstruction)
                    return (
                      <TouchableOpacity
                        key={idx}
                        onPress={() => {
                          setisModalOpen(!isModalOpen)
                          // setselectedField('windowConstruction')
                        }}
                      >
                        <View
                          style={tw`my-2 bg-gray-100 rounded-lg shadow p-2`}
                        >
                          <Text>{window.windowConstruction.name}</Text>
                        </View>
                      </TouchableOpacity>
                    )
                  })}
                </View>
              </View>
            ) : null}

            {room.doors.length > 0 ? (
              <View style={tw`m-2 bg-gray-50 rounded-lg shadow py-4 px-2 w-56`}>
                <Text style={tw`font-bold text-gray-700`}>Doors</Text>
                <View>
                  {room.doors.map((door, idx) => {
                    console.log(door.doorConstruction)
                    return (
                      <TouchableOpacity
                        key={idx}
                        onPress={() => {
                          setisModalOpen(!isModalOpen)
                          // setselectedField('windowConstruction')
                        }}
                      >
                        <View
                          style={tw`my-2 bg-gray-100 rounded-lg shadow p-2`}
                        >
                          <Text>{door.doorConstruction.name}</Text>
                        </View>
                      </TouchableOpacity>
                    )
                  })}
                </View>
              </View>
            ) : null} */}
          </View>
        </View>
      </View>

      <TopModal isModalOpen={isModalOpen} setisModalOpen={setisModalOpen}>
        <View style={tw`mb-3`}>
          <Picker
            selectedValue={selectedConstruction}
            onValueChange={(itemValue, itemIndex) => {
              setselectedConstruction(itemValue)
              setselectedConstructionMaterials(
                constructions[itemIndex].materials
              )
            }}
          >
            {constructions?.map((construction) => {
              return (
                <Picker.Item
                  key={construction._id}
                  label={construction.name}
                  value={construction.name}
                />
              )
            })}
          </Picker>
        </View>

        <TouchableOpacity
          style={tw`mt-2 mx-auto py-3 px-17 rounded-full bg-black`}
          onPress={() => {
            setisModalOpen(!isModalOpen)
            context.updateRoom(
              room,
              {
                [selectedField]: {
                  name: selectedConstruction,
                  materials: selectedConstructionMaterials,
                },
              },
              0
            ) //floor id = 0
          }}
        >
          <Text style={tw`text-white text-center font-bold`}>Confirm</Text>
        </TouchableOpacity>
      </TopModal>
    </ScrollView>
  )
}
