import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Mesh } from 'three'
// import Silla from './SILLA'
import Elias from './models/ELIAS'
import Fort4k from './models/FORT4k'
import Silla_Mesa from './models/SILLA_MESA'
import Ladder from './models/LADDER'
import Postcards from './models/POSTCARDS'
import Sofa2 from './models/SOFA2'
import Sofa3 from './models/SOFA3'
import Tree  from './models/TREE'
import { ContactShadows } from '@react-three/drei';

function Box() {
  const boxRef = useRef<Mesh>(null!);

  useFrame(() => {
    boxRef.current.rotation.x += 0.005;
    boxRef.current.rotation.y += 0.01;
  })

  return (
    <mesh ref={boxRef}>
        <sphereGeometry args={[1, 16, 16, 0, Math.PI*1.9]} />
        <meshStandardMaterial color="orange" wireframe />
      </mesh>
  )
}

function Controls() {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  return <orbitControls args={[camera, domElement]} />
}

function ThreeScene() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[5, 5, 5]} intensity={3} />
      <pointLight position={[-3,-3,2]}  />
      <axesHelper args={[10]} />
      <Controls />
      <Elias />
      <Fort4k />
      <Tree position={[3, 0, -8]} />
      <Silla_Mesa position={[3, 0, 5]} rotation={[0, 0, 0]} scale={ 4} />
      <Ladder position={[15, 0, -5]} rotation={[0, 1.6, 0]} scale={ 3} />
      <Postcards position={[5, 4, 18]} rotation={[0, 3, 0]} scale={ 15} />
      <Sofa2 position={[3, 0, -5]} rotation={[0, 0, 0]} scale={ 5} />
      <Sofa3 position={[-3,0,5]} rotation={[0,1.7,0]} />
      <ContactShadows position={[0, 0, 0]} blur={2.5} scale={20} far={10} />
    </Canvas>
  )
}

function App() {
  return (
    <div className="h-screen">
      <ThreeScene />
    </div>
  )
}

export default App
