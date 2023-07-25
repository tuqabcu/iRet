// Copyright ©,2023, Birmingham City University

import React, { useState } from 'react'
export const ZoneContext = React.createContext()

const Zone = ({ children }) => {
  const roomScale = 50 // 50 px = 1 meter
  const [floors, setfloors] = useState([
    {
      floorId: 1,
      floorLevel: 1,
      floorStatus: false,
      rooms: [],
    },
  ])
  const [compass, setcompass] = useState([0])
  const [activeFloorIndex, setActiveFloorIndex] = useState(0)
  const [selectedCity, setselectedCity] = useState({
    name: '',
    latitude: 0,
    longitude: 0,
    weatherFile: {
      '0000': '', //current
      2030: '',
      2050: '',
      2080: '',
    },
  })

  const [hvacParameters, sethvacParameters] = useState({
    frequency: 0.89,
    equipmentAndAppliances: 450,
    NumberOfOccupants: 1,
    lighting: 20,
    heatingSetPointTemperature: 20,
    AirPermeabilityAndInfiltration: 0.1,
  })

  const updateRoom = (focusedRoom, obj) => {
    let all_floors = [...floors]
    let currentFloor = all_floors[activeFloorIndex]
    let currentRooms = currentFloor.rooms
    let new_rooms = []
    currentRooms.map((currentRoom) => {
      if (currentRoom.id == focusedRoom.id) {
        new_rooms.push({
          ...currentRoom,
          ...obj,
        })
      } else {
        new_rooms.push(currentRoom)
      }
    })
    currentFloor.rooms = new_rooms
    all_floors[activeFloorIndex] = currentFloor
    setfloors(all_floors)
  }

  const updateWindowDoor = (focusedRoom, obj) => {
    let all_floors = [...floors]
    let currentFloor = all_floors[activeFloorIndex]
    let currentRooms = currentFloor.rooms

    // let my_floor = floors[activeFloorIndex]
    let new_rooms = []

    currentRooms.map((currentRoom) => {
      if (currentRoom.id == focusedRoom.id) {
        let newWindows = []
        currentRoom.windows.map((window) => {
          if (window.id == obj.id) {
            newWindows.push({
              ...window,
              ...obj,
            })
          } else {
            newWindows.push(window)
          }
        })
        currentRoom.windows = newWindows
        new_rooms.push(currentRoom)
      } else {
        new_rooms.push(currentRoom)
      }
    })
    currentFloor.rooms = new_rooms
    all_floors[activeFloorIndex] = currentFloor
    setfloors(all_floors)
  }

  const updateObj = (focusedRoom, obj, objType) => {
    let all_floors = [...floors]
    let currentFloor = all_floors[activeFloorIndex]
    let currentRooms = currentFloor.rooms
    let new_rooms = []
    currentRooms.map((currentRoom) => {
      if (currentRoom.id == focusedRoom.id) {
        let newDoors = []
        currentRoom[objType].map((door) => {
          if (door.id == obj.id) {
            newDoors.push({
              ...door,
              ...obj,
            })
          } else {
            newDoors.push(door)
          }
        })
        currentRoom[objType] = newDoors
        new_rooms.push(currentRoom)
      } else {
        new_rooms.push(currentRoom)
      }
    })
    currentFloor.rooms = new_rooms
    all_floors[activeFloorIndex] = currentFloor
    setfloors(all_floors)
  }

  const switchFloor = (floorIdx) => {
    setActiveFloorIndex(floorIdx)
  }

  return (
    <ZoneContext.Provider
      value={{
        roomScale,
        floors,
        compass,
        activeFloorIndex,
        selectedCity,
        hvacParameters,

        setfloors,
        updateRoom,
        updateWindowDoor,
        setcompass,
        switchFloor,
        updateObj,
        setselectedCity,
        sethvacParameters,
      }}
    >
      {children}
    </ZoneContext.Provider>
  )
}

export default Zone
