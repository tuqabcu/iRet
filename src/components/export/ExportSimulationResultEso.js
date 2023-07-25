// Copyright ©,2023, Birmingham City University

import { View, Text } from 'react-native'
import BarChartComp from '../charts/BarChartComp'
import tw from 'twrnc'

export const ExportSimulationResultEso = (props) => {
  let label = []
  let data = []
  if (props.results) {
    label = props.results?.values?.map((v) => v[0]).reverse()
    data = props.results?.values?.map((v) => v[1]).reverse()
  }

  return (
    <View style={tw`mb-28 ml-1`}>
      {props.results?.var && <Text>{props.results.var}</Text>}

      <BarChartComp
        barChartData={{
          labels: label,
          datasets: [
            {
              data: data,
            },
          ],
        }}
      />
    </View>
  )
}
