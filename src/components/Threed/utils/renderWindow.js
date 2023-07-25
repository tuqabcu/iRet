// Copyright ©,2023, Birmingham City University

import * as THREE from 'three'
import {
  BoxBufferGeometry,
  ExtrudeGeometry,
  //   LineBasicMaterial,
  //   LineSegments,
  Mesh,
  //   MeshBasicMaterial,
  MeshStandardMaterial,
  //   PerspectiveCamera,
  //   Scene,
  //   Vector2,
  //   WireframeGeometry,
} from 'three'
// import { getColor } from '@styles/index'
// import { Zone } from '@type/index'
// import { SCALE } from '../index'

const SCALE = 30

class WindowMesh extends Mesh {
  constructor() {
    super(
      new BoxBufferGeometry(1.0, 1.0, 1.0),
      new MeshStandardMaterial({
        color: 0xff0000,
        side: THREE.BackSide,
        roughness: 10,
        metalness: 10,
        wireframe: true,
        transparent: true,
      })
    )
  }
}

const isWindowHorizontal = (window) => {
  return window.width > window.height
}

export const renderWindow = async (scene, room, camera, prevHeight) => {
  // room.depth / 10 / (SCALE - 25) / 2 + prevHeight,

  room.windows.map((window) => {
    const windowMesh = new WindowMesh()
    scene.add(windowMesh)
    windowMesh.material = new THREE.MeshBasicMaterial({
      color: window.color,
      transparent: true,
      opacity: 0.8,
    })
    windowMesh.scale.x = window.width / SCALE
    windowMesh.scale.y = window.depth / (SCALE - 25) / 10
    windowMesh.scale.z = window.height / SCALE
    if (window.orientation == 'top')
      // top-axis scenrio
      windowMesh.position.set(
        (room.dx + room.width) / SCALE,
        room.depth / 10 / (SCALE - 25) / 2 + prevHeight,
        (room.dy + room.height / 2) / SCALE -
          (room.height + window.height) / 2 / SCALE
      )
    else if (window.orientation == 'bottom')
      // bottom-axis scenrio
      windowMesh.position.set(
        (room.dx + room.width) / SCALE,
        room.depth / 10 / (SCALE - 25) / 2 + prevHeight,
        (room.dy + room.height / 2) / SCALE +
          (room.height + window.height) / 2 / SCALE
      )
    else if (window.orientation == 'left')
      // x-left-axis scenrio
      windowMesh.position.set(
        (room.dx + room.width) / SCALE -
          (room.width + window.width) / 2 / SCALE,
        room.depth / 10 / (SCALE - 25) / 2 + prevHeight,
        (room.dy + room.height / 2) / SCALE
      )
    else if (window.orientation == 'right')
      // x-right-axis scenrio
      windowMesh.position.set(
        (room.dx + room.width) / SCALE +
          (room.width + window.width) / 2 / SCALE,
        room.depth / 10 / (SCALE - 25) / 2 + prevHeight,
        (room.dy + room.height / 2) / SCALE
      )

    const geo = new THREE.WireframeGeometry(windowMesh.geometry)
    const mat = new THREE.LineBasicMaterial({
      color: 0x000000,
      linewidth: 1,
    })
    const wireframe = new THREE.LineSegments(geo, mat)
    wireframe.renderOrder = 1 // make sure wireframes are rendered 2nd
    windowMesh.add(wireframe)
    windowMesh.matrixAutoUpdate = true
    windowMesh.updateMatrix()

    camera.lookAt(windowMesh.position)
  })

  room.doors.map((window) => {
    const windowMesh = new WindowMesh()
    scene.add(windowMesh)
    windowMesh.material = new THREE.MeshBasicMaterial({
      color: window.color,
      transparent: true,
      opacity: 0.8,
    })
    windowMesh.scale.x = window.width / SCALE
    windowMesh.scale.y = window.depth / (SCALE - 25) / 10
    windowMesh.scale.z = window.height / SCALE
    if (window.orientation == 'top')
      // top-axis scenrio
      windowMesh.position.set(
        (room.dx + room.width) / SCALE,
        room.depth / 10 / (SCALE - 25) / 2 + 0,
        (room.dy + room.height / 2) / SCALE -
          (room.height + window.height) / 2 / SCALE
      )
    else if (window.orientation == 'bottom')
      // bottom-axis scenrio
      windowMesh.position.set(
        (room.dx + room.width) / SCALE,
        room.depth / 10 / (SCALE - 25) / 2 + 0,
        (room.dy + room.height / 2) / SCALE +
          (room.height + window.height) / 2 / SCALE
      )
    else if (window.orientation == 'left')
      // x-left-axis scenrio
      windowMesh.position.set(
        (room.dx + room.width) / SCALE -
          (room.width + window.width) / 2 / SCALE,
        room.depth / 10 / (SCALE - 25) / 2 + 0,
        (room.dy + room.height / 2) / SCALE
      )
    else if (window.orientation == 'right')
      // x-right-axis scenrio
      windowMesh.position.set(
        (room.dx + room.width) / SCALE +
          (room.width + window.width) / 2 / SCALE,
        room.depth / 10 / (SCALE - 25) / 2 + 0,
        (room.dy + room.height / 2) / SCALE
      )

    const geo = new THREE.WireframeGeometry(windowMesh.geometry)
    const mat = new THREE.LineBasicMaterial({
      color: 0x000000,
      linewidth: 1,
    })
    const wireframe = new THREE.LineSegments(geo, mat)
    wireframe.renderOrder = 1 // make sure wireframes are rendered 2nd
    windowMesh.add(wireframe)
    windowMesh.matrixAutoUpdate = true
    windowMesh.updateMatrix()

    camera.lookAt(windowMesh.position)
  })
}
