// Copyright ©,2023, Birmingham City University

//library imports
import { useState, useContext, useEffect } from 'react'
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native'
import * as MediaLibrary from 'expo-media-library'
import * as FileSystem from 'expo-file-system'
import tw from 'twrnc'

//config imports
import { generateIDF } from '../components/export/generateIDF'
import { ZoneContext } from '../contexts/ZoneContext'
import useSimulation from '../customHooks/useSimulation'

//component imports
import { ExportSimulationResultEso } from '../components/export/ExportSimulationResultEso'

export default function SimulationScreen({ navigation }) {
  const context = useContext(ZoneContext)
  const {
    simulationStatus,
    progressStatus,
    simulationData,

    login,
    getSimulationStatus,
    getSimulationResult,
    runSimulationAPI,
    setprogressStatus,
  } = useSimulation()

  const [simulationID, setSimulationID] = useState(null)

  async function save_idf() {
    const { status } = await MediaLibrary.requestPermissionsAsync()
    if (status === 'granted') {
      const files = generateIDF(context)

      const modelParams = `${FileSystem.documentDirectory}modelParams.idf`
      const constructions = `${FileSystem.documentDirectory}constructions.idf`
      const zoneAndSurfaces = `${FileSystem.documentDirectory}zoneAndSurfaces.idf`
      const people = `${FileSystem.documentDirectory}people.idf`
      const hvac = `${FileSystem.documentDirectory}hvac.idf`
      const reports = `${FileSystem.documentDirectory}reports.idf`
      const mainImf = `${FileSystem.documentDirectory}mainImf.idf`

      await FileSystem.writeAsStringAsync(modelParams, files.modelParams, {
        encoding: FileSystem.EncodingType.UTF8,
      })

      await FileSystem.writeAsStringAsync(constructions, files.constructions, {
        encoding: FileSystem.EncodingType.UTF8,
      })

      await FileSystem.writeAsStringAsync(
        zoneAndSurfaces,
        files.zoneAndSurfaces,
        {
          encoding: FileSystem.EncodingType.UTF8,
        }
      )

      await FileSystem.writeAsStringAsync(people, files.people, {
        encoding: FileSystem.EncodingType.UTF8,
      })

      await FileSystem.writeAsStringAsync(hvac, files.hvac, {
        encoding: FileSystem.EncodingType.UTF8,
      })

      await FileSystem.writeAsStringAsync(reports, files.reports, {
        encoding: FileSystem.EncodingType.UTF8,
      })

      await FileSystem.writeAsStringAsync(mainImf, files.mainImf, {
        encoding: FileSystem.EncodingType.UTF8,
      })

      const weatherFile = await FileSystem.downloadAsync(
        'https://ik.imagekit.io/fladioarmandika/GBR_ENG_Holme.Moss.033400_TMYx_8RYo5ltah.epw?updatedAt=1637649938303',
        FileSystem.documentDirectory +
          `${context.selectedCity.weatherFile['0000']}.epw`
      )

      return {
        weatherUri: weatherFile.uri,
        files: {
          modelParams,
          constructions,
          zoneAndSurfaces,
          people,
          hvac,
          reports,
          mainImf,
        },
      }
    } else {
      console.log('error')
    }
  }

  async function run_simulation() {
    setprogressStatus({
      bool: true,
      msg: 'Saving Idf files...',
    })
    const { weatherUri, files } = await save_idf(context)

    if (files && weatherUri) {
      setprogressStatus({
        bool: true,
        msg: 'Claiming your simulation Id...',
      })
      await login()
      await runSimulationAPI(files, weatherUri, context).then((result) => {
        if (result.data) {
          setSimulationID(result.data)
        }
      })
    }
  }

  useEffect(() => {
    let interval
    if (simulationStatus !== 'FINISHED' && simulationID) {
      interval = setInterval(async () => {
        const status = await getSimulationStatus(
          simulationID,
          'simulationScreen'
        )
        if (status === 'FINISHED') {
          clearInterval(interval)
        }
      }, 3000)
    }
    return () => {
      clearInterval(interval)
    }
  }, [simulationID])

  useEffect(() => {
    if (simulationStatus === 'FINISHED') {
      setTimeout(() => getSimulationResult(simulationID), 3000)
    }
  }, [simulationStatus])

  return (
    <>
      <View style={tw`flex flex-row m-2`}>
        <TouchableOpacity
          onPress={() => run_simulation()}
          style={tw`px-10 py-2 bg-black rounded-md`}
        >
          <Text style={tw`text-white`}>SAVE & RUN</Text>
        </TouchableOpacity>
      </View>

      {!progressStatus.bool && simulationStatus === 'IDLE' ? (
        <View style={tw`flex flex-row mx-auto my-3`}>
          <Text>Please Save and Run the Simulation Process</Text>
        </View>
      ) : null}

      {progressStatus.bool ? (
        <View style={tw`flex flex-row mx-auto`}>
          <ActivityIndicator style={tw`mx-2`} size="small" color={'gray'} />
          <Text>{progressStatus.msg}</Text>
        </View>
      ) : null}

      <View>
        {simulationStatus === 'FINISHED' ? (
          simulationData.length == 0 ? (
            <Text style={tw`mx-2 text-red-700`}>
              Something went wrong! please try again.
            </Text>
          ) : (
            <ScrollView>
              <View
                style={tw`bg-gray-50 mx-4 my-2 rounded-lg shadow py-6 px-4`}
              >
                <Text style={tw`font-bold mb-2`}>JOB ID: {simulationID}</Text>
                <Text>
                  {simulationStatus !== 'IDLE' ? simulationStatus : ''}
                </Text>
              </View>

              <ExportSimulationResultEso
                results={{
                  var: null,
                  values: [
                    ['Electricity Cost (£)', simulationData.electricity_cost],
                    ['Gas Cost (£)', simulationData.gas_cost],
                  ],
                }}
              />

              <ExportSimulationResultEso
                results={{
                  var: null,
                  values: [
                    ['Electricity Facility (KwH)', simulationData.electricity],
                    ['Gas Facility (KwH)', simulationData.natural_gas],
                  ],
                }}
              />

              <ExportSimulationResultEso
                results={{
                  var: null,
                  values: [
                    ['Not Comfortable Time (hr)', simulationData.discomfort],
                  ],
                }}
              />
            </ScrollView>
          )
        ) : simulationStatus !== 'IDLE' ? (
          <>
            <View style={tw`bg-gray-50 mx-4 my-2 rounded-lg shadow py-6 px-4`}>
              <Text style={tw`font-bold mb-2`}>JOB ID: {simulationID}</Text>
              <Text>{simulationStatus !== 'IDLE' ? simulationStatus : ''}</Text>
            </View>

            <View style={tw`flex flex-row mx-auto`}>
              <ActivityIndicator style={tw`mx-2`} size="small" color={'gray'} />
              <Text>Getting simulation results</Text>
            </View>
          </>
        ) : null}
      </View>
    </>
  )
}
