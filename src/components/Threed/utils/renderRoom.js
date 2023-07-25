// Copyright ©,2023, Birmingham City University

import * as THREE from 'three'
import {
  BoxBufferGeometry,
  ExtrudeGeometry,
  LineBasicMaterial,
  LineSegments,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  PerspectiveCamera,
  Scene,
  Vector2,
  WireframeGeometry,
} from 'three'
// import { getColor } from '@styles/index'
// import { Zone } from '@type/index'
import Threed from '../index'

import { renderWindow } from './renderWindow'
const SCALE = 30

class RoomMesh extends Mesh {
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

class PrismGeometry extends ExtrudeGeometry {
  constructor(vertices, height) {
    super(new THREE.Shape(vertices), {
      depth: height,
      bevelOffset: 2,
      bevelEnabled: false,
    })
  }
}

export const renderRoom = async (scene, rooms, camera, prevHeight) => {
  rooms.map((room) => {
    const roomMesh = new RoomMesh()
    // || room.overlappedWith == null
    if (room.type == 'room') {
      scene.add(roomMesh)

      roomMesh.material = new THREE.MeshBasicMaterial({
        color: room.color,
        transparent: true,
        opacity: 0.8,
      })

      roomMesh.scale.x = room.width / SCALE
      roomMesh.scale.y = room.depth / (SCALE - 25) / 10
      roomMesh.scale.z = room.height / SCALE

      roomMesh.position.set(
        (room.dx + room.width) / SCALE,
        room.depth / 10 / (SCALE - 25) / 2 + prevHeight,
        (room.dy + room.height / 2) / SCALE
      )

      const geo = new THREE.WireframeGeometry(roomMesh.geometry)
      const mat = new THREE.LineBasicMaterial({
        color: 0x000000,
        linewidth: 1,
      })
      const wireframe = new THREE.LineSegments(geo, mat)
      wireframe.renderOrder = 1 // make sure wireframes are rendered 2nd
      roomMesh.add(wireframe)
      roomMesh.matrixAutoUpdate = true
      roomMesh.updateMatrix()
      renderWindow(scene, room, camera, prevHeight)
    } else {
      const position1 = room.dx / 2 / SCALE
      const position2 = (room.dx + room.width) / SCALE
      const heightRoom =
        room.depth / 12 / (SCALE - 25) -
        (0.8 * room.widthMeter <= 2 ? 1 : room.widthMeter / 1.4) //room.depth / SCALE;

      const A = new Vector2(position1, heightRoom)
      const B = new Vector2(
        position1 + (position2 - position1) / 2,
        heightRoom + 2
      )
      const C = new Vector2(position2, heightRoom)

      let heightRoof = room.height / SCALE
      let geometry = new PrismGeometry([A, B, C], heightRoof)
      let material = new MeshBasicMaterial({
        color: room.color,
        transparent: true,
        opacity: 0.8,
      })
      let prism1 = new Mesh(geometry, material)
      prism1.position.set(
        (room.dx + room.width) / 2 / SCALE,
        room.depth / 24 / (SCALE / 2) + prevHeight - 1.1,
        room.dy / SCALE
      )

      scene.add(prism1)
    }

    camera.lookAt(roomMesh.position)
  })
}

// const position1 = room.x / SCALE;
// const position2 = (room.x + room.width) / SCALE;
// const heightRoom = room.depth / SCALE;

// const A = new Vector2(position1, heightRoom);
// const B = new Vector2(position1 + (position2 - position1) / 2, heightRoom + 2);
// const C = new Vector2(position2, heightRoom);

// let heightRoof = room.height / SCALE;
// let geometry = new PrismGeometry([A, B, C], heightRoof);
// let material = new MeshBasicMaterial({
//   color: getColor('color2'),
//   transparent: true,
//   opacity: 0.8,
// });
// let prism1 = new Mesh(geometry, material);
// prism1.position.set(
//   room.x / SCALE / 60,
//   room.depth / SCALE / 2 + prevHeight - 1,
//   room.y / SCALE
// );

// const geo: WireframeGeometry = new THREE.WireframeGeometry(prism1.geometry);
// const mat: LineBasicMaterial = new THREE.LineBasicMaterial({
//   color: 0x000000,
//   linewidth: 1,
// });
// const wireframe: LineSegments = new THREE.LineSegments(geo, mat);
// wireframe.renderOrder = 1; // make sure wireframes are rendered 2nd
// prism1.add(wireframe);

// scene.add(prism1);
