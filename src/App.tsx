import { useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import Pre from './components/Pre'
import Scene from './components/Scene'
import { Stats, useProgress, Html, Environment } from '@react-three/drei';
import { Suspense } from 'react'
import { SSAOPass } from "three-stdlib"

function App() {

  return (
    <div className='h-screen bg-black'>
      <Canvas shadows>
      <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]}
          intensity={2}
          castShadow
          color={'white'}


        />
    <Environment
      preset="night"
      // background
      files="https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/andresmestra/PLANTA/scene.gltf"
   
    />
               {/* <spotLight
        color={'red'}
        intensity={0.0001}
        angle={0.3}
        penumbra={1}
        position={[80, 71, 80]}
        castShadow
        receiveShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-radius={8}
        shadow-bias={-0.001}
      />
      <spotLight
        color={'purple'}
        intensity={0.0001}
        angle={3}
        penumbra={0.1}
        position={[10, 5, 0]}
        castShadow
        receiveShadow
        shadow-mapSize-width={2024}
        shadow-mapSize-height={3024}
        shadow-bias={-0.0001}
      /> */}
      <Suspense fallback={<Loader />}>
        <Scene />
      </Suspense>
    </Canvas>
    </div>
  );
};
  
const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className='flex bg-orange-300'>{progress}% loaded</div>
    </Html>
  );
};
  

  


export default App
