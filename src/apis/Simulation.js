// Copyright ©,2023, Birmingham City University

import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import * as FileSystem from 'expo-file-system'

const runSimulation = async (files, weatherUri, context) => {
  const form = new FormData()
  form.append('file', {
    uri: files.modelParams,
    type: 'application/octet-stream',
    name: '1-model-params.idf',
  })
  form.append('file', {
    uri: files.constructions,
    type: 'application/octet-stream',
    name: '2-constructions.idf',
  })
  form.append('file', {
    uri: files.zoneAndSurfaces,
    type: 'application/octet-stream',
    name: '3-zone-and-surfaces.idf',
  })
  form.append('file', {
    uri: files.people,
    type: 'application/octet-stream',
    name: '4-people-equipment-schedules.idf',
  })
  form.append('file', {
    uri: files.hvac,
    type: 'application/octet-stream',
    name: '5-hvac.idf',
  })
  form.append('file', {
    uri: files.reports,
    type: 'application/octet-stream',
    name: '6-reports.idf',
  })

  form.append('file', {
    uri: files.mainImf,
    type: 'application/octet-stream',
    name: 'shoebox-residential-main.imf',
  })

  form.append('file', {
    uri: weatherUri,
    type: 'application/octet-stream',
    name: `${context.selectedCity.weatherFile['0000']}.epw`,
  })

  form.append('model', 'shoebox-residential-main.imf')
  form.append('weather', `${context.selectedCity.weatherFile['0000']}.epw`)

  const cookie = await AsyncStorage.getItem('@authjeplus')
  const config = {
    url: 'https://api.ensims.com/jess_web/api/job',
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data',
      Cookie: cookie,
    },
    data: form,
  }

  return await axios(config)
    .then((res) => {
      if (res.data) {
        return res.data
      }
    })
    .catch((e) => console.log(e))
}

const getStatus = async (simulationId) => {
  const cookie = await AsyncStorage.getItem('@authjeplus')
  const config = {
    url: `https://api.ensims.com/jess_web/api/job/status/${simulationId}`,
    method: 'GET',
    headers: {
      Cookie: cookie,
    },
  }

  return await axios(config)
    .then((res) => {
      if (res.data) {
        return res.data
      }
    })
    .catch((e) => console.log(e))
}

const getResult = async (simulationId) => {
  const cookie = await AsyncStorage.getItem('@authjeplus')
  const config = {
    url: `https://api.ensims.com/jess_web/api/job/file/${simulationId}/eplustbl.csv`,
    method: 'GET',
    headers: {
      Cookie: cookie,
    },
  }

  console.log(
    `https://api.ensims.com/jess_web/api/job/file/${simulationId}/eplustbl.csv`
  )

  return await axios(config)
    .then((res) => {
      return res.data
    })
    .catch((e) => console.log(e.message))
}

const useFile = () => {
  const downloadFile = async (simulationID, filename, fileUriName) => {
    const fileUri = `${FileSystem.documentDirectory}${fileUriName || filename}`
    const cookie = await AsyncStorage.getItem('@authjeplus')
    return await FileSystem.downloadAsync(
      `https://api.ensims.com/jess_web/api/job/file/${simulationID}/${filename}`,
      fileUri,
      {
        headers: {
          Cookie: cookie,
        },
      }
    )
  }

  return { downloadFile }
}

const getResultEsoIndexes = async (simulationId) => {
  const cookie = await AsyncStorage.getItem('@authjeplus')
  console.log(
    `https://api.ensims.com/jess_web/api/eso/${simulationId}/eplusout.mtr`
  )
  const config = {
    url: `https://api.ensims.com/jess_web/api/eso/${simulationId}/eplusout.mtr`,
    method: 'GET',
    headers: {
      Cookie: cookie,
    },
  }
  return await axios(config)
    .then((res) => {
      if (res.data) {
        return res.data
      }
    })
    .catch((e) => console.log(e))
}

const getResultEsoVars = async (simulationId, pid, varNumbers) => {
  const cookie = await AsyncStorage.getItem('@authjeplus')

  const vars = varNumbers?.map((v, index) => {
    return `${v}${index !== varNumbers.length && `,`}`
  })
  console.log(
    `https://api.ensims.com/jess_web/api/eso/var/${simulationId}/eplusout.mtr?pid=${pid}&vars=${vars}`
  )
  const config = {
    url: `https://api.ensims.com/jess_web/api/eso/var/${simulationId}/eplusout.mtr?pid=${pid}&vars=${vars}`,
    method: 'GET',
    headers: {
      Cookie: cookie,
    },
  }

  return await axios(config)
    .then((res) => {
      if (res.data) {
        return res.data
      }
    })
    .catch((e) => console.log(e))
}

export {
  runSimulation,
  getStatus,
  getResult,
  useFile,
  getResultEsoIndexes,
  getResultEsoVars,
}
