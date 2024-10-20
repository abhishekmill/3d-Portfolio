import { useState } from "react";
import Images from "./Images";
import { Scroll, ScrollControls } from "@react-three/drei";
import Vertical from "./Vertical";
import { useThree } from "@react-three/fiber";
import About from "./About";
import { Bathroom, Bedroom, Office } from "./Models";

const Scene = () => {
  const [isHorizontal, setIsHorizontal] = useState([true]);
  const viewport = useThree((t) => t.viewport);
  const { height, width } = viewport;
  console.log(height, width);

  const Button = () => (
    <Scroll html>
      <button
        onClick={() => setIsHorizontal(!isHorizontal)}
        className={` w-48 top-10 left-[45vw]  fixed  px-2 py-1 rounded-full bg-yellow-500  text-center`}
      >
        scroll down
      </button>
      <div className="top-[240vh] absolute">
        <About />
      </div>
    </Scroll>
  );

  const Section = () => <Scroll html></Scroll>;

  return (
    <>
      <ScrollControls
        horizontal={isHorizontal}
        dpr={[1, 1.5]}
        damping={0.4}
        pages={3}
        distance={1}
      >
        <Scroll>
          <Images viewport={viewport} />
        </Scroll>
        <Scroll>
          <Vertical />
        </Scroll>

        <Button />
      </ScrollControls>

      <group position={[0, -8, 1]}>
        <Office />
        <Bathroom />
        <Bedroom />
      </group>
    </>
  );
};

export default Scene;
