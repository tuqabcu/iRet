// Copyright ©,2023, Birmingham City University

import { useState } from 'react'
import { View, TouchableOpacity } from 'react-native'
import tw from 'twrnc'
import { WithLocalSvg } from 'react-native-svg'
import { useNavigation } from '@react-navigation/native'

export default function Popover({ show, setshowPopover, context, room }) {
  const navigation = useNavigation()

  const PlusIcon = require('../../../assets/icons/PlusIcon.svg')
  const DeleteIcon = require('../../../assets/icons/DeleteIcon.svg')
  const EditIcon = require('../../../assets/icons/EditIcon.svg')
  const WindowIcon = require('../../../assets/icons/WindowIcon.svg')
  const DoorIcon = require('../../../assets/icons/DoorIcon.svg')

  const [showItems, setshowItems] = useState(false)

  const windowObj = {
    id: Math.floor(Math.random() * 1000000000),
    name: 'window',
    height: 30,
    width: 30,
    depth: 30,
    heightMeter: 1,
    widthMeter: 1,
    depthMeter: 1,
    color: 'gray',
    shape: 'block',
    x: room.x,
    y: room.y,
    dx: 0,
    dy: 0,
    wall: 0,
    orientation: '',
    windowConstruction: {
      name: 'Window Type 1001',
      materials: [
        {
          shared: true,
          _id: '64242adb06409a113b7efe33',
          type: 'Glazing',
          opticalDataType: 'SpectralAverage',
          name: 'Glass 38',
          thickness: '.003',
          solarTransmittance: '.740',
          frontSolarReflectance: '.090',
          backSolarReflectance: '.100',
          visibleTransmittance: '.820',
          frontVisibleReflectance: '.110',
          backVisibleReflectance: '.120',
          infraredTransmittance: '.0',
          frontInfraredHemispherical: '.84',
          backInfraredHemispherical: '.20',
          conductivity: '.9',
          createdOn: '2023-03-29T12:11:07.758Z',
        },
        {
          shared: true,
          _id: '642430ad06409a113b7efe34',
          type: 'WindowGas',
          thickness: '.013',
          gasType: 'Air',
          name: 'Gas 1002',
          createdOn: '2023-03-29T12:35:57.874Z',
        },
        {
          shared: true,
          _id: '6424315106409a113b7efe35',
          type: 'Glazing',
          opticalDataType: 'SpectralAverage',
          name: 'Glass 2',
          thickness: '.003',
          solarTransmittance: '.837',
          frontSolarReflectance: '.075',
          backSolarReflectance: '.075',
          visibleTransmittance: '.898',
          frontVisibleReflectance: '.081',
          backVisibleReflectance: '.081',
          infraredTransmittance: '.0',
          frontInfraredHemispherical: '.84',
          backInfraredHemispherical: '.84',
          conductivity: '.9',
          createdOn: '2023-03-29T12:38:41.544Z',
        },
      ],
    },
  }

  const doorObj = {
    id: Math.floor(Math.random() * 1000000000),
    name: 'door',
    height: 30,
    width: 30,
    depth: 30,
    heightMeter: 1,
    widthMeter: 1,
    depthMeter: 1,
    color: '#633b3b',
    shape: 'block',
    x: room.x,
    y: room.y,
    dx: 0,
    dy: 0,
    wall: 0,
    orientation: '',
    doorConstruction: {
      name: 'HOLLOW WOOD DOOR',
      materials: [
        {
          _id: '645a491cd479d30b3eed9a5e',
          shared: 'true',
          type: 'Mas',
          name: 'WOOD - HARDWOOD 1 / 8 IN',
          thickness: '3.1699201E-03',
          conductivity: '0.1591211',
          density: '720.8308',
          specificHeat: '1255.2',
          roughness: 'MediumSmooth',
          thermalAbsorptance: '0.9',
          solarAbsorptance: '0.78',
          visibleAbsorptance: '0.78',
          createdOn: '2023-03-28T13:27:53.188+00:00',
        },
        {
          _id: '645a485f5c03a91b28c82032',
          shared: 'true',
          type: 'AirGap',
          name: 'B1 - AIRSPACE RESISTANCE',
          thermalResistance: '0.1603675',
          createdOn: '2023-05-09T13:19:27.293+00:00',
        },
        {
          _id: '645a491cd479d30b3eed9a5e',
          shared: 'true',
          type: 'Mas',
          name: 'WOOD - HARDWOOD 1 / 8 IN',
          thickness: '3.1699201E-03',
          conductivity: '0.1591211',
          density: '720.8308',
          specificHeat: '1255.2',
          roughness: 'MediumSmooth',
          thermalAbsorptance: '0.9',
          solarAbsorptance: '0.78',
          visibleAbsorptance: '0.78',
          createdOn: '2023-03-28T13:27:53.188+00:00',
        },
      ],
    },
  }

  function create_window() {
    let my_floor = context.floors[context.activeFloorIndex]
    my_floor.rooms.map((roomElement) => {
      if (roomElement.id == room.id) {
        roomElement.windows.push(windowObj)
      }
    })
    // context.setfloors([my_floor])
    context.setfloors([...context.floors])
    setshowItems(false)
    setshowPopover(false)
  }

  function create_door() {
    let my_floor = context.floors[context.activeFloorIndex]
    my_floor.rooms.map((roomElement) => {
      if (roomElement.id == room.id) {
        roomElement.doors.push(doorObj)
      }
    })
    // context.setfloors([my_floor])
    context.setfloors([...context.floors])
    setshowItems(false)
    setshowPopover(false)
  }

  function delete_room() {
    let my_floor = context.floors[context.activeFloorIndex]
    my_floor.rooms = my_floor.rooms.filter((roomItem) => roomItem.id != room.id)
    context.setfloors([...context.floors])
  }

  return show === true ? (
    <View style={tw`relative flex`}>
      <View
        style={tw`absolute -top-14 left-15 rounded bg-black text-xs text-white`}
      >
        <View
          style={tw`absolute -bottom-3 left-0 w-0 h-0 
                    border-l-[10px] border-l-transparent
                    border-t-[15px] border-t-black
                    border-r-[10px] border-r-transparent`}
        />
        <View style={tw`flex flex-row p-2`}>
          {showItems ? (
            <>
              <TouchableOpacity onPress={() => create_window()}>
                <View>
                  <WithLocalSvg
                    asset={WindowIcon}
                    style={tw`m-auto text-white h-6 w-6`}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => create_door()}>
                <WithLocalSvg
                  asset={DoorIcon}
                  style={tw`m-auto text-white h-6 w-6 ml-3`}
                />
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity
                onPress={() => {
                  setshowItems(true)
                }}
              >
                <View>
                  <WithLocalSvg
                    asset={PlusIcon}
                    style={tw`my-auto text-white h-5 w-5 border border-white rounded`}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('EDIT_ROOM_SCREEN', { room: room })
                }
              >
                <WithLocalSvg
                  asset={EditIcon}
                  style={tw`my-auto text-white h-6 w-6 mx-3`}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => delete_room()}>
                <WithLocalSvg
                  asset={DeleteIcon}
                  style={tw`my-auto text-white h-6 w-6`}
                />
              </TouchableOpacity>
            </>
          )}
        </View>
      </View>
    </View>
  ) : null
}
