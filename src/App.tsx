import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { DirectionalLight, DirectionalLightHelper, Mesh, PointLight, PointLightHelper, RectAreaLight, SpotLight, SpotLightHelper } from "three";
// import Silla from './SILLA'
import Elias from './models/ELIAS'
import Fort4k from './models/FORT4k'
import Silla_Mesa from './models/SILLA_MESA'
import Ladder from './models/LADDER'
import Postcards from './models/POSTCARDS'
import Sofa2 from './models/SOFA2'
import Sofa3 from './models/SOFA3'
import Tree  from './models/TREE'
import { ContactShadows, TorusKnot, Plane, useHelper } from '@react-three/drei';
import { useControls } from 'leva'
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper';

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

function LightScene() {
    const rectAreaLightRef = useRef<RectAreaLight>(null!);
   useHelper(rectAreaLightRef, RectAreaLightHelper, 'red');
  const { intensity, width, height, color } = useControls({ intensity: { value: 1, min: 0, max: 20 }, width: { value: 3, min: 1, max: 10 }, height: { value: 3, min: 1, max: 10 }, color: '#fff' });
  return (
    <>
      <ambientLight intensity={0.5} />
      {/* 
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <pointLight position={[-10, -10, -10]} intensity={1.5} /> */}
      {/* <rectAreaLight ref={rectAreaLightRef} args={[color, intensity, width, height]} position={[0, 5, 0]} rotation-x={-Math.PI / 2} /> */}
      <Plane scale={100} rotation-x={-Math.PI / 2} position-y={-2} />
      {/* <TorusKnot position={[-2, 0, -2]}>
        <meshStandardMaterial color="orange" wireframe />
      </TorusKnot>
      <TorusKnot position={[2, 0, -2]}>
        <meshStandardMaterial color="orange" wireframe />
      </TorusKnot>
      <TorusKnot position={[-2, 0, 2]}>
        <meshStandardMaterial color="orange" wireframe />
      </TorusKnot> */}
      {/* <TorusKnot position={[2, 0, 2]}>
        <meshMatcapMaterial matcap={matcap} />
      </TorusKnot> */}
    </>
  )
}

function Controls() {
  const {
    camera,
    gl: { domElement },
  } = useThree();
  return <orbitControls args={[camera, domElement]} />
}

// const { intensity } = useControls({ intensity:{value:1, min:0, max:5}})

function ThreeScene() {
  return (
    <Canvas camera={{ position:[4,7,0 ]}}>
      <LightScene />
      {/* <ambientLight  intensity={intensity} /> */}
      
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
