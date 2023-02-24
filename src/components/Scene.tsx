import * as THREE from 'three';
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
  ContactShadows,
  Stage
} from "@react-three/drei";
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';
import { Centro, Sillas, Mesas, Patas, PatasRejas, Parantes } from './Models';
import Model from './ModLoader';
import Plantas from './Plantas'


const Scene = () => {

return (
  <>

      {/* <Environment
        // files={"../textures/studio.hdr"}
        files={"../textures/studio.hdr"}
        // encoding={THREE.sRGBEncoding}
        background={true}
      /> */}
      {/* <ambientLight
        intensity={0.01}
        position={[0, 0, 0]}
        color="white"
        castShadow
        receiveShadow
    
      /> */}
    
       <spotLight
        color={'white'}
        intensity={0.2}
        angle={0.3}
        penumbra={1}
        position={[80, 71, 80]}
        castShadow
        receiveShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-radius={8}
        shadow-bias={-0.001}
      />
      <spotLight
        color={'white'}
        intensity={0.1}
        angle={3}
        penumbra={0.1}
        position={[10, 5, 0]}
        castShadow
        receiveShadow
        shadow-mapSize-width={2024}
        shadow-mapSize-height={3024}
        shadow-bias={-0.0001}
      />

        <OrbitControls target={[0, 0, 0]} />
    <Centro
      position={[0, -5, 0]}
      rotation={[0, 0, 90]}
    />
    <Stage
      adjustCamera
      intensity={0.4}
      shadows="contact"
      environment="night"
    >
      
      <Sillas />
      <Patas />
      <PatasRejas />
      <Parantes />
      <Mesas />
      {/* <Piso /> */}
      <Plantas />

        </Stage>

    

  </>
  );
};

export default Scene;



