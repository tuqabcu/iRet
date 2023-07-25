// Copyright ©,2023, Birmingham City University

import { useState, useEffect } from 'react'
import {
  requestForegroundPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location'

export default function useCurrentLocation() {
  const [response, setresponse] = useState(null)

  useEffect(() => {
    ;(async () => {
      let { status } = await requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setresponse('Permission to access location was denied')
        return
      } else {
        let location = await getCurrentPositionAsync({})
        let customRes = {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        }
        setresponse(customRes)
      }
    })()
  }, [])

  return [response]
}
