// Copyright ©,2023, Birmingham City University

import React, { useState, useContext, useEffect } from 'react'

import { GLView } from 'expo-gl'
import { Renderer } from 'expo-three'

import {
  AmbientLight,
  Fog,
  GridHelper,
  PerspectiveCamera,
  PointLight,
  Scene,
  SpotLight,
} from 'three'

import OrbitControlsView from 'expo-three-orbit-controls'
import { renderWindow } from './utils/renderWindow'
import { renderRoom } from './utils/renderRoom'
import { ZoneContext } from '../../contexts/ZoneContext'
import { Dimensions } from 'react-native'

export const SCALE = 30
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

export default function Threed(props) {
  // const dispatch = useDispatch();
  const [orbCamera, setOrbCamera] = useState(null)
  const context = useContext(ZoneContext)

  const onContextCreate = async (gl) => {
    const { drawingBufferWidth: width, drawingBufferHeight: height } = gl
    const sceneColor = 0xffffff

    // Create a WebGLRenderer without a DOM element
    const renderer = new Renderer({ gl })
    renderer.setSize(width, height)
    renderer.setClearColor(sceneColor)

    const camera = new PerspectiveCamera(70, width / height, 0.01, 1000)
    camera.position.set(SCALE / 2, SCALE / 2, SCALE / 2)
    setOrbCamera(camera)

    let scene = new Scene()
    scene.fog = new Fog(sceneColor, 1, 10000)
    scene.add(new GridHelper(SCALE, SCALE))

    const ambientLight = new AmbientLight(0x101010)
    scene.add(ambientLight)

    const pointLight = new PointLight(0xffffff, 2, 1000, 1)
    pointLight.position.set(0, 200, 200)
    scene.add(pointLight)

    const spotLight = new SpotLight(0xffffff, 0.5)
    spotLight.position.set(0, 500, 100)
    spotLight.lookAt(scene.position)
    scene.add(spotLight)
    // const { drawingBufferWidth: width, drawingBufferHeight: height } = gl
    // const sceneColor = 0xffffff

    // // Create a WebGLRenderer without a DOM element
    // let scene = new Scene()
    // const renderer = new Renderer({ gl })
    // renderer.setSize(width, height)
    // renderer.setClearColor(sceneColor)

    // // const camera = new PerspectiveCamera(70, width / height, 0.01, 1000)
    // // camera.position.set(SCALE / 2, SCALE / 2, SCALE / 2)

    // var camera = new PerspectiveCamera(45, 4 / 3, .5, 100);
    // camera.position.set(0, 2, 10);
    // camera.lookAt(0, 0, 0);
    // setOrbCamera(camera)

    // // let scene = new Scene()
    // scene.fog = new Fog(sceneColor, 1, 10000)
    // scene.add(new GridHelper(SCALE, SCALE))

    // const ambientLight = new AmbientLight(0x101010)
    // scene.add(ambientLight)

    // const pointLight = new PointLight(0xffffff, 2, 1000, 1)
    // pointLight.position.set(0, 200, 200)
    // scene.add(pointLight)

    // const spotLight = new SpotLight(0xffffff, 0.5)
    // spotLight.position.set(0, 500, 100)
    // spotLight.lookAt(scene.position)
    // scene.add(spotLight)

    // let prevHeight = 0
    // props.floors.map(async (floor) => {
    //   if (floor.rooms.length > 0) {
    //     // LOAD WINDOWS

    // LOAD ROOMS
    // renderRoom(scene, context.floors[context.activeFloorIndex].rooms, camera)

    let prevHeight = 0
    // console.log('==============================')
    // console.log(context.floors)
    // console.log('==============================')
    context.floors.map((floor) => {
      // console.log('prevHeight===>>>>', prevHeight)
      renderRoom(scene, floor.rooms, camera, prevHeight)
      // prevHeight += floor.rooms[0].depth / (SCALE - 25);
      prevHeight += floor.rooms[0].depth / 10 / (SCALE - 25)
      // / 10 / (SCALE - 25) / 2
    })

    camera.lookAt(0, 0, 0)
    const render = () => {
      timeout = requestAnimationFrame(render)
      renderer.render(scene, camera)
      gl.endFrameEXP()
    }
    render()
  }

  return (
    <>
      <OrbitControlsView style={{ flex: 1, zoomIndex: 100 }} camera={orbCamera}>
        <GLView style={{ flex: 1 }} onContextCreate={onContextCreate} />
      </OrbitControlsView>
    </>
  )
}
