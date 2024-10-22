import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Select } from "@react-three/postprocessing";
export function BedRoomModel(props) {
  const { nodes, materials } = useGLTF("./bedroom.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.094}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[2721.36, 3174.919, 1814.24]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bedroom_Bedroom_0.geometry}
              material={materials["Bedroom.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bedroom_Bedroom_0001.geometry}
              material={materials["Bedroom.002"]}
            />
            <mesh
              name="mat"
              castShadow
              receiveShadow
              geometry={nodes.Bedroom_Carpet_0.geometry}
              material={materials["Carpet.002"]}
            />
            <mesh
              name="foam"
              castShadow
              receiveShadow
              geometry={nodes.Bedroom_Duvet_0.geometry}
              material={materials["Duvet.002"]}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Bedroom_Windows_0.geometry}
              material={materials["Windows.002"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./bedroom.glb");
