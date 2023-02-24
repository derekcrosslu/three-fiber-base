import { useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import Scene from './components/Scene'



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
