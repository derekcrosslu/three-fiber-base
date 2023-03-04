import { useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import Pre from './components/Pre'
import Scene from './components/Scene'
import { Stats, useProgress, Html, Environment, OrbitControls, Stage } from '@react-three/drei';
import { Suspense } from 'react'
import { SSAOPass } from "three-stdlib"

function App() {

//BLUE
  const mesaX1 = -25;
  const mesaY1 = 20;
  const mesaR1 = 0;
//RED
    const mesaX2 = 0;
  const mesaY2 = 15;
  const mesaR2 = 0;
// YELLOW 1
  const mesaX3 = 25;
  const mesaY3 = -20;
  const mesaR3 = 70;

  // YELLOW 2
  const mesaX4 = 25;
  const mesaY4 = 20;
  const mesaR4 = 0;

  return (
    <div className='h-screen bg-black'>
      <Canvas shadows>
      {/* <ambientLight intensity={0.5} /> */}
        {/* <pointLight position={[10, 10, 10]}
          intensity={1}
          castShadow
          color={'white'}


        /> */}
        {/* <Stage
          shadows
          environment="night"
          intensity={0.15}
        > */}

            <spotLight
          color={'white'}

          intensity={15}
          angle={mesaR1}
          penumbra={1}
          position={[mesaX1, 0, mesaY1]}
          castShadow
          receiveShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-radius={3}
          shadow-bias={-0.001}
          />
                 <spotLight
          color={'white'}

          intensity={15}
          angle={mesaR2}
          penumbra={1}
          position={[mesaX2, 0, mesaY2]}
          castShadow
          receiveShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-radius={3}
          shadow-bias={-0.001}
        />
        <spotLight
          color={'white'}
          
          intensity={1}
          angle={mesaR3}
          penumbra={1}
          position={[mesaX3, 0, mesaY3]}
          castShadow
          receiveShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-radius={3}
            shadow-bias={-0.001}
            
        />
         <spotLight
          color={'yellow'}
          
          intensity={5}
          angle={mesaR3}
          penumbra={1}
          position={[mesaX4, 0, mesaY4]}
          castShadow
          receiveShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-radius={3}
            shadow-bias={-0.001}
            
        />
     
           
    <Environment
      preset="night"
      // background
      files="https://d27rt3a60hh1lx.cloudfront.net/content/muse.place/andresmestra/PLANTA/scene.gltf"
   
        />
            <OrbitControls
      target={[0, 0, 0]}
    />
            
      <Suspense >
        <Scene />
          </Suspense>
           {/* </Stage> */}
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
