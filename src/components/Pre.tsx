import { useState,useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Scene from './Scene'
import { Text } from '@react-three/drei';

function Pre({progress}:any) {
  const mesh = useRef<THREE.Mesh>(null);

  return (
    <>
      
         <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]}  />
        <OrbitControls target={[0, 0, 0]} />
        <mesh ref={mesh}>
          <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial attach="material" color="hotpink" />
     
        </mesh>
 
    </>
  );
}

  

export default Pre