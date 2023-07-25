// Copyright ©,2023, Birmingham City University

//library imports
import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { WithLocalSvg } from 'react-native-svg'
import tw from 'twrnc'
import { TouchableOpacity, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import AuthContextWraper from './src/contexts/AuthContext'
import ZoneContextWraper from './src/contexts/ZoneContext'
import { AuthContext } from './src/contexts/AuthContext'

//pages imports
import ProjectScreen from './src/screens/Project/ProjectScreen'
import ProjectDetailsScreen from './src/screens/Project/ProjectDetailsScreen'
import ConstructionScreen from './src/screens/Construction/ConstructionScreen'
import NewConstructionScreen from './src/screens/Construction/NewConstructionScreen'
import MaterialScreen from './src/screens/MaterialScreen'
import ManagementControlScreen from './src/screens/ManagementControlScreen'
import EditRoomScreen from './src/screens/Project/EditRoomScreen'
import SimulationScreen from './src/screens/SimulationScreen'
import GlobalParametersScreen from './src/screens/Project/GlobalParametersScreen'

const Stack = createStackNavigator()

function headerLeft(canGoBack, onPress, isBackBtnEnabled) {
  const Logo = require('./assets/iRet-logo.svg')
  const BackIcon = require('./assets/icons/BackIcon.svg')

  return canGoBack ? (
    <View style={tw`flex flex-row h-full`}>
      {isBackBtnEnabled ? (
        <TouchableOpacity
          style={tw`my-auto w-7 h-full mb-3 text-black ml-1`}
          onPress={onPress}
        >
          <WithLocalSvg asset={BackIcon} style={tw`text-black`} />
        </TouchableOpacity>
      ) : null}
      <WithLocalSvg
        asset={Logo}
        style={tw`my-auto ${
          isBackBtnEnabled ? 'mx-1' : 'ml-9'
        }  mb-3 w-16 h-full`}
      />
    </View>
  ) : (
    <View style={tw`flex flex-row h-full`}>
      <WithLocalSvg asset={Logo} style={tw`my-auto ml-9 mb-3 w-16 h-full`} />
    </View>
  )
}

function headerRight(navigation) {
  const context = useContext(AuthContext)

  const LogoutIcon = require('./assets/icons/LogoutIcon.svg')

  return (
    <View style={tw`flex flex-row h-full`}>
      <TouchableOpacity
        style={tw`my-auto w-7 h-full mr-3`}
        onPress={async () => {
          await AsyncStorage.removeItem('@user')
          context.log_out()
        }}
      >
        <WithLocalSvg asset={LogoutIcon} style={tw`text-black`} />
      </TouchableOpacity>
    </View>
  )
}

function App() {
  const navigationOptions = {
    title: '',
    headerTintColor: 'black',
    headerBackTitleVisible: false,
  }

  return (
    <AuthContextWraper>
      <ZoneContextWraper>
        <Stack.Navigator>
          <Stack.Screen
            name="PROJECT_SCREEN"
            component={ProjectScreen}
            options={({ navigation }) => ({
              ...navigationOptions,
              gestureEnabled: false,
              headerRight: () => headerRight(navigation),
              headerLeft: ({ canGoBack, onPress }) =>
                headerLeft(canGoBack, onPress, false), // false: can not go back and hide the back icon
            })}
          />

          <Stack.Screen
            name="PROJECT_DETAILS_SCREEN"
            component={ProjectDetailsScreen}
            options={() => ({
              ...navigationOptions,
              header: ({ canGoBack, onPress }) => null, // true: can go back show the back icon
            })}
          />

          <Stack.Screen
            name="EDIT_ROOM_SCREEN"
            component={EditRoomScreen}
            options={() => ({
              ...navigationOptions,
              headerLeft: ({ canGoBack, onPress }) =>
                headerLeft(canGoBack, onPress, true), // true: can go back show the back icon
            })}
          />

          <Stack.Screen
            name="CONSTRUCTION_SCREEN"
            component={ConstructionScreen}
            options={() => ({
              ...navigationOptions,
              headerLeft: ({ canGoBack, onPress }) =>
                headerLeft(canGoBack, onPress, true), // true: can go back show the back icon
            })}
          />

          <Stack.Screen
            name="NEW_CONSTRUCTION_SCREEN"
            component={NewConstructionScreen}
            options={() => ({
              ...navigationOptions,
              headerLeft: ({ canGoBack, onPress }) =>
                headerLeft(canGoBack, onPress, true), // true: can go back show the back icon
            })}
          />

          <Stack.Screen
            name="MATERIAL_SCREEN"
            component={MaterialScreen}
            options={() => ({
              ...navigationOptions,
              headerLeft: ({ canGoBack, onPress }) =>
                headerLeft(canGoBack, onPress, true), // true: can go back show the back icon
            })}
          />

          <Stack.Screen
            name="MANAGEMENT_CONTROL_SCREEN"
            component={ManagementControlScreen}
            options={() => ({
              ...navigationOptions,
              headerLeft: ({ canGoBack, onPress }) =>
                headerLeft(canGoBack, onPress, true), // true: can go back show the back icon
            })}
          />

          <Stack.Screen
            name="SIMULATION_SCREEN"
            component={SimulationScreen}
            options={() => ({
              ...navigationOptions,
              headerLeft: ({ canGoBack, onPress }) =>
                headerLeft(canGoBack, onPress, true), // true: can go back show the back icon
            })}
          />

          <Stack.Screen
            name="GLOBAL_PARAMETERS_SCREEN"
            component={GlobalParametersScreen}
            options={() => ({
              ...navigationOptions,
              headerLeft: ({ canGoBack, onPress }) =>
                headerLeft(canGoBack, onPress, true), // true: can go back show the back icon
            })}
          />
        </Stack.Navigator>
      </ZoneContextWraper>
    </AuthContextWraper>
  )
}

export default App
