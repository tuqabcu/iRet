// Copyright ©,2023, Birmingham City University

import { View, Text } from 'react-native'

export default function CardView({ results }) {
  return results.map((data) => (
    <>
      <Text>{data.title}</Text>
      {data.values.map((e) => (
        <View>
          <Text>{e.label}</Text>
          <Text>{e.value}</Text>
        </View>
      ))}
    </>
  ))
}
