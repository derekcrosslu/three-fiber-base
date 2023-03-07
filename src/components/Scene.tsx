import {
  OrbitControls,
  Stage,
  Environment,
  Shadow,
  ContactShadows,
  SpotLightShadow,
  BakeShadows,
  Select
} from "@react-three/drei";
import { Centro, Sillas, Mesas, Patas, PatasRejas, Parantes } from './Models';
import {Model,Model2} from './ModLoader';
import {useThree, useFrame, useLoader} from '@react-three/fiber';
import Table from './Table';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { useRef } from "react";
import * as THREE from 'three';

// function promisify(loader:any) {
//   function promiseLoader(url:any) {
//     return new Promise((resolve, reject) => {
//       loader.load(url, resolve, onprogress, reject);
//     });
//   }
//   return {
//     originalLoader: loader,
//     load: promiseLoader,
//   };
// }



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
  // const mesa1 = {...mesa.scene, mesaID:'mesa1'}

  const mesa_dummy = new THREE.Scene();
  const mesa_geo = new THREE.BoxGeometry(1, 1, 1);
  const mesa_geo2 = new THREE.BoxGeometry(5, 1, 5);
  const mesa_mater = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

  // add geometry and material to scene
  const mesa_mesh = new THREE.Mesh(mesa_geo, mesa_mater);
  const mesa_mesh2 = new THREE.Mesh(mesa_geo2, mesa_mater);

  // mesa 1
  const mesa1 = mesa.scene.clone()

  // const mesa1 = new THREE.InstancedMesh(geometry, material, 1);
  mesa1.position.set(mesaX1, 0, mesaY1)
  mesa1.rotateY(mesaR1)
  // console.log(mesa1,'mesa1')
  // mesa 2
  const mesa2 = mesa.scene.clone()
  mesa2.position.set(mesaX2, 0, mesaY2)
  mesa2.rotateY(mesaR2)
  // console.log(mesa2,'mesa2')
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


  const OnSelectMesa1 = () => {
    mesa_mesh2.position.set(0, 7, 0)
    mesa_mesh2.material.color.set('orange')
    mesa1.add(mesa_mesh2)

  }
    const OnSelectMesa2 = () => {
      mesa_mesh2.position.set(0, 7, 0)
    mesa_mesh2.material.color.set('pink')
    mesa2.add(mesa_mesh2)
    
    }
    const OnSelectMesa3 = () => {
    mesa_mesh2.position.set(0, 7, 0)
    mesa_mesh2.material.color.set('purple')
    mesa3.add(mesa_mesh2)
    }
    const OnSelectMesa4 = () => {
    mesa_mesh2.position.set(0, 7, 0)
    mesa_mesh2.material.color.set('lightblue')
    mesa4.add(mesa_mesh2)
    }
  const onHoverMesa1 = () => {
    console.log('hover mesa1')
    mesa_mesh.position.set(0, 7, 0)
    mesa_mesh.material.color.set('white')
    mesa1.add(mesa_mesh)
  }
  const onHoverMesa2 = () => {
    console.log('hover mesa2')
    mesa_mesh.position.set(0, 7, 0)
    mesa_mesh.material.color.set('white')
    mesa2.add(mesa_mesh)
  }
  const onHoverMesa3 = () => {
    console.log('hover mesa3')
    mesa_mesh.position.set(0, 7, 0)
    mesa_mesh.material.color.set('white')
    mesa3.add(mesa_mesh)
  }
  const onHoverMesa4 = () => {
    console.log('hover mesa4')
    mesa_mesh.position.set(0, 7, 0)
    mesa_mesh.material.color.set('white')
    mesa4.add(mesa_mesh)
  }




return (
  <>
    <Select
      onClick={OnSelectMesa1}
      onPointerOver={onHoverMesa1}
    >
      <primitive object={mesa1} />
    </Select>
    <Select
      onClick={OnSelectMesa2}
      onPointerOver={onHoverMesa2}
    >
      <primitive object={mesa2} />
    </Select>
    <Select
      onClick={OnSelectMesa3}
      onPointerOver={onHoverMesa3}
    >
      <primitive object={mesa3} />
    </Select>
    <Select
      onClick={OnSelectMesa4}
      onPointerOver={onHoverMesa4}
    >
      <primitive object={mesa4} />
    </Select>
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



