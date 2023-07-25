// Copyright ©,2023, Birmingham City University

import React, { FC, useState, useEffect } from 'react'
import { View, TouchableOpacity, Alert } from 'react-native'
// import { useDispatch, useSelector } from 'react-redux';
// import { css } from '@styles/index';
// import { Floor } from '@type/index';
// import { deleteFloor, switchFloor } from '@stores/app/action';
// import { Button, Container, Label } from '@components/index';
// import { IconClose, IconFloor } from '@assets/icons';
// import { rootState } from '@stores/createStore';

// interface FloorToggleProps {
// 	floors: Floor[];
// 	currentFloor: number;
// 	addNewFloor: () => void;
// 	clearPanel: () => void;
// 	showAddBuilding: boolean;
// 	setShowAddBuilding: (e: boolean) => void;
// }

const FloorToggle = ({
  floors,
  currentFloor,
  addNewFloor,
  clearPanel,
  showAddBuilding,
  setShowAddBuilding,
}) => {
  const dispatch = useDispatch()
  const app = useSelector((state) => state.app)
  const [openFloorToggle, setOpenFloorToggle] = useState(true)

  // const switchFloorView = (floorLevel) => {
  // 	setOpenFloorToggle((e) => !e);
  // 	dispatch(switchFloor(floorLevel));
  // };

  // const handleDeleteFloor = (floorLevel) => {
  // 	if (floorLevel + 1 === floors.length && floorLevel !== 0) {
  // 		Alert.alert('Are you sure want to delete this floor?', '', [
  // 			{
  // 				text: 'No',
  // 				onPress: () => {},
  // 			},
  // 			{
  // 				text: 'Yes',
  // 				onPress: () => {
  // 					dispatch(deleteFloor(floorLevel));
  // 					dispatch(switchFloor(floorLevel - 1));
  // 				},
  // 			},
  // 		]);
  // 	} else {
  // 		if (floorLevel === 0) {
  // 			Alert.alert('cannot delete first floor');
  // 		} else {
  // 			Alert.alert('only can delete top floor');
  // 		}
  // 	}
  // };

  // useEffect(() => {
  // 	if (showAddBuilding || app.roomFocused || app.windowFocused) setOpenFloorToggle(false);
  // }, [showAddBuilding, app.roomFocused, app.windowFocused]);

  return (
    <Container w="1/3" columnReverse alignStart justifyStart>
      <TouchableOpacity
        onPress={() => {
          // clearPanel();
          // setShowAddBuilding(false);
          // setOpenFloorToggle((e) => !e);
        }}
        style={[css('items-center p-3 rounded-lg bg-white mt-2')]}
      >
        {!openFloorToggle && (
          <Label style={css('absolute right-0')}>{currentFloor + 1}</Label>
        )}
        {/* {openFloorToggle && !app.roomFocused && !app.windowFocused ? <IconClose /> : <IconFloor />} */}
      </TouchableOpacity>
      {openFloorToggle ? (
        <>
          {floors.map((floor, index) => (
            <View key={index}>
              {/* <Button
								// text={(index + 1).toString()}
								// primary={currentFloor === index}
								// white={currentFloor !== index}
								// onPress={() => switchFloorView(floor.level)}
								// style={css('px-5 mt-4')}
							/> */}
              <TouchableOpacity
                style={css('absolute bg-gray-200 -left-2 rounded')}
                // onPress={() => handleDeleteFloor(floor.level)}
              >
                <IconClose />
              </TouchableOpacity>
            </View>
          ))}
          <View>
            <Button
              text="+"
              white
              onPress={() => {
                // addNewFloor();
              }}
              style={css('px-5 mt-4')}
            />
          </View>
        </>
      ) : (
        <></>
      )}
    </Container>
  )
}

export { FloorToggle }
