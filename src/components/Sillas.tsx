import {
  OrbitControls,
  Stage,
  Environment,
  Shadow,
  ContactShadows,
  SpotLightShadow,
  BakeShadows
} from "@react-three/drei";

import {Model,Model2} from './ModLoader';
import {useThree, useFrame, useLoader} from '@react-three/fiber';
import Table from './Table';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { useRef } from "react";

function Sillas() {
  const sillas = useLoader(GLTFLoader, '/MODELS/SILLA.glb')
    const sillasX1 = -17-5;
  const sillasY1 = 0.5;
  const sillasR1 = 0.1;
sillas.scene.position.set(sillasX1, 0, sillasY1)
  return (
    <>
    <primitive object={sillas.scene} />
    </>
  )
}

export default Sillas