// Copyright ©,2023, Birmingham City University

import { useContext } from 'react'
import { View, TextInput, Text } from 'react-native'
import tw from 'twrnc'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { ZoneContext } from '../../contexts/ZoneContext'

export default function GlobalParametersScreen() {
  const context = useContext(ZoneContext)

  return (
    <KeyboardAwareScrollView>
      <View style={tw`mx-3`}>
        <Text style={tw`font-bold text-gray-700 mt-3 mb-5 text-[15px]`}>
          HVAC Global Parameters
        </Text>
        <View>
          <Text style={tw`font-medium text-[13px] `}>
            Nominal Thermal Efficiency
          </Text>
          <Text style={tw`text-gray-500 text-[12px]`}>*Range: 0.8 - 0.99</Text>

          <TextInput
            style={tw`w-full p-3 rounded-md border border-gray-100 bg-gray-50 m-1`}
            placeholder="0"
            placeholderTextColor="#acacac"
            keyboardType="numeric"
            onChangeText={(e) => {
              context.sethvacParameters({
                ...context.hvacParameters,
                frequency: e,
              })
            }}
            defaultValue={context.hvacParameters.frequency.toString()}
          />
        </View>

        <View>
          <Text style={tw`font-medium text-[13px] `}>
            Equipment and Appliances
          </Text>
          <Text style={tw`text-gray-500 text-[12px]`}>*Range: 50 - 500</Text>
          <TextInput
            style={tw`w-full p-3 rounded-md border border-gray-100 bg-gray-50 m-1`}
            placeholder="0"
            placeholderTextColor="#acacac"
            keyboardType="numeric"
            onChangeText={(e) => {
              context.sethvacParameters({
                ...context.hvacParameters,
                equipmentAndAppliances: e,
              })
            }}
            defaultValue={context.hvacParameters.equipmentAndAppliances.toString()}
          />
        </View>

        <View>
          <Text style={tw`font-medium text-[13px] `}>Number Of Occupants</Text>
          <Text style={tw`text-gray-500 text-[12px]`}>*Range: 1 - 4</Text>
          <TextInput
            style={tw`w-full p-3 rounded-md border border-gray-100 bg-gray-50 m-1`}
            placeholder="0"
            placeholderTextColor="#acacac"
            keyboardType="numeric"
            onChangeText={(e) => {
              context.sethvacParameters({
                ...context.hvacParameters,
                NumberOfOccupants: e,
              })
            }}
            defaultValue={context.hvacParameters.NumberOfOccupants.toString()}
          />
        </View>

        <View>
          <Text style={tw`font-medium text-[13px] `}>Lighting</Text>
          <Text style={tw`text-gray-500 text-[12px]`}>*Range: 10 - 200</Text>
          <TextInput
            style={tw`w-full p-3 rounded-md border border-gray-100 bg-gray-50 m-1`}
            placeholder="0"
            placeholderTextColor="#acacac"
            keyboardType="numeric"
            onChangeText={(e) => {
              context.sethvacParameters({
                ...context.hvacParameters,
                lighting: e,
              })
            }}
            defaultValue={context.hvacParameters.lighting.toString()}
          />
        </View>

        <View>
          <Text style={tw`font-medium text-[13px] `}>
            Heating Set-point Temperature
          </Text>
          <Text style={tw`text-gray-500 text-[12px]`}>*Range: 18 - 22</Text>
          <TextInput
            style={tw`w-full p-3 rounded-md border border-gray-100 bg-gray-50 m-1`}
            placeholder="0"
            placeholderTextColor="#acacac"
            keyboardType="numeric"
            onChangeText={(e) => {
              context.sethvacParameters({
                ...context.hvacParameters,
                heatingSetPointTemperature: e,
              })
            }}
            defaultValue={context.hvacParameters.heatingSetPointTemperature.toString()}
          />
        </View>

        <View>
          <Text style={tw`font-medium text-[13px] `}>
            Air permeability and infiltration: doors and windows
          </Text>
          <Text style={tw`text-gray-500 text-[12px]`}>*Range: 0.03 - 0.7</Text>
          <TextInput
            style={tw`w-full p-3 rounded-md border border-gray-100 bg-gray-50 m-1`}
            placeholder="0"
            placeholderTextColor="#acacac"
            keyboardType="numeric"
            onChangeText={(e) => {
              context.sethvacParameters({
                ...context.hvacParameters,
                AirPermeabilityAndInfiltration: e,
              })
            }}
            defaultValue={context.hvacParameters.AirPermeabilityAndInfiltration.toString()}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}
