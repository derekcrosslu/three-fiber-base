/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/SILLA/SILLA.gltf -t -r public
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane001: THREE.Mesh
    Cube: THREE.Mesh
  }
  materials: {
    cemento: THREE.MeshStandardMaterial
    madera: THREE.MeshStandardMaterial
  }
}

export default function SILLA(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/SILLA/SILLA.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane001.geometry} material={materials.cemento} position={[3.67, 0, 4.82]} rotation={[Math.PI / 2, 0, 0]} scale={1.45} />
      <mesh geometry={nodes.Cube.geometry} material={materials.madera} position={[0, 2.56, 0]} />
    </group>
  )
}

useGLTF.preload('/SILLA/SILLA.gltf')
