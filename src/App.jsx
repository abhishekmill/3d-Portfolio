import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { degToRad } from "three/src/math/MathUtils.js";
import {
  Bvh,
  CameraControls,
  Environment,
  OrbitControls,
  Preload,
  Sky,
} from "@react-three/drei";
import {
  EffectComposer,
  N8AO,
  Outline,
  Select,
  Selection,
  TiltShift2,
  ToneMapping,
} from "@react-three/postprocessing";

import Cameracontrol from "./comp/Cameracontrol";
import { useRef, useState } from "react";
import { button, useControls } from "leva";
import Overlay from "./comp/Overlay";
import { OfficeModel } from "./comp/Office";
import { BedRoomModel } from "./comp/Bedroom";
import { BathroomModel } from "./comp/Bathroom";

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
  const [hoverElement, setHoverElement] = useState(null);

  const updateHover = (n) => {
    n.stopPropagation();

    setHoverElement(n.object.name);
  };
  const reUpdateHover = () => {
    setHoverElement("null");
  };

  return (
    <div className="w-full h-screen">
      <Overlay animation={animation} />
      <Canvas>
        <Cameracontrol animation={animation} />
        {/* <CameraControls ref={cameraRef} /> */}

        <Bvh firstHitOnly>
          <Selection>
            <Effects />
            <OfficeModel
              hoverElement={hoverElement}
              updateHover={updateHover}
              reUpdateHover={reUpdateHover}
              position={[0, -0.35, 1]}
              rotation={[0, degToRad(-180 / 2.4), 0]}
              scale={0.7}
            />
            <BedRoomModel
              position={[0, -2.5, 1]}
              hoverElement={hoverElement}
              updateHover={updateHover}
              reUpdateHover={reUpdateHover}
              scale={0.6}
            />
            <BathroomModel
              hoverElement={hoverElement}
              updateHover={updateHover}
              reUpdateHover={reUpdateHover}
              rotation={[0, Math.PI / 1.1, 0]}
              position={[0, -6.1, 0.8]}
              scale={[1.2, 1, 1]}
            />
          </Selection>
        </Bvh>

        <color attach="background" args={["#151520"]} />
        <Environment preset="city" />
        <Preload />
      </Canvas>
    </div>
  );
}

function Effects() {
  const { size } = useThree();

  return (
    <EffectComposer
      stencilBuffer
      disableNormalPass
      autoClear={false}
      multisampling={4}
    >
      <Outline
        visibleEdgeColor="white"
        hiddenEdgeColor="white"
        blur
        width={size.width * 1.25}
        edgeStrength={6}
      />
      <ToneMapping />
    </EffectComposer>
  );
}
