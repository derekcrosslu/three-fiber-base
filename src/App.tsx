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
      <Tree />
      <Silla_Mesa />
      <Ladder />
      <Postcards />
      <Sofa2 />
      <Sofa3 />
      
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
