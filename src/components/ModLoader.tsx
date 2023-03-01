import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import   THREE from 'three';


interface ModelProps {
  url: string;
}

export const Model: React.FC<ModelProps> = ({ url }) => {
  const gltf: GLTF = useLoader(GLTFLoader, url);
  const meshRef = useRef<THREE.Mesh>(null);


  return (
    <mesh
      ref={meshRef}
    scale={[4.5, 4.5, 4.5]}
    >
      <primitive object={gltf.scene} />
    </mesh>
  );
};

export const Model2: React.FC<ModelProps> = ({ url }) => {
  const gltf: GLTF = useLoader(GLTFLoader, url);
  const meshRef = useRef<THREE.Mesh>(null);


  return (
    <mesh
      ref={meshRef}
      scale={[0.05, 0.05, 0.05]}
      position={[0, 0, 0]}
    >
      <primitive object={gltf.scene} />
    </mesh>
  );
};