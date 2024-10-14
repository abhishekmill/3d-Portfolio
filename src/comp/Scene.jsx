import Images from "./Images";
import { Scroll, ScrollControls } from "@react-three/drei";

const Scene = () => {
  return (
    <>
      <ScrollControls horizontal dpr={[1, 1.5]} damping={.4} pages={3} distance={1} >
        <Scroll>
          <Images />
        </Scroll>
      </ScrollControls>
    </>
  );
};

export default Scene;
