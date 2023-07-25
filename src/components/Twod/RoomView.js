// Copyright ©,2023, Birmingham City University

import React, { useRef, useEffect, useState, useContext } from 'react'
import { View, UIManager, findNodeHandle, Text } from 'react-native'
import Draggable from 'react-native-draggable'
import tw from 'twrnc'

import { ZoneContext } from '../../contexts/ZoneContext'
import Popover from '../modals/Popover'

export default function RoomView({
  room,
  isDisabled,
  currentActiveFloorIndex,
  isPreviousFloor,
}) {
  const context = useContext(ZoneContext)
  const RoomRef = useRef(null)

  const [state, setState] = useState(room)
  const [showPopover, setshowPopover] = useState(false)
  const [overlappingColor, setOverlappingColor] = useState(false)
  const stateRef = useRef(state)

  // useEffect(() => {
  //   stateRef.current = state
  // }, [state])

  // useEffect(() => {
  //   stateRef.current=state
  // }, [currentActiveFloorIndex])

  // useEffect(() => {
  //   stateRef.current=room
  // }, [room])

  useEffect(() => {
    // stateRef.current=room
    // setState(room)

    const temp = context.floors[currentActiveFloorIndex].rooms.find(
      (x) => x.id === room.id
    )
    // console.log("temp=======>")
    // console.log(temp)
    // console.log("temp=======>")

    setState((prevState) => ({
      ...prevState,
      ...temp,
      // xObj: temp?.x,
      // yObj: temp?.y,
      // previousX: temp?.x,
      // previousY: temp?.y,
      dx: temp.dx ? temp.dx : 0,
      dy: temp.dy ? temp.dy : 0,
      x: temp.x ? temp.x : 0,
      y: temp.y ? temp.y : 0,
    }))
  }, [currentActiveFloorIndex, context.activeFloorIndex])

  function overlappingChecker(gestureState) {
    // console.log((gestureState.dx/10)*10)
    let newDx = room.dx + parseInt((gestureState.dx / 10).toString()) * 10
    let newDy = room.dy + parseInt((gestureState.dy / 10).toString()) * 10

    // console.log(parseInt(((state.dx + gestureState.dx) / 10).toString()) * 10)
    // setState((prevState) => ({
    //   ...prevState,
    //   dx: (parseInt(((state.dx + gestureState.dx) / 10).toString()) * 10),
    //   dy: (parseInt(((state.dy + gestureState.dy) / 10).toString()) * 10),
    // }))

    // setState({
    //   ...state,
    //   dx: (parseInt(((state.dx + gestureState.dx) / 10).toString()) * 10),
    //   dy: (parseInt(((state.dy + gestureState.dy) / 10).toString()) * 10),
    // })

    // setTimeout(() => {

    UIManager.measure(
      findNodeHandle(RoomRef.current),
      (x, y, width, height, pageX, pageY) => {
        const newX = pageX //fx
        const newY = pageY //fy

        // context.updateRoom(room, { x: newX, y: newY }) //floor id = 0
        room.x = newX
        room.y = newY

        const checkOverlap = isRoomOverlap(newX, newY)

        // if(stateRef.current.type=='roof' && checkOverlap['overlapedRoom']){
        // console.log("overlapped with", checkOverlap['overlapedRoom'])
        // console.log("my type is", stateRef.current.type)
        // // newDy+=checkOverlap['overlapedRoom']['dy']
        // }

        // console.log("newDx======",newDx)
        // console.log("newDy======",newDy)

        if (!checkOverlap['isOverlap']) {
          setOverlappingColor(false)
          context.updateRoom(room, {
            x: newX,
            y: newY,
            dx: newDx,
            dy: newDy,
            overlappedWith: null,
          })
        } else {
          setOverlappingColor(room.type === 'roof' ? false : true)
          context.updateRoom(room, {
            x: newX,
            y: newY,
            dx: newDx,
            dy: newDy,
            overlappedWith: checkOverlap['overlapedRoom'],
          }) //floor id = 0
        }
      }
    )
    // }, 3000);

    // setTimeout(() => {
    //   console.log(state)
    //   // console.log(state)
    // }, 3000);
  }

  const isRoomOverlap = (newX, newY) => {
    let currentMinX = newX
    let currentMaxX = newX + parseInt(room.width)

    let currentMinY = newY
    let currentMaxY = newY + parseInt(room.height)

    let isOverlap = false
    let overlapedRoom = null
    for (
      let i = 0;
      i < context.floors[currentActiveFloorIndex].rooms.length;
      i++
    ) {
      const other = context.floors[currentActiveFloorIndex].rooms[i]
      if (room.id !== other.id) {
        let otherXStart = other.x
        let otherXEnds = other.x + parseInt(other.width)

        let otherYStart = other.y
        let otherYEnds = other.y + parseInt(other.height)

        isOverlap =
          currentMaxX >= otherXStart &&
          currentMinX <= otherXEnds &&
          currentMaxY >= otherYStart &&
          currentMinY <= otherYEnds

        if (isOverlap) {
          overlapedRoom = other
          break
        }
      }
    }
    // console.log('isOverlap==', isOverlap)
    return { isOverlap, overlapedRoom }
  }

  return (
    <Draggable
      disabled={isDisabled}
      // onDrag={((e,gestureState)=> setTimeout(() => {
      //   setMyGesture(gestureState)
      // }, 3000) )}
      onDragRelease={(e, gestureState) => overlappingChecker(gestureState)}
      onLongPress={() => setshowPopover(!showPopover)}
      x={state.x}
      y={state.y}
    >
      <Popover
        show={showPopover}
        setshowPopover={setshowPopover}
        context={context}
        room={room}
      />
      <View
        ref={RoomRef}
        style={tw`h-${`${room.height}px`} w-${`${room.width}px`}  bg-${
          overlappingColor ? 'red' : !isPreviousFloor ? room.color : 'slate'
        }-${!isPreviousFloor ? 500 : 300} relative`}
      >
        {!isPreviousFloor ? (
          <Text style={tw`flex m-auto`}>{room.name}</Text>
        ) : null}
      </View>
    </Draggable>
  )
}
