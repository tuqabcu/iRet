// Copyright ©,2023, Birmingham City University

//library imports
import { useState } from 'react'
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native'
import tw from 'twrnc'
import axios from 'axios'
import { BASE_URL } from '@env'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export default function MaterialScreen({ navigation: { goBack } }) {
  const [selectedMaterial, setSelectedMaterial] = useState('AirGap')

  const materials = {
    AirGap: {
      inputs: [
        {
          inputName: 'name',
          inputValue: 'text',
          inputLabel: 'Name',
        },
        {
          inputName: 'thermalResistance',
          inputValue: 'number',
          inputLabel: 'Thermal Resistance',
        },
      ],
    },
    WindowGas: {
      inputs: [
        {
          inputName: 'name',
          inputValue: 'text',
          inputLabel: 'Name',
        },
        {
          inputName: 'gasType',
          inputValue: 'text',
          inputLabel: 'Gas Type', //(Air - Argon - Krypton - Xenon - SF6 - Custom)
        },
        {
          inputName: 'thickness',
          inputValue: 'number',
          inputLabel: 'Thickness',
        },
      ],
    },
    Glazing: {
      inputs: [
        {
          inputName: 'name',
          inputValue: 'text',
          inputLabel: 'Name',
        },
        {
          inputName: 'opticalDataType', //SpectralAverage or Spectral
          inputValue: 'text',
          inputLabel: 'Optical Data Type',
        },
        {
          inputName: 'thickness',
          inputValue: 'number',
          inputLabel: 'Thickness',
        },
        {
          inputName: 'solarTransmittance',
          inputValue: 'number',
          inputLabel: 'Solar Transmittance',
        },
        {
          inputName: 'frontSolarReflectance',
          inputValue: 'number',
          inputLabel: 'Front Solar Reflectance',
        },
        {
          inputName: 'backSolarReflectance',
          inputValue: 'number',
          inputLabel: 'Back Solar Reflectance',
        },
        {
          inputName: 'visibleTransmittance',
          inputValue: 'number',
          inputLabel: 'Visible Transmittance',
        },
        {
          inputName: 'frontVisibleReflectance',
          inputValue: 'number',
          inputLabel: 'Front Visible Reflectance',
        },
        {
          inputName: 'backVisibleReflectance',
          inputValue: 'number',
          inputLabel: 'Back Visible Reflectance',
        },
        {
          inputName: 'infraredTransmittance',
          inputValue: 'number',
          inputLabel: 'Infrared Transmittance',
        },
        {
          inputName: 'frontInfraredHemispherical',
          inputValue: 'number',
          inputLabel: 'Front Infrared Hemispherical',
        },
        {
          inputName: 'backInfraredHemispherical',
          inputValue: 'number',
          inputLabel: 'Back Infrared Hemispherical',
        },
        {
          inputName: 'conductivity',
          inputValue: 'number',
          inputLabel: 'Conductivity',
        },
      ],
    },
    Mas: {
      inputs: [
        {
          inputName: 'name',
          inputValue: 'text',
          inputLabel: 'Name',
        },
        {
          inputName: 'thickness',
          inputValue: 'number',
          inputLabel: 'Thickness',
        },
        {
          inputName: 'conductivity',
          inputValue: 'number',
          inputLabel: 'Conductivity',
        },
        {
          inputName: 'density',
          inputValue: 'number',
          inputLabel: 'Density',
        },
        {
          inputName: 'specificHeat',
          inputValue: 'number',
          inputLabel: 'Specific Heat',
        },
        {
          inputName: 'roughness', // Rough
          inputValue: 'text',
          inputLabel: 'Roughness',
        },
        {
          inputName: 'thermalAbsorptance',
          inputValue: 'number',
          inputLabel: 'Thermal Absorptance',
        },
        {
          inputName: 'solarAbsorptance',
          inputValue: 'number',
          inputLabel: 'Solar Absorptance',
        },
        {
          inputName: 'visibleAbsorptance',
          inputValue: 'number',
          inputLabel: 'Visible Absorptance',
        },
      ],
    },
    NoMas: {
      inputs: [
        {
          inputName: 'name',
          inputValue: 'text',
          inputLabel: 'Name',
        },
        {
          inputName: 'thermalResistance',
          inputValue: 'number',
          inputLabel: 'Thermal Resistance',
        },
        {
          inputName: 'roughness',
          inputValue: 'text',
          inputLabel: 'Roughness',
        },
        {
          inputName: 'thermalAbsorptance',
          inputValue: 'number',
          inputLabel: 'Thermal Absorptance',
        },
        {
          inputName: 'solarAbsorptance',
          inputValue: 'number',
          inputLabel: 'Solar Absorptance',
        },
        {
          inputName: 'visibleAbsorptance',
          inputValue: 'number',
          inputLabel: 'Visible Absorptance',
        },
      ],
    },
  }

  const [data, setdata] = useState({
    type: 'AirGap',
  })

  const getUserData = async () => {
    try {
      const user = await AsyncStorage.getItem('@user')
      return user != null ? JSON.parse(user) : null
    } catch (e) {
      // error reading value
    }
  }

  // function that takes the input value and returns field based on the input value
  function return_input(input) {
    return (
      <TextInput
        style={tw`h-12 w-auto my-2 p-3 rounded-full border border-gray-100 bg-gray-50`}
        placeholder={input.inputLabel}
        placeholderTextColor="#acacac"
        onChangeText={(e) =>
          setdata({
            ...data,
            [input.inputName]: e,
          })
        }
        value={data[input.inputName]}
      />
    )
    // switch (input.inputValue) {
    //   case 'text':
    //     return (
    //       <TextInput
    //         style={tw`h-12 w-auto my-2 p-3 rounded-full border border-gray-100 bg-gray-50`}
    //         placeholder={input.inputLabel}
    //         placeholderTextColor="#acacac"
    //         onChangeText={(e) =>
    //           setdata({
    //             ...data,
    //             [input.inputName]: e,
    //           })
    //         }
    //         value={data[input.inputName]}
    //       />
    //     )

    //   case 'number':
    //     return (
    //       <TextInput
    //         style={tw`h-12 w-auto my-2 p-3 rounded-full border border-gray-100 bg-gray-50`}
    //         placeholderTextColor="#acacac"
    //         placeholder={input.inputLabel}
    //         keyboardType="numeric"
    //         onChangeText={(e) =>
    //           setdata({
    //             ...data,
    //             [input.inputName]: e,
    //           })
    //         }
    //         value={data[input.inputName]}
    //       />
    //     )
    // }
  }

  // function to return the name of the material from object key
  function returnMaterialName(name) {
    switch (name) {
      case 'AirGap':
        return 'Air Gap'

      case 'WindowGas':
        return 'Window Gas'

      case 'NoMas':
        return 'No Mas'

      default:
        return name
    }
  }

  async function create_new_material() {
    const user = await getUserData()
    const config = {
      headers: {
        'x-access-token': user['token'],
      },
    }

    await axios
      .post(`${BASE_URL}materials`, data, config)
      .then((res) => {
        goBack()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <View style={tw`flex-1 bg-white px-4 py-2`}>
      <View style={tw`h-auto`}>
        <ScrollView horizontal={true}>
          {Object.keys(materials).map((item, idx) => {
            return (
              <View key={idx}>
                <TouchableOpacity
                  onPress={() => {
                    setSelectedMaterial(item)
                    setdata({ type: item })
                  }}
                  style={tw`my-3 px-2 h-8 w-auto mx-1 rounded-full shadow border ${
                    item === selectedMaterial ? 'bg-black' : 'bg-white'
                  }`}
                >
                  <Text
                    style={tw`${
                      item === selectedMaterial ? 'text-white' : ''
                    } text-center my-auto px-2`}
                  >
                    {returnMaterialName(item)}
                  </Text>
                </TouchableOpacity>
              </View>
            )
          })}
        </ScrollView>
      </View>

      <KeyboardAwareScrollView>
        <View>
          {materials[selectedMaterial].inputs.map((item, idx) => {
            return <View key={idx}>{return_input(item)}</View>
          })}

          <TouchableOpacity
            style={tw`my-5 py-3 rounded-full bg-black`}
            onPress={() => create_new_material()}
          >
            <Text style={tw`text-white text-center font-bold`}>Create</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  )
}
