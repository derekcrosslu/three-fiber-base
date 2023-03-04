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

function Mesas() {
  return (
    <div>Mesas</div>
  )
}

export default Mesas