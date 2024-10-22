import { Canvas, useLoader } from "@react-three/fiber";
import {
  CameraControls,
  Environment,
  OrbitControls,
  Preload,
} from "@react-three/drei";
import Scene from "./comp/Scene";
import { AmbientLight, Camera } from "three";
import { Bathroom, Bedroom, Office } from "./comp/Models";
import Cameracontrol from "./comp/Cameracontrol";
import { useRef, useState } from "react";
import { button, useControls } from "leva";
import Overlay from "./comp/Overlay";

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

  const [animation, setAnimation] = useState("anim0");

  useControls("animation", {
    animation0: button(() => setAnimation("anim0")),
    animation1: button(() => setAnimation("anim1")),
    animation2: button(() => setAnimation("anim2")),
    animation3: button(() => setAnimation("anim3")),
  });

  return (
    <div className="w-full h-screen">
      <Overlay animation={animation} />
      <Canvas>
        <Cameracontrol animation={animation} />
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
