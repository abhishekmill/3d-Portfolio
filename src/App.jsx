import * as THREE from "three";
import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Preload,
  ScrollControls,
  Scroll,
  
  Image as ImageImpl,
} from "@react-three/drei";
import Images from "./comp/Images";
import Scene from "./comp/Scene";

export default function App() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ fov: 75, position: [0, 0, 5] }}  >
       <Scene/>
        <Preload />
      </Canvas>
    </div>
  );
}
