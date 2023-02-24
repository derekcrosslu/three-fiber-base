import { useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import Scene from './components/Scene'
import Scene2 from './components/Scene2'
// import {
//   Environment,
//   OrbitControls,
//   PerspectiveCamera,
//   ContactShadows,
//   SpotLightShadow,
//   SoftShadows,
//   Select,
//   Stage,
//   Backdrop,
//   Shadow,
//   SpotLight,
//   Lightformer

// } from "@react-three/drei";


function App() {

  return (
    <div className='h-screen bg-stone-600'>
      <Canvas shadows>

          
        <Scene />
  
  
    </Canvas>
    </div>
  )
}

export default App
