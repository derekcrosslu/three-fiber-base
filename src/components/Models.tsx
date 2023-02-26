import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { GLTF } from 'three-stdlib';


type GLTFResult = GLTF & {
  nodes: {
    // centro
    Plane: THREE.Mesh,
    // sillas
    Cube032: THREE.Mesh
    // mesas
    Cube005: THREE.Mesh,
    Cube005_1: THREE.Mesh,
    Cube005_2: THREE.Mesh,
    // parantes
    Cube029: THREE.Mesh,
    Cube029_1: THREE.Mesh,
    Cube029_2: THREE.Mesh,
    // patas
    Cylinder024: THREE.Mesh
     // patasrejas
    Cylinder009: THREE.Mesh
    // pencas
    PENCAS001: THREE.Mesh
  }
  materials: {
    // centro
    BAKEFONDO: THREE.MeshStandardMaterial,
    MASETEROBAKE: THREE.MeshStandardMaterial,
    // sillas
    ASIENTO: THREE.MeshStandardMaterial,
    // mesas
    NEGROMETAL_MESAS: THREE.MeshStandardMaterial,
    BAKEMESAS: THREE.MeshStandardMaterial,
    NEGROJEBE: THREE.MeshStandardMaterial,
    // parantes
    NEGROMETAL_PARANTES: THREE.MeshStandardMaterial,
    PARANTEBAKE: THREE.MeshStandardMaterial,
    SOGA: THREE.MeshStandardMaterial,
    // patas
    PATASBAKE: THREE.MeshStandardMaterial
    // patasrejas
    NEGROMETAL_PATASREJAS: THREE.MeshStandardMaterial
    // pencas
    PENCAS: THREE.MeshStandardMaterial
  }
}

export function Centro(props: JSX.IntrinsicElements['group']) {
  const { nodes,   materials} = useGLTF('../CENTRO/CENTRO.gltf') as GLTFResult
  materials.BAKEFONDO.setValues({
    roughness: 0.1,
    // color: 'white',
    metalness: 0.5,
    emissive: '#000000',
    emissiveIntensity: 0.5,
  })
  
  // materials.BAKEFONDO.blending = THREE.AdditiveBlending
  
  return (
<group>
  <mesh
    geometry={nodes.Plane.geometry}
    material={materials.BAKEFONDO}
    position={[-5, -5.5, 15]}
    receiveShadow
    castShadow
      />
      {/* <mesh>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" map={maseta} />
      </mesh> */}
      
</group>


  )
}
useGLTF.preload('../CENTRO/CENTRO.gltf');

export function Sillas(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/SILLAS/SILLAS.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube032.geometry} material={materials.ASIENTO}  rotation={[0, 0.16, 0]} receiveShadow />
    </group>
  )
}

useGLTF.preload('/SILLAS/SILLAS.gltf')

export function Sillas_(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('../SILLAS/SILLAS.gltf') as GLTFResult
const colorsillas = useTexture('/SILLAS/COLORSILLAS.jpg');
  materials.ASIENTO.setValues({
    roughness: 0.1,
    metalness: 0.5,
  })

  materials.ASIENTO.blending = THREE.AdditiveBlending
  materials.ASIENTO.side = THREE.DoubleSide

  
  
  return (
    <group
      {...props}
      dispose={null}
      castShadow
      receiveShadow
    >
      <mesh
        geometry={nodes.Cube032.geometry}
        material={materials.ASIENTO}
        position={[-17.82, -0.06, -19.9]}
        rotation={[0, 0.16, 0]}
        castShadow
    receiveShadow
      >
        <meshStandardMaterial attach='material' map={colorsillas} />
        </mesh>
    </group>
  )
}
useGLTF.preload('../SILLAS/SILLAS.gltf');

export function Mesas(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('../MESAS/MESAS.gltf') as GLTFResult

  console.log('nodes mesas', nodes)
  console.log('materials mesas', materials)

  return (
    <group
      position={[-17.33, 5.32, -14.31]}
      rotation={[Math.PI, -1.57, Math.PI]}
      castShadow
    >
      <mesh geometry={nodes.Cube005.geometry} material={materials.NEGROMETAL_MESAS}
              receiveShadow
        castShadow
      />
      <mesh geometry={nodes.Cube005_1.geometry} material={materials.BAKEMESAS}
              receiveShadow
        castShadow
      />
      <mesh geometry={nodes.Cube005_2.geometry} material={materials.NEGROJEBE}
              receiveShadow
        castShadow
      />
      </group>
  )
}
useGLTF.preload('../MESAS/MESAS.gltf');

export function Parantes(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/PARANTES/PARANTES.gltf') as GLTFResult
  materials.PARANTEBAKE.setValues({
    roughness: 0.5,
    metalness: 0.5,
  })

  materials.SOGA.setValues({
    roughness: 0.5,
    metalness: 0.5,
    
  })

  return (
    <group
      {...props}
      dispose={null}
    >
      <group position={[-2.3, 0, -25.64]} rotation={[0, 0.06, 0]}>
        <mesh geometry={nodes.Cube029.geometry} material={materials.NEGROMETAL_PARANTES}
        castShadow
        />
        <mesh geometry={nodes.Cube029_1.geometry} material={materials.PARANTEBAKE} castShadow/>
        <mesh geometry={nodes.Cube029_2.geometry} material={materials.SOGA} castShadow/>
      </group>
    </group>
  )
}
useGLTF.preload('/PARANTES/PARANTES.gltf')

export function Patas(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/SILLAS/PATAS.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cylinder024.geometry} material={materials.PATASBAKE} position={[4.8, -0.09, 7.13]} rotation={[-Math.PI, 0.5, -Math.PI]} castShadow/>
    </group>
  )
}
useGLTF.preload('/SILLAS/PATAS.gltf')


export function PatasRejas(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/SILLAS/PATASREJAS.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cylinder009.geometry} material={materials.NEGROMETAL_PATASREJAS} rotation={[0, 0.09, 0]} castShadow />
    </group>
  )
}

useGLTF.preload('/SILLAS/PATASREJAS.gltf');





