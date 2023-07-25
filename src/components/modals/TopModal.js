// Copyright ©,2023, Birmingham City University

//library imports
import { View, SafeAreaView, Modal } from 'react-native'
import { WithLocalSvg } from 'react-native-svg'
import tw from 'twrnc'

export default function TopModal(props) {
  const CancelIcon = require('../../../assets/icons/CancelIcon.svg')

  return (
    <Modal animationType="slide" transparent={true} visible={props.isModalOpen}>
      <View style={tw`flex-1 justify-start bg-black bg-opacity-75`}>
        <SafeAreaView style={tw`bg-white rounded-b-lg`}>
          <View style={tw`px-5 pb-5`}>
            <WithLocalSvg
              asset={CancelIcon}
              style={tw`text-black h-7 w-7 ml-auto`}
              onPress={() => {
                props.setisModalOpen(!props.isModalOpen)
              }}
            />
            {props.children}
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  )
}
