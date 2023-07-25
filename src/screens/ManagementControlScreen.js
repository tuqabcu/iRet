// Copyright ©,2023, Birmingham City University

//library imports
import { useEffect, useState, useContext } from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import axios from 'axios'
import { Picker } from '@react-native-picker/picker'
import { BASE_URL } from '@env'
import { getDistance } from 'geolib'
import { ZoneContext } from '../contexts/ZoneContext'

//component imports
import useCurrentLocation from '../customHooks/useCurrentLocation'
import TopModal from '../components/modals/TopModal'

export default function ManagementControlScreen({ navigation }) {
  const context = useContext(ZoneContext)
  const [response] = useCurrentLocation()
  const [isModalOpen, setisModalOpen] = useState(false)
  const [selectedCityName, setselectedCityName] = useState()
  const [cities, setcities] = useState([])

  function get_all_cities() {
    axios
      .get(`${BASE_URL}cities`)
      .then((res) => {
        setcities(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function get_nearest_city() {
    const userPosition = {
      latitude: Number(response.latitude),
      longitude: Number(response.longitude),
    }

    let closest = cities[1]

    let closest_distance = getDistance(
      { latitude: closest?.lat, longitude: closest?.lon },
      userPosition
    )
    cities.map((city) => {
      let cityPosition = {
        latitude: city.lat,
        longitude: city.lon,
      }
      if (getDistance(cityPosition, userPosition) < closest_distance) {
        closest_distance = getDistance(cityPosition, userPosition)
        closest = city
      }
    })

    context.setselectedCity({
      name: closest.name,
      weatherFile: {
        '0000': closest.files, //current
        2030: closest.files2030,
        2050: closest.files2050,
        2080: closest.files2080,
      },
      longitude: response.longitude.toFixed(2),
      latitude: response.latitude.toFixed(2),
    })

    setselectedCityName(closest.name)
  }

  useEffect(() => {
    get_all_cities()
  }, [])

  useEffect(() => {
    if (
      cities.length > 0 &&
      response &&
      response.longitude &&
      response.latitude
    ) {
      get_nearest_city()
    }
  }, [response, cities])

  return (
    <View style={tw`flex-1 bg-white py-2`}>
      {response ? (
        <>
          <TouchableOpacity
            onPress={() => setisModalOpen(!isModalOpen)}
            style={tw`bg-gray-50 mx-4 my-2 rounded-lg shadow py-6 px-4`}
          >
            <Text style={tw`mb-2`}>
              <Text style={tw`font-bold`}>Current Location</Text>(lat, long)
            </Text>
            <Text style={tw`mx-1`}>
              {context.selectedCity.latitude}, {context.selectedCity.longitude}
            </Text>
          </TouchableOpacity>

          <View style={tw`bg-gray-50 mx-4 my-2 rounded-lg shadow py-6 px-4`}>
            <Text style={tw`font-bold mb-2`}>Weather</Text>
            <Text>{context.selectedCity.name}</Text>
          </View>
        </>
      ) : (
        <ActivityIndicator style={tw`my-auto`} size="large" color={'gray'} />
      )}

      <TopModal isModalOpen={isModalOpen} setisModalOpen={setisModalOpen}>
        <View style={tw`mb-3`}>
          <Picker
            selectedValue={selectedCityName}
            onValueChange={(itemValue, itemIndex) => {
              context.setselectedCity({
                name: cities[itemIndex].name,
                latitude: cities[itemIndex].lat,
                longitude: cities[itemIndex].lon,
                weatherFile: {
                  '0000': cities[itemIndex].files, //current
                  2030: cities[itemIndex].files2030,
                  2050: cities[itemIndex].files2050,
                  2080: cities[itemIndex].files2080,
                },
              })
              setselectedCityName(itemValue)
            }}
          >
            {cities?.map((city) => {
              return (
                <Picker.Item
                  key={city.id}
                  label={city.name}
                  value={city.name}
                />
              )
            })}
          </Picker>
        </View>
      </TopModal>
    </View>
  )
}
