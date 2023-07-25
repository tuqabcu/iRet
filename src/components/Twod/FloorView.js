// Copyright ©,2023, Birmingham City University

import React, { useContext, useEffect } from 'react'
import { ZoneContext } from '../../contexts/ZoneContext'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'

//component imports
import RoomView from './RoomView'
import WindowView from './WindowView'
import DoorView from './DoorView'

export default function FloorView() {
  const context = useContext(ZoneContext)

  return (
    <View>
      <View>
        {context.floors.length > 1 && context.activeFloorIndex != 0
          ? context.floors[context.activeFloorIndex - 1].rooms.map((room) => {
              return (
                <RoomView
                  key={room.id}
                  isPreviousFloor={true}
                  currentActiveFloorIndex={context.activeFloorIndex - 1}
                  room={room}
                  isDisabled={true}
                />
              )
            })
          : null}
      </View>

      <View>
        {context.floors[context.activeFloorIndex].rooms.map((room, idx) => {
          return (
            <View key={idx}>
              <RoomView
                isPreviousFloor={false}
                currentActiveFloorIndex={context.activeFloorIndex}
                key={room.id}
                room={room}
                isDisabled={false}
              />
              {room.windows.map((window) => (
                <WindowView key={window.id} window={window} room={room} />
              ))}
              {room.doors.map((door) => (
                <DoorView key={door.id} door={door} room={room} />
              ))}
            </View>
          )
        })}
      </View>
    </View>
  )
}
