// Copyright ©,2023, Birmingham City University

import React, { useRef, useEffect, useState, useContext } from 'react'
import { View, UIManager, findNodeHandle } from 'react-native'
import Draggable from 'react-native-draggable'
import { ZoneContext } from '../../contexts/ZoneContext'

export default function DoorView({ door, room }) {
  const [state, setState] = useState(door)
  const [focusedRoom, setfocusedRoom] = useState(room)
  const context = useContext(ZoneContext)
  const doorRef = useRef(null)

  const stateRef = useRef(state)
  useEffect(() => {
    stateRef.current = state
  }, [state])

  useEffect(() => {
    setfocusedRoom(room)
  }, [room])

  function updateDoor(gestureState) {
    let newDx = door.dx + parseInt((gestureState.dx / 10).toString()) * 10
    let newDy = door.dy + parseInt((gestureState.dy / 10).toString()) * 10
    // console.log("newDx=======>>>>",newDx)
    // console.log("newDy=======>>>>",newDy)
    UIManager.measure(
      findNodeHandle(doorRef.current),
      (x, y, width, height, pageX, pageY) => {
        context.updateObj(
          room,
          {
            ...door,
            x: pageX,
            y: pageY,
            dx: newDx,
            dy: newDy,
            orientation: findOrientation(pageX, pageY),
          },
          'doors'
        )
      }
    )
  }

  function findOrientation(doorX, doorY) {
    let roomX = room.x
    let roomMaxX = roomX + room.width
    let roomY = room.y
    let roomMaxY = roomY + room.height

    let orientation = null
    if (doorX >= roomX && roomX <= roomMaxX && doorY <= roomY) {
      orientation = 'top'
    } else if (
      doorX >= roomX &&
      roomX <= roomMaxX &&
      (doorY >= roomMaxY || doorY + 5 >= roomMaxY)
    ) {
      orientation = 'bottom'
    } else if (doorX < roomX) {
      orientation = 'left'
    } else {
      orientation = 'right'
    }
    console.log('orientation=====', orientation)
    return orientation
  }

  function getXY() {
    let currentWindow = stateRef.current
    let currentRoom = focusedRoom
    let x = 0
    let y = 0
    if (currentWindow.orientation == 'top' || currentWindow.orientation == '') {
      x = focusedRoom.x + focusedRoom.width / 2 //-stateRef.current.width/2
      y = focusedRoom.y - currentWindow.height
    } else if (currentWindow.orientation == 'bottom') {
      x = focusedRoom.x + focusedRoom.width / 2 //-stateRef.current.width/2
      y = focusedRoom.y + focusedRoom.height
    } else if (currentWindow.orientation == 'left') {
      x = focusedRoom.x - currentWindow.width
      y = focusedRoom.y + focusedRoom.height / 2
    } else if (currentWindow.orientation == 'right') {
      x = focusedRoom.x + focusedRoom.width
      y = focusedRoom.y + focusedRoom.height / 2
    }
    return {
      x,
      y,
    }
  }

  return (
    <Draggable
      x={getXY()['x']}
      y={getXY()['y']}
      onDragRelease={(e, gestureState) => updateDoor(gestureState)}
      // x={focusedRoom.x}
      // y={focusedRoom.y}
      minX={parseInt(focusedRoom.x) - parseInt(stateRef.current.width)}
      maxX={
        parseInt(focusedRoom.x) +
        parseInt(focusedRoom.width) +
        parseInt(stateRef.current.width)
      }
      minY={parseInt(focusedRoom.y) - parseInt(stateRef.current.height)}
      maxY={
        parseInt(focusedRoom.y) +
        parseInt(focusedRoom.height) +
        parseInt(stateRef.current.height)
      }
    >
      <View
        ref={doorRef}
        style={[
          {
            height: stateRef.current.height,
            width: stateRef.current.width,
            backgroundColor: stateRef.current.color,
            position: 'relative',
          },
        ]}
      />
    </Draggable>
  )
}
