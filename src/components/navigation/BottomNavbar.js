// Copyright ©,2023, Birmingham City University

//library imports
import { SafeAreaView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { WithLocalSvg } from 'react-native-svg'
import tw from 'twrnc'

export default function BottomNavbar() {
  const navigation = useNavigation()
  const ConstructionIcon = require('../../../assets/icons/ConstructionIcon.svg')
  const MaterialIcon = require('../../../assets/icons/MaterialIcon.svg')
  const ManagementIcon = require('../../../assets/icons/ManagementIcon.svg')

  return (
    <SafeAreaView style={tw`bg-white pb-2 flex flex-row justify-between`}>
      <TouchableOpacity
        style={tw`mx-3 p-2 mt-2`}
        onPress={() => navigation.navigate('CONSTRUCTION_SCREEN')}
      >
        <WithLocalSvg
          asset={ConstructionIcon}
          style={tw`m-auto text-black h-7 w-7`}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={tw`mx-3 p-2 mt-2`}
        onPress={() => navigation.navigate('MATERIAL_SCREEN')}
      >
        <WithLocalSvg
          asset={MaterialIcon}
          style={tw`m-auto text-black h-7 w-7`}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={tw`mx-3 p-2 mt-2`}
        onPress={() => navigation.navigate('MANAGEMENT_CONTROL_SCREEN')}
      >
        <WithLocalSvg
          asset={ManagementIcon}
          style={tw`m-auto text-black h-7 w-7`}
        />
      </TouchableOpacity>
    </SafeAreaView>
  )
}
