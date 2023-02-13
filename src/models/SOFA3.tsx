/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 public/SOFA1/sofa_03_4k.gltf -t -r public
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Mesh009: THREE.Mesh
    Mesh009_1: THREE.Mesh
  }
  materials: {
    sofa_03: THREE.MeshStandardMaterial
    sofa_03_fringe: THREE.MeshStandardMaterial
  }
}

export default function Sofa3(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/SOFA1/sofa_03_4k.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh009.geometry} material={materials.sofa_03} />
      <mesh geometry={nodes.Mesh009_1.geometry} material={materials.sofa_03_fringe} />
    </group>
  )
}

useGLTF.preload('/SOFA1/sofa_03_4k.gltf')
