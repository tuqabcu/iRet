// Copyright ©,2023, Birmingham City University

import { Alert } from 'react-native'
import { useState, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LOGIN_EMAIL, LOGIN_PASSWORD } from '@env'

import { loginJeplus } from '../apis/Auth'
import { ZoneContext } from '../contexts/ZoneContext'
import { getResult, getStatus, runSimulation } from '../apis/Simulation'

export default function useSimulation() {
  const context = useContext(ZoneContext)

  const [simulationStatus, setSimulationStatus] = useState('IDLE')
  const [progressStatus, setprogressStatus] = useState({
    bool: false,
    msg: null,
  })

  const [simulationData, setSimulationData] = useState({
    electricity: 0,
    natural_gas: 0,
    electricity_cost: 0,
    gas_cost: 0,
    discomfort: 0,
  })

  function betweenMarkers(text, begin, end) {
    var firstChar = text.indexOf(begin) + begin.length
    var lastChar = text.indexOf(end)
    var newText = text.substring(firstChar, lastChar)
    return newText
  }

  const login = async () => {
    console.log(LOGIN_EMAIL, LOGIN_PASSWORD)
    console.log('========= LOGIN =========')
    await loginJeplus(LOGIN_EMAIL, LOGIN_PASSWORD).then(async (result) => {
      if (result) {
        await AsyncStorage.setItem('@authjeplus', result.token)
        console.log(result)
        return { data: result.data, token: result.token }
      } else {
        Alert.alert(result.data?.status)
        return false
      }
    })
  }

  const runSimulationAPI = async (files, weatherUri, context) => {
    console.log('========= RUN SIMULATION =========')
    return await runSimulation(files, weatherUri, context)
  }

  const getSimulationStatus = async (simulationID, screenName) => {
    return await getStatus(simulationID).then((result) => {
      if (result.data.status) {
        setSimulationStatus(result.data.status)

        return result.data.status
      }
    })
  }

  // const getSimulationResult = async (simulationID) => {
  //   return await getResult(simulationID)
  //     .then(async (result) => {
  //       let electricity = parseFloat(
  //         betweenMarkers(
  //           result,
  //           ',Total End Uses,',
  //           'Note: Natural gas appears to be the principal heating source based on energy usage.'
  //         )
  //       )

  //       let natural_gas = parseFloat(
  //         betweenMarkers(
  //           result,
  //           `,Total End Uses,${electricity},`,
  //           'Note: Natural gas appears to be the principal heating source based on energy usage.'
  //         )
  //       )

  //       let discomfort = parseFloat(
  //         betweenMarkers(
  //           result,
  //           ',Time Not Comfortable Based on Simple ASHRAE 55-2004,',
  //           'Note 1: An asterisk (*) indicates that the feature is not yet implemented.'
  //         )
  //       )

  //       let newData = {
  //         ...simulationData,
  //         electricity: electricity,
  //         natural_gas: natural_gas,
  //         electricity_cost: (electricity * 34).toFixed(2),
  //         gas_cost: (natural_gas * 10.3).toFixed(2),
  //         discomfort: discomfort,
  //       }
  //       setSimulationData(newData)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //       setSimulationData([])
  //     })
  // }

  const getSimulationResult = async (simulationID) => {
    return await getResult(simulationID)
      .then(async (result) => {
        let res = betweenMarkers(
          result,
          ',Total End Uses,',
          'Note: Natural gas appears to be the principal heating source based on energy usage.'
        )

        let customRes = res.split(',')

        let discomfort = parseFloat(
          betweenMarkers(
            result,
            ',Time Not Comfortable Based on Simple ASHRAE 55-2004,',
            'Note 1: An asterisk (*) indicates that the feature is not yet implemented.'
          )
        )
        console.log(customRes[0])
        console.log(customRes[1])
        console.log(discomfort)

        let electricity = parseFloat(customRes[0])

        let natural_gas = parseFloat(customRes[1])

        let newData = {
          ...simulationData,
          electricity: electricity,
          natural_gas: natural_gas,
          electricity_cost: electricity * 34,
          gas_cost: natural_gas * 10.3,
          discomfort: discomfort,
        }

        setSimulationData(newData)
      })
      .catch((err) => {
        console.log(err)
        setSimulationData([])
      })
  }

  return {
    simulationStatus,
    progressStatus,
    simulationData,

    login,
    getSimulationStatus,
    getSimulationResult,
    runSimulationAPI,
    setprogressStatus,
  }
}
