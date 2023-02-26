import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import   THREE from 'three';


interface ModelProps {
  url: string;
}

const Model: React.FC<ModelProps> = ({ url }) => {
  const gltf: GLTF = useLoader(GLTFLoader, url);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({mouse, camera}) => {
    // if (meshRef.current) {
    //   meshRef.current.rotation.y += 0.01;
    // }
  });

  return (
    <mesh
      ref={meshRef}
    scale={[0.035, 0.035, 0.035]}
    >
      <primitive object={gltf.scene} />
    </mesh>
  );
};

export default Model;