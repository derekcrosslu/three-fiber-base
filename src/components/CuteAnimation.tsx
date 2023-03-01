import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Ball = () => {
  const mesh = useRef<THREE.Mesh>(null);
  const time = useRef(0);

  useFrame(() => {
    if (mesh.current) {
      time.current += 0.1;
      mesh.current.position.y = Math.abs(Math.sin(time.current)) * 2;
    }
  });

  return (
    <mesh ref={mesh} position={[0, 0, 0]} castShadow>
      <sphereBufferGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

const Ground = () => {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
      <planeBufferGeometry args={[50, 50]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
};

const CuteAnim = () => {
  return (
   <Canvas>
   <ambientLight intensity={0.5} />
   <pointLight position={[10, 10, 10]} castShadow />   
   <Ball />
   {/* <Ground /> */}
   
   </Canvas>

  );
};

export default CuteAnim;