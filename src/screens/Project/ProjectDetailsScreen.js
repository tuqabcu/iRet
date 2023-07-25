// Copyright ©,2023, Birmingham City University

//library imports
import { useState, useContext } from 'react'
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  TouchableHighlight,
  SafeAreaView,
  Dimensions,
} from 'react-native'
import tw from 'twrnc'
import { WithLocalSvg } from 'react-native-svg'
import { ZoneContext } from '../../contexts/ZoneContext'

//component imports
import BottomNavbar from '../../components/navigation/BottomNavbar'
import TopModal from '../../components/modals/TopModal'
import Threed from '../../components/Threed/index'
import FloorView from '../../components/Twod/FloorView'
import CompassComp from '../../components/CompassComp'
// import FloorToggle from '../../components/modals/FloorToggle'

export default function ProjectDetailsScreen({ navigation }) {
  const context = useContext(ZoneContext)

  const PlusIcon = require('../../../assets/icons/PlusIcon.svg')
  const ThreeDIcon = require('../../../assets/icons/ThreeDIcon.svg')
  const CompassIcon = require('../../../assets/icons/CompassIcon.svg')
  const ExportIcon = require('../../../assets/icons/ExportIcon.svg')
  const CancelIcon = require('../../../assets/icons/CancelIcon.svg')
  const FloorsIcon = require('../../../assets/icons/FloorsIcon.svg')
  const CogIcon = require('../../../assets/icons/CogIcon.svg')

  const colors = [
    'blue',
    'green',
    'yellow',
    'pink',
    'gray',
    'orange',
    'purple',
    'indigo',
  ]
  const material_types =
    context.activeFloorIndex === 0
      ? [
          {
            name: 'Room',
            value: 'room',
          },
        ]
      : [
          {
            name: 'Room',
            value: 'room',
          },
          {
            name: 'Roof',
            value: 'roof',
          },
          // {
          //   name: 'Grey Zone',
          //   value: 'grey_zone',
          // },
        ]

  const [isModalOpen, setisModalOpen] = useState(false)
  const [isCompassModalOpen, setisCompassModalOpen] = useState(false)
  const [show3Delement, setshow3Delement] = useState(false)
  const [showFloorsStack, setshowFloorsStack] = useState(false)

  const [itemObj, setitemObj] = useState({
    id: 1,
    type: 'room',
    name: '',
    height: 0,
    width: 0,
    depth: 0,
    heightMeter: 0,
    widthMeter: 0,
    depthMeter: 0,
    color: '',
    x: 100,
    y: 100,
    windows: [],
    doors: [],
    dx: 0,
    dy: 0,
    overlappedWith: null,
    floorConstruction: {
      name: 'Project ground floor',
      materials: [
        {
          shared: true,
          _id: '6422eb59966ecd3900d53c34',
          type: 'Mas',
          name: 'Urea Formaldehyde Foam_.1327',
          thickness: '.1327',
          conductivity: 0.04,
          density: 10,
          specificHeat: 1400,
          roughness: 'Rough',
          thermalAbsorptance: 0.9,
          solarAbsorptance: 0.6,
          visibleAbsorptance: 0.6,
          createdOn: '2023-03-28T13:27:53.188Z',
        },
        {
          shared: true,
          _id: '6422ec87966ecd3900d53c35',
          type: 'Mas',
          name: 'Cast Concrete_.1',
          thickness: '.1',
          conductivity: 1.13,
          density: 2000,
          specificHeat: 1000,
          roughness: 'Rough',
          thermalAbsorptance: 0.9,
          solarAbsorptance: 0.6,
          visibleAbsorptance: 0.6,
          createdOn: '2023-03-28T13:32:55.201Z',
        },
        {
          shared: true,
          _id: '6422ecf5966ecd3900d53c36',
          type: 'Mas',
          name: 'Floor/Roof Screed_.O7',
          thickness: '.07',
          conductivity: 0.41,
          density: 1200,
          specificHeat: 840,
          roughness: 'Rough',
          thermalAbsorptance: 0.9,
          solarAbsorptance: 0.73,
          visibleAbsorptance: 0.73,
          createdOn: '2023-03-28T13:34:45.135Z',
        },
        {
          shared: true,
          _id: '6422ed22966ecd3900d53c37',
          type: 'Mas',
          name: 'Timber Flooring_.O3',
          thickness: '.03',
          conductivity: 0.14,
          density: 650,
          specificHeat: 1200,
          roughness: 'Rough',
          thermalAbsorptance: 0.9,
          solarAbsorptance: 0.73,
          visibleAbsorptance: 0.73,
          createdOn: '2023-03-28T13:35:30.003Z',
        },
      ],
    },
    roofConstruction: {
      name: 'Project flat roof',
      materials: [
        {
          shared: true,
          _id: '64232ceceafbda3ab33ac48e',
          type: 'Mas',
          name: 'Asphalt 1_.O1',
          thickness: '.01',
          conductivity: 0.7,
          density: 2100,
          specificHeat: 1000,
          roughness: 'Rough',
          thermalAbsorptance: 0.9,
          solarAbsorptance: 0.85,
          visibleAbsorptance: 0.9,
          createdOn: '2023-03-28T18:07:40.024Z',
        },
        {
          shared: true,
          _id: '64232d1aeafbda3ab33ac48f',
          type: 'Mas',
          name: 'MW Glass Wool (rolls)_.1',
          thickness: '.1',
          conductivity: 0.04,
          density: 12,
          specificHeat: 840,
          roughness: 'Rough',
          thermalAbsorptance: 0.9,
          solarAbsorptance: 0.6,
          visibleAbsorptance: 0.6,
          createdOn: '2023-03-28T18:08:26.649Z',
        },
        {
          shared: true,
          _id: '64232dc6eafbda3ab33ac491',
          type: 'NoMas',
          name: '3_RVAL_3',
          thermalResistance: '.18',
          roughness: 'Rough',
          thermalAbsorptance: 0.9,
          solarAbsorptance: 0.7,
          visibleAbsorptance: 0.7,
          createdOn: '2023-03-28T18:11:18.591Z',
        },
        {
          shared: true,
          _id: '64232d4deafbda3ab33ac490',
          type: 'Mas',
          name: 'Plasterboard_.O13',
          thickness: '.13',
          conductivity: 0.25,
          density: 2800,
          specificHeat: 896,
          roughness: 'Rough',
          thermalAbsorptance: 0.9,
          solarAbsorptance: 0.5,
          visibleAbsorptance: 0.5,
          createdOn: '2023-03-28T18:09:17.437Z',
        },
      ],
    },
    wall1Construction: {
      name: 'Brick/block wall (insulated to 1985 regs)',
      materials: [
        {
          shared: true,
          _id: '64232b2ceafbda3ab33ac48a',
          type: 'Mas',
          name: 'Brickwork Outer_.1',
          thickness: '.1',
          conductivity: 0.84,
          density: 1700,
          specificHeat: 800,
          roughness: 'Rough',
          thermalAbsorptance: 0.9,
          solarAbsorptance: 0.7,
          visibleAbsorptance: 0.7,
          createdOn: '2023-03-28T18:00:12.654Z',
        },
        {
          shared: true,
          _id: '64232b75eafbda3ab33ac48b',
          type: 'Mas',
          name: 'MW Stone Wool (standard board)_.O5',
          thickness: '.05',
          conductivity: 0.038,
          density: 40,
          specificHeat: 840,
          roughness: 'Rough',
          thermalAbsorptance: 0.9,
          solarAbsorptance: 0.6,
          visibleAbsorptance: 0.6,
          createdOn: '2023-03-28T18:01:25.496Z',
        },
        {
          shared: true,
          _id: '64232bceeafbda3ab33ac48c',
          type: 'Mas',
          name: 'Concrete Block (Medium)_.1',
          thickness: '.1',
          conductivity: 0.51,
          density: 1400,
          specificHeat: 1000,
          roughness: 'Rough',
          thermalAbsorptance: 0.9,
          solarAbsorptance: 0.6,
          visibleAbsorptance: 0.6,
          createdOn: '2023-03-28T18:02:54.529Z',
        },
        {
          shared: true,
          _id: '64232c24eafbda3ab33ac48d',
          type: 'Mas',
          name: 'Gypsum Plastering_.O15',
          thickness: '.015',
          conductivity: 0.4,
          density: 1000,
          specificHeat: 1000,
          roughness: 'Rough',
          thermalAbsorptance: 0.9,
          solarAbsorptance: 0.5,
          visibleAbsorptance: 0.5,
          createdOn: '2023-03-28T18:04:20.851Z',
        },
      ],
    },
    wall2Construction: {
      name: 'ExtWall[]',
      materials: [],
    },
    wall3Construction: {
      name: 'Brick/block wall (insulated to 1985 regs)',
      materials: [
        {
          shared: true,
          _id: '64232b2ceafbda3ab33ac48a',
          type: 'Mas',
          name: 'Brickwork Outer_.1',
          thickness: '.1',
          conductivity: 0.84,
          density: 1700,
          specificHeat: 800,
          roughness: 'Rough',
          thermalAbsorptance: 0.9,
          solarAbsorptance: 0.7,
          visibleAbsorptance: 0.7,
          createdOn: '2023-03-28T18:00:12.654Z',
        },
        {
          shared: true,
          _id: '64232b75eafbda3ab33ac48b',
          type: 'Mas',
          name: 'MW Stone Wool (standard board)_.O5',
          thickness: '.05',
          conductivity: 0.038,
          density: 40,
          specificHeat: 840,
          roughness: 'Rough',
          thermalAbsorptance: 0.9,
          solarAbsorptance: 0.6,
          visibleAbsorptance: 0.6,
          createdOn: '2023-03-28T18:01:25.496Z',
        },
        {
          shared: true,
          _id: '64232bceeafbda3ab33ac48c',
          type: 'Mas',
          name: 'Concrete Block (Medium)_.1',
          thickness: '.1',
          conductivity: 0.51,
          density: 1400,
          specificHeat: 1000,
          roughness: 'Rough',
          thermalAbsorptance: 0.9,
          solarAbsorptance: 0.6,
          visibleAbsorptance: 0.6,
          createdOn: '2023-03-28T18:02:54.529Z',
        },
        {
          shared: true,
          _id: '64232c24eafbda3ab33ac48d',
          type: 'Mas',
          name: 'Gypsum Plastering_.O15',
          thickness: '.015',
          conductivity: 0.4,
          density: 1000,
          specificHeat: 1000,
          roughness: 'Rough',
          thermalAbsorptance: 0.9,
          solarAbsorptance: 0.5,
          visibleAbsorptance: 0.5,
          createdOn: '2023-03-28T18:04:20.851Z',
        },
      ],
    },
    wall4Construction: {
      name: 'Brick/block wall (insulated to 1985 regs)',
      materials: [
        {
          shared: true,
          _id: '64232b2ceafbda3ab33ac48a',
          type: 'Mas',
          name: 'Brickwork Outer_.1',
          thickness: '.1',
          conductivity: 0.84,
          density: 1700,
          specificHeat: 800,
          roughness: 'Rough',
          thermalAbsorptance: 0.9,
          solarAbsorptance: 0.7,
          visibleAbsorptance: 0.7,
          createdOn: '2023-03-28T18:00:12.654Z',
        },
        {
          shared: true,
          _id: '64232b75eafbda3ab33ac48b',
          type: 'Mas',
          name: 'MW Stone Wool (standard board)_.O5',
          thickness: '.05',
          conductivity: 0.038,
          density: 40,
          specificHeat: 840,
          roughness: 'Rough',
          thermalAbsorptance: 0.9,
          solarAbsorptance: 0.6,
          visibleAbsorptance: 0.6,
          createdOn: '2023-03-28T18:01:25.496Z',
        },
        {
          shared: true,
          _id: '64232bceeafbda3ab33ac48c',
          type: 'Mas',
          name: 'Concrete Block (Medium)_.1',
          thickness: '.1',
          conductivity: 0.51,
          density: 1400,
          specificHeat: 1000,
          roughness: 'Rough',
          thermalAbsorptance: 0.9,
          solarAbsorptance: 0.6,
          visibleAbsorptance: 0.6,
          createdOn: '2023-03-28T18:02:54.529Z',
        },
        {
          shared: true,
          _id: '64232c24eafbda3ab33ac48d',
          type: 'Mas',
          name: 'Gypsum Plastering_.O15',
          thickness: '.015',
          conductivity: 0.4,
          density: 1000,
          specificHeat: 1000,
          roughness: 'Rough',
          thermalAbsorptance: 0.9,
          solarAbsorptance: 0.5,
          visibleAbsorptance: 0.5,
          createdOn: '2023-03-28T18:04:20.851Z',
        },
      ],
    },
  })

  // function that will set the items created and reset the values to default
  function submit_item() {
    let all_floors = context.floors
    itemObj.x = Dimensions.get('window').width / 2 - itemObj.width
    itemObj.y = Dimensions.get('window').height / 2 - itemObj.height

    all_floors[context.activeFloorIndex].rooms.push({
      ...itemObj,
      id: all_floors[context.activeFloorIndex].rooms.length + 10,
    })
    context.setfloors(all_floors)

    setitemObj({
      id: 1,
      type: 'room',
      name: '',
      height: 0,
      width: 0,
      depth: 0,
      heightMeter: 0,
      widthMeter: 0,
      depthMeter: 0,
      x: 100,
      y: 100,
      color: '',
      windows: [],
      doors: [],
      dx: 0,
      dy: 0,
      overlappedWith: null,
      floorConstruction: {
        name: 'Project ground floor',
        materials: [
          {
            shared: true,
            _id: '6422eb59966ecd3900d53c34',
            type: 'Mas',
            name: 'Urea Formaldehyde Foam_.1327',
            thickness: '.1327',
            conductivity: 0.04,
            density: 10,
            specificHeat: 1400,
            roughness: 'Rough',
            thermalAbsorptance: 0.9,
            solarAbsorptance: 0.6,
            visibleAbsorptance: 0.6,
            createdOn: '2023-03-28T13:27:53.188Z',
          },
          {
            shared: true,
            _id: '6422ec87966ecd3900d53c35',
            type: 'Mas',
            name: 'Cast Concrete_.1',
            thickness: '.1',
            conductivity: 1.13,
            density: 2000,
            specificHeat: 1000,
            roughness: 'Rough',
            thermalAbsorptance: 0.9,
            solarAbsorptance: 0.6,
            visibleAbsorptance: 0.6,
            createdOn: '2023-03-28T13:32:55.201Z',
          },
          {
            shared: true,
            _id: '6422ecf5966ecd3900d53c36',
            type: 'Mas',
            name: 'Floor/Roof Screed_.O7',
            thickness: '.07',
            conductivity: 0.41,
            density: 1200,
            specificHeat: 840,
            roughness: 'Rough',
            thermalAbsorptance: 0.9,
            solarAbsorptance: 0.73,
            visibleAbsorptance: 0.73,
            createdOn: '2023-03-28T13:34:45.135Z',
          },
          {
            shared: true,
            _id: '6422ed22966ecd3900d53c37',
            type: 'Mas',
            name: 'Timber Flooring_.O3',
            thickness: '.03',
            conductivity: 0.14,
            density: 650,
            specificHeat: 1200,
            roughness: 'Rough',
            thermalAbsorptance: 0.9,
            solarAbsorptance: 0.73,
            visibleAbsorptance: 0.73,
            createdOn: '2023-03-28T13:35:30.003Z',
          },
        ],
      },
      roofConstruction: {
        name: 'Project flat roof',
        materials: [
          {
            shared: true,
            _id: '64232ceceafbda3ab33ac48e',
            type: 'Mas',
            name: 'Asphalt 1_.O1',
            thickness: '.01',
            conductivity: 0.7,
            density: 2100,
            specificHeat: 1000,
            roughness: 'Rough',
            thermalAbsorptance: 0.9,
            solarAbsorptance: 0.85,
            visibleAbsorptance: 0.9,
            createdOn: '2023-03-28T18:07:40.024Z',
          },
          {
            shared: true,
            _id: '64232d1aeafbda3ab33ac48f',
            type: 'Mas',
            name: 'MW Glass Wool (rolls)_.1',
            thickness: '.1',
            conductivity: 0.04,
            density: 12,
            specificHeat: 840,
            roughness: 'Rough',
            thermalAbsorptance: 0.9,
            solarAbsorptance: 0.6,
            visibleAbsorptance: 0.6,
            createdOn: '2023-03-28T18:08:26.649Z',
          },
          {
            shared: true,
            _id: '64232dc6eafbda3ab33ac491',
            type: 'NoMas',
            name: '3_RVAL_3',
            thermalResistance: '.18',
            roughness: 'Rough',
            thermalAbsorptance: 0.9,
            solarAbsorptance: 0.7,
            visibleAbsorptance: 0.7,
            createdOn: '2023-03-28T18:11:18.591Z',
          },
          {
            shared: true,
            _id: '64232d4deafbda3ab33ac490',
            type: 'Mas',
            name: 'Plasterboard_.O13',
            thickness: '.13',
            conductivity: 0.25,
            density: 2800,
            specificHeat: 896,
            roughness: 'Rough',
            thermalAbsorptance: 0.9,
            solarAbsorptance: 0.5,
            visibleAbsorptance: 0.5,
            createdOn: '2023-03-28T18:09:17.437Z',
          },
        ],
      },
      wall1Construction: {
        name: 'Brick/block wall (insulated to 1985 regs)',
        materials: [
          {
            shared: true,
            _id: '64232b2ceafbda3ab33ac48a',
            type: 'Mas',
            name: 'Brickwork Outer_.1',
            thickness: '.1',
            conductivity: 0.84,
            density: 1700,
            specificHeat: 800,
            roughness: 'Rough',
            thermalAbsorptance: 0.9,
            solarAbsorptance: 0.7,
            visibleAbsorptance: 0.7,
            createdOn: '2023-03-28T18:00:12.654Z',
          },
          {
            shared: true,
            _id: '64232b75eafbda3ab33ac48b',
            type: 'Mas',
            name: 'MW Stone Wool (standard board)_.O5',
            thickness: '.05',
            conductivity: 0.038,
            density: 40,
            specificHeat: 840,
            roughness: 'Rough',
            thermalAbsorptance: 0.9,
            solarAbsorptance: 0.6,
            visibleAbsorptance: 0.6,
            createdOn: '2023-03-28T18:01:25.496Z',
          },
          {
            shared: true,
            _id: '64232bceeafbda3ab33ac48c',
            type: 'Mas',
            name: 'Concrete Block (Medium)_.1',
            thickness: '.1',
            conductivity: 0.51,
            density: 1400,
            specificHeat: 1000,
            roughness: 'Rough',
            thermalAbsorptance: 0.9,
            solarAbsorptance: 0.6,
            visibleAbsorptance: 0.6,
            createdOn: '2023-03-28T18:02:54.529Z',
          },
          {
            shared: true,
            _id: '64232c24eafbda3ab33ac48d',
            type: 'Mas',
            name: 'Gypsum Plastering_.O15',
            thickness: '.015',
            conductivity: 0.4,
            density: 1000,
            specificHeat: 1000,
            roughness: 'Rough',
            thermalAbsorptance: 0.9,
            solarAbsorptance: 0.5,
            visibleAbsorptance: 0.5,
            createdOn: '2023-03-28T18:04:20.851Z',
          },
        ],
      },
      wall2Construction: {
        name: 'ExtWall[]',
        materials: [],
      },
      wall3Construction: {
        name: 'Brick/block wall (insulated to 1985 regs)',
        materials: [
          {
            shared: true,
            _id: '64232b2ceafbda3ab33ac48a',
            type: 'Mas',
            name: 'Brickwork Outer_.1',
            thickness: '.1',
            conductivity: 0.84,
            density: 1700,
            specificHeat: 800,
            roughness: 'Rough',
            thermalAbsorptance: 0.9,
            solarAbsorptance: 0.7,
            visibleAbsorptance: 0.7,
            createdOn: '2023-03-28T18:00:12.654Z',
          },
          {
            shared: true,
            _id: '64232b75eafbda3ab33ac48b',
            type: 'Mas',
            name: 'MW Stone Wool (standard board)_.O5',
            thickness: '.05',
            conductivity: 0.038,
            density: 40,
            specificHeat: 840,
            roughness: 'Rough',
            thermalAbsorptance: 0.9,
            solarAbsorptance: 0.6,
            visibleAbsorptance: 0.6,
            createdOn: '2023-03-28T18:01:25.496Z',
          },
          {
            shared: true,
            _id: '64232bceeafbda3ab33ac48c',
            type: 'Mas',
            name: 'Concrete Block (Medium)_.1',
            thickness: '.1',
            conductivity: 0.51,
            density: 1400,
            specificHeat: 1000,
            roughness: 'Rough',
            thermalAbsorptance: 0.9,
            solarAbsorptance: 0.6,
            visibleAbsorptance: 0.6,
            createdOn: '2023-03-28T18:02:54.529Z',
          },
          {
            shared: true,
            _id: '64232c24eafbda3ab33ac48d',
            type: 'Mas',
            name: 'Gypsum Plastering_.O15',
            thickness: '.015',
            conductivity: 0.4,
            density: 1000,
            specificHeat: 1000,
            roughness: 'Rough',
            thermalAbsorptance: 0.9,
            solarAbsorptance: 0.5,
            visibleAbsorptance: 0.5,
            createdOn: '2023-03-28T18:04:20.851Z',
          },
        ],
      },
      wall4Construction: {
        name: 'Brick/block wall (insulated to 1985 regs)',
        materials: [
          {
            shared: true,
            _id: '64232b2ceafbda3ab33ac48a',
            type: 'Mas',
            name: 'Brickwork Outer_.1',
            thickness: '.1',
            conductivity: 0.84,
            density: 1700,
            specificHeat: 800,
            roughness: 'Rough',
            thermalAbsorptance: 0.9,
            solarAbsorptance: 0.7,
            visibleAbsorptance: 0.7,
            createdOn: '2023-03-28T18:00:12.654Z',
          },
          {
            shared: true,
            _id: '64232b75eafbda3ab33ac48b',
            type: 'Mas',
            name: 'MW Stone Wool (standard board)_.O5',
            thickness: '.05',
            conductivity: 0.038,
            density: 40,
            specificHeat: 840,
            roughness: 'Rough',
            thermalAbsorptance: 0.9,
            solarAbsorptance: 0.6,
            visibleAbsorptance: 0.6,
            createdOn: '2023-03-28T18:01:25.496Z',
          },
          {
            shared: true,
            _id: '64232bceeafbda3ab33ac48c',
            type: 'Mas',
            name: 'Concrete Block (Medium)_.1',
            thickness: '.1',
            conductivity: 0.51,
            density: 1400,
            specificHeat: 1000,
            roughness: 'Rough',
            thermalAbsorptance: 0.9,
            solarAbsorptance: 0.6,
            visibleAbsorptance: 0.6,
            createdOn: '2023-03-28T18:02:54.529Z',
          },
          {
            shared: true,
            _id: '64232c24eafbda3ab33ac48d',
            type: 'Mas',
            name: 'Gypsum Plastering_.O15',
            thickness: '.015',
            conductivity: 0.4,
            density: 1000,
            specificHeat: 1000,
            roughness: 'Rough',
            thermalAbsorptance: 0.9,
            solarAbsorptance: 0.5,
            visibleAbsorptance: 0.5,
            createdOn: '2023-03-28T18:04:20.851Z',
          },
        ],
      },
    })
    setisModalOpen(!isModalOpen)
  }

  return (
    <View style={tw`relative flex-1 flex-col justify-between`}>
      {show3Delement ? (
        <>
          <View style={tw`flex relative h-[90%]`}>
            <Threed />
          </View>

          <TouchableHighlight
            underlayColor="gray"
            onPress={() => {
              setshow3Delement(!show3Delement)
            }}
          >
            <SafeAreaView
              style={tw`absolute bottom-9 left-2 flex flex-row bg-black justify-between rounded-lg h-9 w-9 shadow`}
            >
              <WithLocalSvg
                asset={ThreeDIcon}
                onPress={() => {
                  setshow3Delement(!show3Delement)
                }}
                style={tw`m-auto text-white h-6 w-6`}
              />
            </SafeAreaView>
          </TouchableHighlight>
        </>
      ) : (
        <>
          <View style={tw`flex relative h-[90%]`}>
            <View
              style={tw`absolute top-12 inset-x-0 flex flex-row justify-between mx-4`}
            >
              <TouchableHighlight
                underlayColor="gray"
                onPress={() => {
                  setisCompassModalOpen(true)
                }}
                style={tw`my-auto`}
              >
                <SafeAreaView
                  style={tw`flex flex-row bg-black justify-between rounded-full h-12 w-12 shadow`}
                >
                  <WithLocalSvg
                    asset={CompassIcon}
                    onPress={() => {
                      setisCompassModalOpen(true)
                    }}
                    style={tw`m-auto h-8 w-8`}
                  />
                </SafeAreaView>
              </TouchableHighlight>

              <Text style={tw`text-black my-auto text-center`}>
                Current Floor{' '}
                <Text style={tw`font-bold`}>
                  {context.activeFloorIndex + 1}
                </Text>
              </Text>

              <View style={tw`flex flex-row `}>
                <TouchableHighlight
                  underlayColor="gray"
                  onPress={() => {
                    navigation.navigate('SIMULATION_SCREEN')
                  }}
                  style={tw`my-auto mx-2`}
                >
                  <SafeAreaView
                    style={tw`flex flex-row bg-black justify-between rounded-md h-8 w-8 shadow`}
                  >
                    <WithLocalSvg
                      asset={ExportIcon}
                      onPress={() => {
                        navigation.navigate('SIMULATION_SCREEN')
                      }}
                      style={tw`m-auto h-5 w-5 text-white`}
                    />
                  </SafeAreaView>
                </TouchableHighlight>
                <TouchableHighlight
                  underlayColor="gray"
                  onPress={() => {
                    navigation.navigate('GLOBAL_PARAMETERS_SCREEN')
                  }}
                  style={tw`my-auto`}
                >
                  <SafeAreaView
                    style={tw`flex flex-row bg-black justify-between rounded-md h-8 w-8 shadow`}
                  >
                    <WithLocalSvg
                      asset={CogIcon}
                      onPress={() => {
                        navigation.navigate('GLOBAL_PARAMETERS_SCREEN')
                      }}
                      style={tw`m-auto h-5 w-5 text-white`}
                    />
                  </SafeAreaView>
                </TouchableHighlight>
              </View>
            </View>

            <FloorView />
          </View>

          <TouchableHighlight
            underlayColor="gray"
            onPress={() => {
              setisModalOpen(!isModalOpen)
            }}
          >
            <SafeAreaView
              style={tw`absolute bottom-3 right-2 flex flex-row bg-green-700 justify-between rounded-full h-14 w-14 shadow`}
            >
              <WithLocalSvg
                asset={PlusIcon}
                onPress={() => {
                  setisModalOpen(!isModalOpen)
                }}
                style={tw`m-auto text-white h-10 w-10`}
              />
            </SafeAreaView>
          </TouchableHighlight>

          {showFloorsStack ? (
            <View style={tw`absolute inset-y-0 bottom-10 left-2 my-34`}>
              <View style={tw`flex flex-col-reverse mt-auto`}>
                {context.floors.map((floor, idx) => {
                  return (
                    <View
                      key={idx}
                      style={tw`${
                        context.activeFloorIndex + 1 === idx + 1
                          ? 'bg-black'
                          : 'bg-white border-2'
                      } h-9 w-9 my-1 flex justify-center rounded-lg`}
                    >
                      {context.activeFloorIndex + 1 !== idx + 1 ? (
                        <TouchableOpacity
                          onPress={() => {
                            // let my_floor = context.floors
                            // my_floor = my_floor.filter(
                            //   (floorItem) => floorItem.floorId != floor.floorId
                            // )
                            // context.setfloors(my_floor)
                            let my_floor = context.floors
                            my_floor = my_floor.filter(
                              (floorItem) => floorItem.floorId != floor.floorId
                            )
                            context.switchFloor(0)
                            context.setfloors(my_floor)
                          }}
                        >
                          <SafeAreaView
                            style={tw`absolute left-6 -top-3 rounded-full bg-gray-500 `}
                          >
                            <WithLocalSvg
                              onPress={() => {
                                let my_floor = context.floors
                                my_floor = my_floor.filter(
                                  (floorItem) =>
                                    floorItem.floorId != floor.floorId
                                )
                                context.switchFloor(0)
                                context.setfloors(my_floor)
                                // let my_floor = context.floors
                                // my_floor = my_floor.filter(
                                //   (floorItem) =>
                                //     floorItem.floorId != floor.floorId
                                // )
                                // context.setfloors(my_floor)
                              }}
                              asset={CancelIcon}
                              style={tw`m-auto font-medium text-white h-5 w-5`}
                            />
                          </SafeAreaView>
                        </TouchableOpacity>
                      ) : null}

                      <TouchableOpacity
                        onPress={() => {
                          context.switchFloor(idx)
                        }}
                      >
                        <Text
                          style={tw`${
                            context.activeFloorIndex + 1 === idx + 1
                              ? 'text-white'
                              : 'text-black'
                          } m-auto`}
                        >
                          F{idx + 1}
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )
                })}
                <TouchableOpacity
                  onPress={() => {
                    context.setfloors([
                      ...context.floors,
                      {
                        floorId: context.floors.length + 1,
                        floorLevel: context.floors.length + 1,
                        floorStatus: false,
                        rooms: [],
                      },
                    ])
                  }}
                >
                  <SafeAreaView
                    style={tw`absolute bottom-1 flex flex-row border-2 justify-between rounded-lg h-9 w-9 bg-white shadow`}
                  >
                    <WithLocalSvg
                      onPress={() => {
                        context.setfloors([
                          ...context.floors,
                          {
                            floorId: context.floors.length + 1,
                            floorLevel: context.floors.length + 1,
                            floorStatus: false,
                            rooms: [],
                          },
                        ])
                      }}
                      asset={PlusIcon}
                      style={tw`m-auto font-medium text-black h-6 w-6`}
                    />
                  </SafeAreaView>
                </TouchableOpacity>
              </View>
            </View>
          ) : null}

          <TouchableHighlight
            underlayColor="gray"
            onPress={() => {
              setshowFloorsStack(!showFloorsStack)
            }}
          >
            <SafeAreaView
              style={tw`absolute bottom-14 left-2 flex flex-row bg-black justify-between rounded-lg h-9 w-9  shadow`}
            >
              <WithLocalSvg
                onPress={() => {
                  setshowFloorsStack(!showFloorsStack)
                }}
                asset={FloorsIcon}
                style={tw`m-auto text-white h-6 w-6`}
              />
            </SafeAreaView>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="gray"
            onPress={() => {
              setshow3Delement(!show3Delement)
            }}
          >
            <SafeAreaView
              style={tw`absolute bottom-3 left-2 flex flex-row bg-black justify-between rounded-lg h-9 w-9  shadow`}
            >
              <WithLocalSvg
                asset={ThreeDIcon}
                onPress={() => {
                  setshow3Delement(!show3Delement)
                }}
                style={tw`m-auto text-white h-6 w-6`}
              />
            </SafeAreaView>
          </TouchableHighlight>

          {/* ======= CREATE ROOM MODAL ======= */}
          <TopModal isModalOpen={isModalOpen} setisModalOpen={setisModalOpen}>
            <View style={tw`bg-white flex flex-row`}>
              {material_types.map((item, idx) => {
                return (
                  <TouchableOpacity
                    key={idx}
                    style={tw`my-3 h-8 w-28 mx-auto rounded-full shadow border ${
                      item.value == itemObj.type ? 'bg-black' : 'bg-white'
                    }`}
                    onPress={() => {
                      setitemObj({ ...itemObj, type: item.value })
                    }}
                  >
                    <Text
                      style={tw`${
                        item.value == itemObj.type ? 'text-white' : ''
                      } text-center my-auto`}
                    >
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )
              })}
            </View>

            <TextInput
              style={tw`h-12 w-auto my-2 p-3 rounded-full border border-gray-100 bg-gray-50`}
              placeholder="Name"
              placeholderTextColor="#acacac"
              onChangeText={(e) => setitemObj({ ...itemObj, name: e })}
            />

            <View style={tw`flex flex-row justify-center my-2`}>
              <TextInput
                style={tw`h-12 grow p-3 rounded-full border border-gray-100 bg-gray-50`}
                placeholderTextColor="#acacac"
                placeholder="Width"
                keyboardType="numeric"
                onChangeText={(e) =>
                  setitemObj({
                    ...itemObj,
                    width: parseInt(e) * parseInt(context.roomScale),
                    widthMeter: parseInt(e),
                  })
                }
              />
              <TextInput
                style={tw`h-12 grow mx-2	p-3 rounded-full border border-gray-100 bg-gray-50`}
                placeholderTextColor="#acacac"
                placeholder="Height"
                keyboardType="numeric"
                onChangeText={(e) =>
                  setitemObj({
                    ...itemObj,
                    height: parseInt(e) * parseInt(context.roomScale),
                    heightMeter: parseInt(e),
                  })
                }
              />
              <TextInput
                style={tw`h-12 grow p-3 rounded-full border border-gray-100 bg-gray-50`}
                placeholderTextColor="#acacac"
                placeholder="Length"
                keyboardType="numeric"
                onChangeText={(e) =>
                  setitemObj({
                    ...itemObj,
                    depth: parseInt(e) * parseInt(context.roomScale),
                    depthMeter: parseInt(e),
                  })
                }
              />
            </View>

            <View
              style={tw`flex flex-row flex-wrap mt-2 border border-gray-300 py-2 rounded-lg`}
            >
              {colors.map((color, idx) => {
                return (
                  <TouchableOpacity key={idx} style={tw`w-1/4`}>
                    <TouchableOpacity
                      onPress={() => {
                        setitemObj({ ...itemObj, color: color })
                      }}
                      style={tw`bg-${color}-700 ${
                        color == itemObj.color ? 'border-2' : ''
                      } my-3 h-7 w-7 rounded-full mx-auto`}
                    />
                  </TouchableOpacity>
                )
              })}
            </View>

            <TouchableOpacity
              style={tw`mt-7 py-3 rounded-full bg-black`}
              onPress={() => submit_item()}
            >
              <Text style={tw`text-white text-center font-bold`}>Create</Text>
            </TouchableOpacity>
          </TopModal>

          {/* ======= COMPASS MODAL ======= */}
          <TopModal
            isModalOpen={isCompassModalOpen}
            setisModalOpen={setisCompassModalOpen}
          >
            <CompassComp setisCompassModalOpen={setisCompassModalOpen} />
          </TopModal>

          <BottomNavbar />
        </>
      )}
    </View>
  )
}
