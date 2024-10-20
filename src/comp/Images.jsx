import { Image, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
const Images = ({ viewport }) => {
  const { height, width } = viewport;

  const scroll = useScroll();
  const img = useRef();


  const Slides = ({ urls, ...props }) => {
    return (
      <group ref={img} {...props}>
        <Image
          url={urls[0]}
          scale={[width / 8, height / 2.5]}
          position={[-width / 5, 0, 2]}
        />
        <Image
          url={urls[1]}
          scale={[width / 2, height / 2]}
          position={[0, 0 * 1.2, 0]}
        />
        <Image
          url={urls[2]}
          scale={[width / 8, height / 2.5]}
          position={[width / 5, 0 * 1.2, 2]}
        />
      </group>
    );
  };

  return (
    <group ref={img}>
      <Slides
        urls={["./images/img1.jpg", "./images/img1.jpg", "./images/img1.jpg"]}
      />
      <Slides
        position={[width / 1.3, 0, 0]}
        urls={["./images/img2.jpg", "./images/img2.jpg", "./images/img2.jpg"]}
      />
      <Slides
        position={[(2 * width) / 1.3, 0, 0]}
        urls={["./images/img3.jpg", "./images/img3.jpg", "./images/img3.jpg"]}
      />
    </group>
  );
};

export default Images;
