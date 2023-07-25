// Copyright ©,2023, Birmingham City University

//library imports
import { useState, useEffect } from 'react'
import {
  ScrollView,
  View,
  SafeAreaView,
  TouchableHighlight,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native'
import tw from 'twrnc'
import { WithLocalSvg } from 'react-native-svg'
import axios from 'axios'
import { BASE_URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'

//component imports
import DetailsCard from '../../components/cards/DetailsCard'
import TopModal from '../../components/modals/TopModal'

export default function ProjectScreen({ navigation }) {
  const PlusIcon = require('../../../assets/icons/PlusIcon.svg')

  const [isModalOpen, setisModalOpen] = useState(false)
  const [projectName, setprojectName] = useState(null)
  const [projects, setprojects] = useState([])

  const getUserData = async () => {
    try {
      const user = await AsyncStorage.getItem('@user')
      return user != null ? JSON.parse(user) : null
    } catch (e) {}
  }

  async function get_all_projects() {
    const user = await getUserData()
    const config = {
      headers: {
        'x-access-token': user['token'],
      },
    }
    axios
      .get(`${BASE_URL}projects/user/${user['_id']}`, config)
      .then((res) => {
        setprojects(res.data)
      })
      .catch((err) => {
        console.log(err)
        console.log('err while geting all projects')
      })
  }

  async function create_new_project() {
    const user = await getUserData()
    const config = {
      headers: {
        'x-access-token': user['token'],
      },
    }

    await axios
      .post(
        `${BASE_URL}projects`,
        {
          name: projectName,
          user: user['_id'],
        },
        config
      )
      .then((res) => {
        console.log(res)
        setisModalOpen(false)
        setprojectName(null)
        get_all_projects()
      })
      .catch((err) => {
        console.log('err')
      })
  }

  async function delete_project(item) {
    const user = await getUserData()
    const config = {
      headers: {
        'x-access-token': user['token'],
      },
    }
    await axios
      .delete(`${BASE_URL}projects/${item['_id']}`, config)
      .then((res) => {
        get_all_projects()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    get_all_projects()
  }, [])

  return (
    <View style={tw`flex relative`}>
      {projects.length > 0 ? (
        <ScrollView style={tw`flex h-full bg-white`}>
          {projects.map((item) => {
            return (
              <TouchableOpacity
                key={item._id}
                onPress={() => navigation.navigate('PROJECT_DETAILS_SCREEN')}
              >
                <DetailsCard
                  data={item}
                  isDelete={true}
                  delete_func={() => delete_project(item)}
                />
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      ) : (
        <View style={tw`flex h-full bg-white`}>
          <View
            style={tw`text-gray-400 p-10 rounded-md m-auto text-xl font-bold text-center border border-dashed border-gray-400`}
          >
            <Text style={tw`text-gray-400 font-medium text-center`}>
              No available project
            </Text>
            <Text
              style={tw`text-gray-400 mt-1 text-2xl font-bold text-center`}
              onPress={() => {
                setisModalOpen(!isModalOpen)
              }}
            >
              Add New Project
            </Text>
          </View>
        </View>
      )}

      <TouchableHighlight
        onPress={() => {
          setisModalOpen(!isModalOpen)
        }}
        underlayColor="gray"
      >
        <SafeAreaView
          style={tw`absolute bottom-10 right-5 flex flex-row bg-green-700 justify-between rounded-full h-14 w-14 shadow`}
        >
          <WithLocalSvg
            onPress={() => {
              setisModalOpen(!isModalOpen)
            }}
            asset={PlusIcon}
            style={tw`m-auto text-white h-10 w-10`}
          />
        </SafeAreaView>
      </TouchableHighlight>

      <TopModal isModalOpen={isModalOpen} setisModalOpen={setisModalOpen}>
        <TextInput
          style={tw`h-12 w-auto my-2 p-3 rounded-full border border-gray-100 bg-gray-50`}
          placeholder="Project name"
          placeholderTextColor="#acacac"
          onChangeText={setprojectName}
        />

        <TouchableOpacity
          style={tw`mt-2 mx-auto py-3 px-17 rounded-full bg-black`}
          onPress={() => create_new_project()}
        >
          <Text style={tw`text-white text-center font-bold`}>Create</Text>
        </TouchableOpacity>
      </TopModal>
    </View>
  )
}
