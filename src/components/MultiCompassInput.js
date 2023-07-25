// Copyright ©,2023, Birmingham City University

import { View, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import tw from 'twrnc'
import { WithLocalSvg } from 'react-native-svg'

export default function MultiCompassInput({ context }) {
  const PlusIcon = require('../../assets/icons/PlusIcon.svg')
  const CancelIcon = require('../../assets/icons/CancelIcon.svg')

  return (
    <View style={tw`flex flex-row flex-wrap`}>
      {context.compass.map((item, idx) => {
        return (
          <View key={idx}>
            <TouchableOpacity
              onPress={() => {
                let filteredArray = context.compass
                filteredArray = filteredArray.filter((el) => el != item)
                context.setcompass(filteredArray)
              }}
              style={tw`z-20`}
            >
              <SafeAreaView
                style={tw`absolute left-0 top-0 rounded-full bg-black `}
              >
                <WithLocalSvg
                  onPress={() => {
                    let filteredArray = context.compass
                    filteredArray = filteredArray.filter((el) => el != item)
                    context.setcompass(filteredArray)
                  }}
                  asset={CancelIcon}
                  style={tw`m-auto font-medium text-white h-4 w-4`}
                />
              </SafeAreaView>
            </TouchableOpacity>

            <TextInput
              key={idx}
              style={tw`h-10 w-14 my-2 p-3 rounded-md border border-gray-100 bg-gray-50 mx-1 `}
              placeholder="0"
              placeholderTextColor="#acacac"
              onChangeText={(e) => {
                context.compass[idx] = e
                context.setcompass(context.compass)
              }}
              defaultValue={item.toString()}
            />
          </View>
        )
      })}

      <TouchableOpacity
        onPress={() => {
          context.setcompass([...context.compass, 0])
        }}
        underlayColor="gray"
        style={tw`mx-2`}
      >
        <View
          style={tw`flex flex-row bg-black justify-between rounded-full h-6 w-6 shadow my-auto`}
        >
          <WithLocalSvg
            onPress={() => {
              context.setcompass([...context.compass, 0])
            }}
            asset={PlusIcon}
            style={tw`m-auto text-white h-4 w-4`}
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}
