// Copyright ©,2023, Birmingham City University
import { Text, View, TouchableOpacity, Alert } from 'react-native'
import tw from 'twrnc'
import moment from 'moment'
import { WithLocalSvg } from 'react-native-svg'

export default function DetailsCard({ data, isDelete, delete_func }) {
  const DeleteIcon = require('../../../assets/icons/DeleteIcon.svg')

  const createDeleteAlert = () =>
    Alert.alert('Are you sure you want to delete this project?', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          delete_func()
        },
      },
    ])

  return (
    <View
      style={tw`flex flex-row bg-gray-50 mx-4 my-2 rounded-lg shadow py-6 px-4`}
    >
      <View style={tw`grow`}>
        <Text style={tw`font-bold mb-2`}>{data.name}</Text>
        <Text>
          Creation Date: {moment(data.createdOn).format('DD/MM/YYYY')}
        </Text>
      </View>
      {isDelete == true ? (
        <TouchableOpacity onPress={createDeleteAlert}>
          <WithLocalSvg
            asset={DeleteIcon}
            style={tw`my-auto text-red-500 h-7 w-7`}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  )
}
