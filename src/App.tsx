import { useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber';
import Scene from './components/Scene'
import { PerformanceMonitor } from '@react-three/drei';


function App() {
  const [dpr, setDpr] = useState(1.5)
  
  // console.log('dpr',dpr)
  return (
    <div className='h-screen bg-stone-600'>
      <Canvas shadows>
       <PerformanceMonitor>
            <Scene />
</PerformanceMonitor>
          
        
  
  
    </Canvas>
    </div>
  )
}

export default App
