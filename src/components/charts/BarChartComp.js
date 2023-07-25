// Copyright ©,2023, Birmingham City University

import { Dimensions } from 'react-native'
import { BarChart } from 'react-native-chart-kit'

export default function BarChartComp({ barChartData }) {
  const chartConfig = {
    backgroundGradientFrom: '#FFFFFF',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#FFFFFF',
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(68, 68, 68, ${opacity})`,
    strokeWidth: 5, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  }

  return (
    <BarChart
      style={{
        margin: 2,
      }}
      data={barChartData}
      width={Dimensions.get('window').width}
      height={500}
      yAxisLabel=""
      chartConfig={chartConfig}
      verticalLabelRotation={30}
      fromZero={true}
    />
  )
}
