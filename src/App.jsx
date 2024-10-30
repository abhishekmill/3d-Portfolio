import { Canvas } from "@react-three/fiber";
import { degToRad } from "three/src/math/MathUtils.js";
import { Bvh, Environment, Preload } from "@react-three/drei";
import { Selection } from "@react-three/postprocessing";

import Cameracontrol from "./comp/Cameracontrol";
import { useEffect, useRef, useState } from "react";
import { button, useControls } from "leva";
import Overlay from "./comp/Overlay";
import { OfficeModel } from "./comp/Office";
import { BedRoomModel } from "./comp/Bedroom";
import { BathroomModel } from "./comp/Bathroom";
import Effectx from "./comp/Effects";

export default function App() {
  const cameraRef = useRef();

  // useControls("helper", {
  //   getlookat: button(() => {
  //     if (cameraRef.current) {
  //       const position = cameraRef.current.getPosition();
  //       const target = cameraRef.current.getTarget();
  //     }
  //   }),
  // });

  const animations = ["anim0", "anim1", "anim2", "anim3"];
  const [animation, setAnimation] = useState("anim0");
  // Handle next button click
  const handleNext = () => {
    console.log("next");

    const currentIndex = animations.indexOf(animation);
    const nextAnimation = animations[(currentIndex + 1) % animations.length];
    setAnimation(nextAnimation);
  };

  // Handle previous button click
  const handlePrevious = () => {
    const currentIndex = animations.indexOf(animation);
    const previousAnimation =
      animations[(currentIndex - 1 + animations.length) % animations.length];
    setAnimation(previousAnimation);
  };

  useEffect(() => {
    setClickedElement("awd");
  }, [animation]);

  // useControls("animation", {
  //   animation0: button(() => setAnimation("anim0")),
  //   animation1: button(() => setAnimation("anim1")),
  //   animation2: button(() => setAnimation("anim2")),
  //   animation3: button(() => setAnimation("anim3")),
  // });
  const [hoverElement, setHoverElement] = useState(null);
  const [clickedlement, setClickedElement] = useState(null);

  const updateHover = (n) => {
    n.stopPropagation();

    setHoverElement(n.object.name);
  };

  const reUpdateHover = () => {
    setHoverElement("null");
  };

  const handleClick = (n) => {
    n.stopPropagation();
    if (n.object.name) {
      setClickedElement(n.object.name);
    }
  };

  const handleCanvasClick = (n) => {
    if (n.target.tagName === "CANVAS") {
      setClickedElement("sef");
    }
    if (n.object.name) {
      console.log(n.object.name);
    }
  };

  return (
    <div className="w-full h-screen ">
      <div className="absolute pointer-events-none  w-full h-screen  flex  items-center ">
        <div className="w-full h-[5vh] pointer-events-auto justify-between  px-8 z-[11]  flex">
          <svg
            onClick={handlePrevious}
            className=" w-20  duration-200 fill-white hover:fill-slate-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4.83582 12L11.0429 18.2071L12.4571 16.7929L7.66424 12L12.4571 7.20712L11.0429 5.79291L4.83582 12ZM10.4857 12L16.6928 18.2071L18.107 16.7929L13.3141 12L18.107 7.20712L16.6928 5.79291L10.4857 12Z"></path>
          </svg>
          <svg
            onClick={handleNext}
            className="w-20 fill-white duration-200 hover:fill-slate-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19.1642 12L12.9571 5.79291L11.5429 7.20712L16.3358 12L11.5429 16.7929L12.9571 18.2071L19.1642 12ZM13.5143 12L7.30722 5.79291L5.89301 7.20712L10.6859 12L5.89301 16.7929L7.30722 18.2071L13.5143 12Z"></path>
          </svg>
        </div>
      </div>

      <Overlay clickedlement={clickedlement} animation={animation} />
      <Canvas name="canvas" onPointerMissed={handleCanvasClick}>
        <Cameracontrol animation={animation} />
        {/* <CameraControls ref={cameraRef} /> */}
        {/* <OrbitControls /> */}

        <Bvh firstHitOnly>
          <Selection>
            {/* <Effectx /> */}
            <OfficeModel
              hoverElement={hoverElement}
              updateHover={updateHover}
              reUpdateHover={reUpdateHover}
              handleClick={handleClick}
              position={[0, -0.35, 1]}
              rotation={[0, degToRad(-180 / 2.4), 0]}
              scale={0.7}
            />
            <BedRoomModel
              position={[0, -2.5, 1]}
              hoverElement={hoverElement}
              handleClick={handleClick}
              updateHover={updateHover}
              reUpdateHover={reUpdateHover}
              handleCanvasClick={handleCanvasClick}
              scale={0.6}
            />
            <BathroomModel
              hoverElement={hoverElement}
              updateHover={updateHover}
              handleClick={handleClick}
              reUpdateHover={reUpdateHover}
              rotation={[0, Math.PI / 1.1, 0]}
              position={[0, -6.1, 0.8]}
              scale={[1.2, 1, 1]}
            />
          </Selection>
        </Bvh>

        <color attach="background" args={["#151520"]} />
        <Environment preset="night" backgroundIntensity={0.1} />
        <Preload />
      </Canvas>
    </div>
  );
}
