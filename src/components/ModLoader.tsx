import React, { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import   THREE from 'three';


interface ModelProps {
  url: string;
  scale?: number;
}

const Model: React.FC<ModelProps> = ({ url, scale }) => {
  const gltf: GLTF = useLoader(GLTFLoader, url );
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({mouse, camera}) => {
    // if (meshRef.current) {
    //   meshRef.current.rotation.y += 0.01;
    // }
  });

  return (
    <mesh
      ref={meshRef}
      scale={[0.1, 0.1, 0.1]}
      position={[0, -2, 0]}
      castShadow
    >
      <primitive object={gltf.scene} />
    </mesh>
  );
};

export default Model;