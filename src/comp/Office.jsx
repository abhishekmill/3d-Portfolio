import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { Select } from "@react-three/postprocessing";
export function OfficeModel({
  hoverElement,
  updateHover,
  reUpdateHover,
  ...props
}) {
  const { nodes, materials } = useGLTF("./office.glb");

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.305}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={720}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Window_Backdrop_0.geometry}
              material={materials.Backdrop}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Window_Books_0.geometry}
              material={materials.Books}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Window_Carpet_0.geometry}
              material={materials["Carpet.003"]}
            />
            <Select enabled={hoverElement === "chair"}>
              <mesh
                // chair/
                name="chair"
                castShadow
                receiveShadow
                geometry={nodes.Window_Chair_0.geometry}
                material={materials.Chair}
                onPointerOver={updateHover}
                onPointerOut={reUpdateHover}
              />
            </Select>

            <Select enabled={hoverElement === "jhoomar"}>
              <mesh
                name="jhoomar"
                castShadow
                receiveShadow
                geometry={nodes.Window_Lights_0.geometry}
                material={materials.Lights}
                onPointerOver={updateHover}
                onPointerOut={reUpdateHover}
              />
            </Select>
            <Select enabled={hoverElement === "painting"}>
              <mesh
                name="painting"
                castShadow
                receiveShadow
                geometry={nodes.Window_Painting_0.geometry}
                material={materials.Painting}
                onPointerOver={updateHover}
                onPointerOut={reUpdateHover}
              />
            </Select>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Window_Plant_0.geometry}
              material={materials.Plant}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Window_Structure_0.geometry}
              material={materials.Structure}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Window_Table_Decoration_0.geometry}
              material={materials.Table_Decoration}
            />
            <Select enabled={hoverElement === "table"}>
              <mesh
                name="table"
                castShadow
                receiveShadow
                geometry={nodes.Window_Table_0.geometry}
                material={materials.Table}
                onPointerOver={updateHover}
                onPointerOut={reUpdateHover}
              />
            </Select>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Window_Window_0.geometry}
              material={materials.Window}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./office.glb");
