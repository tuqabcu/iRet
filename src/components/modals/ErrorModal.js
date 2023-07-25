// Copyright ©,2023, Birmingham City University

//library imports
import { View, SafeAreaView, Modal, Text } from 'react-native'
import tw from 'twrnc'
import { WithLocalSvg } from 'react-native-svg'

export default function ErrorModal({ error }) {
  const ErrorIcon = require('../../../assets/icons/ErrorIcon.svg')

  return (
    <Modal animationType="slide" transparent={true} visible={error['bool']}>
      <View style={tw`flex-1 justify-end`}>
        <SafeAreaView style={tw`bg-white border rounded-lg my-16 mx-5`}>
          <View style={tw`flex flex-row px-2 py-3`}>
            <WithLocalSvg asset={ErrorIcon} style={tw`text-red-700 h-7 w-7`} />
            <Text style={tw`my-auto mx-2`}>{error['msg']}</Text>
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  )
}
