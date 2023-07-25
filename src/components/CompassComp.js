// Copyright ©,2023, Birmingham City University

import React, { useState, useEffect, useContext } from 'react'
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native'

import { Magnetometer } from 'expo-sensors'
import tw from 'twrnc'
import { ZoneContext } from '../contexts/ZoneContext'

export default function CompassComp({ setisCompassModalOpen }) {
  const context = useContext(ZoneContext)

  const [angle, setangle] = useState(0)
  const [magnetometerData, setMagnetometerData] = useState({})
  const [isMagnetometerActive, setisMagnetometerActive] = useState(false)

  useEffect(() => {
    if (isMagnetometerActive) {
      Magnetometer.addListener((data) => {
        setMagnetometerData(data)
      })
    }

    return () => {
      Magnetometer.removeAllListeners()
    }
  }, [isMagnetometerActive])

  const getHeading = () => {
    let { x, y, z } = magnetometerData
    let heading = -Math.atan2(y, x) * (180 / Math.PI)
    if (heading < 0) {
      heading = 360 + heading
    }
    return Math.round(heading)
  }

  const getRotation = () => {
    return {
      transform: [{ rotate: `${angle ? angle : getHeading()}deg` }],
    }
  }

  return (
    <View>
      <View style={tw`flex flex-row`}>
        <View style={styles.container}>
          <Image
            source={require('../../assets/compass.png')}
            style={[styles.arrow, getRotation()]}
          />
          <Image
            source={require('../../assets/arrow.png')}
            style={styles.arrowText}
          />
        </View>

        <View style={tw`my-auto mx-5`}>
          <TextInput
            style={tw`h-12 w-40 my-2 p-3 rounded-full shadow bg-gray-100`}
            placeholder="Angle"
            placeholderTextColor="#acacac"
            keyboardType="numeric"
            onChangeText={(e) => {
              setangle(Number(e))
              setisMagnetometerActive(false)
            }}
            value={angle}
            defaultValue={context.compass[0].toString()}
          />
          <Text style={tw`text-center my-5`}>OR</Text>
          <TouchableOpacity
            style={tw`py-3 rounded-full border`}
            onPress={() => {
              setisMagnetometerActive(!isMagnetometerActive)
            }}
          >
            <Text style={tw`text-center font-bold`}>
              {isMagnetometerActive ? 'Dont Use' : 'Use'} Device
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          // condition to not put NaN in the compass if value didnt change
          if (isNaN(getHeading()) && !angle) {
            setisCompassModalOpen(false)
          } else {
            context.setcompass(angle ? [angle] : [getHeading()])
            setisCompassModalOpen(false)
          }
        }}
        style={tw`py-3 rounded-full bg-black mx-7 mt-5`}
      >
        <Text style={tw`text-white text-center font-bold`}>Confirm</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
  },
  arrow: {
    width: 200,
    height: 200,
    borderRadius: 50,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowText: {
    width: 30,
    height: 30,
    position: 'absolute',
  },
})
