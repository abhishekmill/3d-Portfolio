import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { degToRad } from "three/src/math/MathUtils.js";

const Office = ({ props }) => {
  const gltf = useLoader(GLTFLoader, "./office.glb");
  return (
    <>
      <primitive
        object={gltf.scene}
        props={props}
        scale={0.7}
        position={[0,-.35,0]}
        rotation={[0, degToRad(-180 / 2.4), 0]}
      />
    </>
  );
};

const Bedroom = ({ props }) => {
  const gltf = useLoader(GLTFLoader, "./bedroom.glb");
  return (
    <>
      <primitive
        object={gltf.scene}
        props={props}
        position={[0, -2.5, 0]}
        scale={0.6}
      />
    </>
  );
};

const Bathroom = (props) => {
  const gltf = useLoader(GLTFLoader, "./bathroom.glb");
  return (
    <>
      <primitive
        object={gltf.scene}
        props={props}
        rotation={[0, Math.PI / 1.1, 0]}
        position={[0, -6.1, 0]}
        scale={[1.2, 1, 1]}
      />
    </>
  );
};

export { Bathroom, Bedroom, Office };
