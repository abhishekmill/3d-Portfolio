import { Canvas, useLoader } from "@react-three/fiber";
import {
  CameraControls,
  Environment,
  OrbitControls,
  Preload,
} from "@react-three/drei";
import Scene from "./comp/Scene";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { AmbientLight, Camera } from "three";
import { Bathroom, Bedroom, Office } from "./comp/Models";
import Cameracontrol from "./comp/Cameracontrol";
import { useRef } from "react";
import { button, useControls } from "leva";

export default function App() {
  const cameraRef = useRef();

  useControls("helper", {
    getlookat: button(() => {
      if (cameraRef.current) {
        const position = cameraRef.current.getPosition();
        const target = cameraRef.current.getTarget();
        console.log("Position:", position.toArray());
        console.log("Target:", target.toArray());
      }
    }),
  });

  return (
    <div className="w-full h-screen">
      <Canvas>
        <Cameracontrol />
        {/* <CameraControls ref={cameraRef} /> */}

        <group position={[0, 0, 1]}>
          <Office />
          <Bathroom />
          <Bedroom />
        </group>
        <color attach="background" args={["#151520"]} />
        <Environment preset="city" />
        {/* <Scene /> */}
        <Preload />
      </Canvas>
    </div>
  );
}
