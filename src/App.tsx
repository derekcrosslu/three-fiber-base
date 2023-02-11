import { useState } from 'react'
import { Canvas } from '@react-three/fiber'

function ThreeScene() {
  return (
    <Canvas>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  )
}

function App() {
  return (
    <div className="App">
      <ThreeScene />
    </div>
  )
}

export default App
