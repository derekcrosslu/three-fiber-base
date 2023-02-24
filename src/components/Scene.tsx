import {
  OrbitControls,
  Stage
} from "@react-three/drei";
import { Centro, Sillas, Mesas, Patas, PatasRejas, Parantes } from './Models';
import Plantas from './Plantas'


const Scene = () => {

return (
  <>
       <spotLight
        color={'white'}
        intensity={0.2}
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
        color={'white'}
        intensity={0.1}
        angle={3}
        penumbra={0.1}
        position={[10, 5, 0]}
        castShadow
        receiveShadow
        shadow-mapSize-width={2024}
        shadow-mapSize-height={3024}
        shadow-bias={-0.0001}
      />

        <OrbitControls target={[0, 0, 0]} />
    <Centro
      position={[0, -5, 0]}
      rotation={[0, 0, 90]}
    />
    <Stage
      adjustCamera
      intensity={0.4}
      shadows="contact"
      environment="night"
    >
      
      <Sillas />
      <Patas />
      <PatasRejas />
      <Parantes />
      <Mesas />
      <Plantas />

    </Stage>

    

  </>
  );
};

export default Scene;



