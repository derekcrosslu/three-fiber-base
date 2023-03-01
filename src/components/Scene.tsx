import {
  OrbitControls,
  Stage,
  Environment,
  Shadow,
  ContactShadows,
  SpotLightShadow,
  BakeShadows
} from "@react-three/drei";
import { Centro, Sillas, Mesas, Patas, PatasRejas, Parantes} from './Models';
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

const DracoModel = () => {
  const groupRef = useRef(null)
  const loader = new GLTFLoader();
  const dLoader = new DRACOLoader();
  dLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
  // const dracoPromise = promisify(dLoader)
  loader.setDRACOLoader(dLoader);

  loader.load(
      "/MESAS_/table2.glb",
      (d) => {
        console.log('d', d)
        return (
            <primitive object={d.scene} />
        )
      },
    (p) => {
      console.log('p', p)
      },
      (e) => {
        console.error('e',e);
      }
    );
  
  // dracoPromise.load('/MESAS_/mesa.glb').then((gltf:any) => {
  //   console.log('gltf', gltf)
    
  // })
  //   .catch((err: any) => {
  //     console.log('error', err)
  //   })
  

}


// then((dracoLoader: any) => {
//     dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
//     const gltf = new GLTFLoader();
//     gltf.setDRACOLoader(dracoLoader);
//     gltf.load('/MESAS_/mesa.glb', (gltf: any) => {
//       console.log(gltf)
//       // groupRef.current.add(gltf.scene)
//     })
//   })
//   return (
//     <group ref={groupRef} />
//   )

const Scene = () => {
  const { camera } = useThree();
  camera.position.set(30, 15, 0);
//  const modelRef = useRef();
//   const dLoader = new DRACOLoader();
//   dLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/');
//   // dLoader.setDecoderConfig({ type: 'tsx' })
//   // console.log('  GLTFLoader', GLTFLoader)
//   // console.log('  GLTFLoader', GLTFLoader.prototype.setDRACOLoader)
//   const GLTFLoader_ = GLTFLoader.prototype.setDRACOLoader
//   GLTFLoader_(dLoader)

  // const gltf_ = useLoader(GLTFLoader, '/MESAS_/mesa.glb')




return (
  <>



    <OrbitControls
      target={[0, 0, 0]}
    // makeDefault
    //     minAzimuthAngle={0}
    //     maxAzimuthAngle={Math.PI / 2}
    //     minPolarAngle={Math.PI / 3}
    //     maxPolarAngle={Math.PI / 3}
    //     enableZoom={true}
    //     enablePan={true}
    //     zoomSpeed={0.3}
    />
    {/* <Stage
      adjustCamera
      intensity={0.01}
      shadows="contact"
      environment="night"
    > */}

    {/* <mesh
    position={[0, 0, 0]}
    >
      <boxGeometry args={[10, 10, 10]} />
      <meshStandardMaterial color="white" />

    </mesh> */}

{/* <primitive
        object={gltf.scene}
        position={[0, 1, 0]}
        children-0-castShadow
      /> */}

    <Centro
      position={[0, 0, 0]}
      // rotation={[0, 0, 90]}
    />
    
      {/* <Sillas />
      <Patas />
      <PatasRejas /> */}
      <Parantes />
    {/* <Mesas /> */}
    {/* <Table /> */}
      <Model
        url="/PLANTA/scene.gltf"
        
    />
    {/* <Model2
        url="/MESA/scene.gltf"
    
      /> */}

    <DracoModel />
    
    {/* </Stage> */}

    

  </>
  );
};

export default Scene;



