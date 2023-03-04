import {
  OrbitControls,
  Stage,
  Environment,
  Shadow,
  ContactShadows,
  SpotLightShadow,
  BakeShadows
} from "@react-three/drei";
import { Centro, Sillas, Mesas, Patas, PatasRejas, Parantes } from './Models';
import {Model,Model2} from './ModLoader';
import {useThree, useFrame, useLoader} from '@react-three/fiber';
import Table from './Table';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { useRef } from "react";

function promisify(loader:any) {
  function promiseLoader(url:any) {
    return new Promise((resolve, reject) => {
      loader.load(url, resolve, onprogress, reject);
    });
  }
  return {
    originalLoader: loader,
    load: promiseLoader,
  };
}



const Scene = () => {

  const { camera } = useThree();
  camera.position.set(30, 15, 0);

  const mesaX1 = -17-4;
  const mesaY1 = 0.5;
  const mesaR1 = 0.1;

  const mesaX2 = 9-4;
  const mesaY2 = 5.5;
  const mesaR2 = 0.35;

  const mesaX3 = 7-4;
  const mesaY3 = -12.5;
  const mesaR3 = 0.2;

  const mesaX4 = -16-4;
  const mesaY4 = -15;
  const mesaR4 = 0;

  // mesa 1
  const mesa = useLoader(GLTFLoader, '/MODELS/MESA.glb')
  const mesa1 = mesa.scene.clone()
  mesa1.position.set(mesaX1, 0, mesaY1)
  mesa1.rotateY(mesaR1)
  // mesa 2
  const mesa2 = mesa.scene.clone()
  mesa2.position.set(mesaX2, 0, mesaY2)
  mesa2.rotateY(mesaR2)
  // mesa 3
  const mesa3 = mesa.scene.clone()
  mesa3.position.set(mesaX3, 0, mesaY3)
  mesa3.rotateY(mesaR3)
  // mesa 4
  const mesa4 = mesa.scene.clone()
  mesa4.position.set(mesaX4, 0, mesaY4)
  // maseta
  const maseta = useLoader(GLTFLoader, '/MODELS/MASETA.glb')
  maseta.scene.scale.set(4, 4, 4)
  maseta.scene.position.set(0, 0, 15)
  // planta
  const planta = useLoader(GLTFLoader, '/MODELS/PLANTA.glb')
  planta.scene.scale.set(4, 4, 4)
  planta.scene.position.set(-7, 0, -5)
  // piso y pared
  const piso = useLoader(GLTFLoader, '/MODELS/PISO.glb')
  const pared = useLoader(GLTFLoader, '/MODELS/PARED.glb')
  // parantes
  const parantes = useLoader(GLTFLoader, '/MODELS/PARANTES.glb')
  parantes.scene.position.set(-7, 0, -30)


return (
  <>
    <primitive object={mesa1} />
    <primitive object={mesa2} />
    <primitive object={mesa3} />
    <primitive object={mesa4} />
    <primitive object={piso.scene} />
    <primitive object={pared.scene} />
    <Sillas /> 
    <Patas /> 
    <PatasRejas />
    <primitive object={maseta.scene} />
    <primitive object={planta.scene} />
<primitive object={parantes.scene} />


  </>
  );
};

export default Scene;



