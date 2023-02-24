import * as THREE from 'three';
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  ContactShadows,
  Stage,
  useTexture
} from "@react-three/drei";
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { Centro, Sillas, Mesas, Patas, PatasRejas, Parantes, Piso } from './Models';


function Scene2() {
  const bakedTexture = useTexture('../textures/baked-02.jpeg')
  return (
   
    <>
      
    <ambientLight intensity={0.2} />
      <Stage adjustCamera intensity={0.4} shadows="contact" environment="night">
      <OrbitControls target={[-2.64, -0.71, 0.03]} />
        
  <mesh >
              <boxBufferGeometry
                args={[1, 1, 1]}
              />
            <meshStandardMaterial color="blue" />
         </mesh>

        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          // position={[0, -1, 0]}
          receiveShadow
          >
              <planeBufferGeometry args={[10, 10]} />
        {/* <meshStandardMaterial color="white"
        /> */}
          <meshBasicMaterial map={bakedTexture} />
          </mesh>


 </Stage>
    </>

  )
}

export default Scene2