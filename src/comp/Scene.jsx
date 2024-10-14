import { useState } from "react";
import Images from "./Images";
import { Scroll, ScrollControls } from "@react-three/drei";

const Scene = () => {
  const [isHorizontal, setIsHorizontal] = useState([true]);

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
          <Images
            setIsHorizontal={setIsHorizontal}
            isHorizontal={isHorizontal}
          />
        </Scroll>
        <Scroll html>
          <div
            className="w-screen   
            
           justify-center flex  h-screen "
          >
            <button
              onClick={() => setIsHorizontal(!isHorizontal)}
              className="  absolute bottom-10 px-3 py-1 rounded-full bg-yellow-500  text-center"
            >
              scroll down
            </button>
          </div>
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default Scene;
