/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/POSTCARDS/postcard_set_01_4k.gltf -t -r public
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    postcard_01: THREE.Mesh
    postcard_02: THREE.Mesh
    postcard_03: THREE.Mesh
    postcard_04: THREE.Mesh
    postcard_05: THREE.Mesh
    postcard_06: THREE.Mesh
    postcard_07: THREE.Mesh
    postcard_08: THREE.Mesh
    postcard_09: THREE.Mesh
    postcard_10: THREE.Mesh
    postcard_11: THREE.Mesh
    postcard_12: THREE.Mesh
    postcard_13: THREE.Mesh
    postcard_14: THREE.Mesh
    postcard_15: THREE.Mesh
    postcard_16: THREE.Mesh
    postcard_17: THREE.Mesh
    postcard_18: THREE.Mesh
    postcard_19: THREE.Mesh
    postcard_20: THREE.Mesh
  }
  materials: {
    postcard_set_01: THREE.MeshStandardMaterial
  }
}

export default function Postcards(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/POSTCARDS/postcard_set_01_4k.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.postcard_01.geometry} material={materials.postcard_set_01} position={[0, 0.22, 0.22]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.postcard_02.geometry} material={materials.postcard_set_01} position={[0.17, 0.22, 0.22]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.postcard_03.geometry} material={materials.postcard_set_01} position={[0.34, 0.22, 0.22]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.postcard_04.geometry} material={materials.postcard_set_01} position={[0.51, 0.22, 0.22]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.postcard_05.geometry} material={materials.postcard_set_01} position={[0, 0.11, 0.22]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.postcard_06.geometry} material={materials.postcard_set_01} position={[0.17, 0.11, 0.22]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.postcard_07.geometry} material={materials.postcard_set_01} position={[0.34, 0.11, 0.22]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.postcard_08.geometry} material={materials.postcard_set_01} position={[0.51, 0.11, 0.22]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.postcard_09.geometry} material={materials.postcard_set_01} position={[0, 0, 0.22]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.postcard_10.geometry} material={materials.postcard_set_01} position={[0.17, 0, 0.22]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.postcard_11.geometry} material={materials.postcard_set_01} position={[0.34, 0, 0.22]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.postcard_12.geometry} material={materials.postcard_set_01} position={[0.51, 0, 0.22]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.postcard_13.geometry} material={materials.postcard_set_01} position={[0, -0.11, 0.22]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.postcard_14.geometry} material={materials.postcard_set_01} position={[0.17, -0.11, 0.22]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.postcard_15.geometry} material={materials.postcard_set_01} position={[0.34, -0.11, 0.22]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.postcard_16.geometry} material={materials.postcard_set_01} position={[0.51, -0.11, 0.22]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.postcard_17.geometry} material={materials.postcard_set_01} position={[0, -0.22, 0.22]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.postcard_18.geometry} material={materials.postcard_set_01} position={[0.17, -0.22, 0.22]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.postcard_19.geometry} material={materials.postcard_set_01} position={[0.34, -0.22, 0.22]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.postcard_20.geometry} material={materials.postcard_set_01} position={[0.51, -0.22, 0.22]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/POSTCARDS/postcard_set_01_4k.gltf')
