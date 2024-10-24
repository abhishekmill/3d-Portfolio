import { useLoader, useThree } from "@react-three/fiber";
import {
  Bloom,
  EffectComposer,
  LUT,
  Outline,
  ToneMapping,
  Vignette,
} from "@react-three/postprocessing";
import { useControls } from "leva";
import { LUTCubeLoader } from "postprocessing";

function Effectx() {
  const { size } = useThree();
  const texture = useLoader(LUTCubeLoader, "/luts.cube");
  // const bloomconfig = useControls(
  //   "bloom",

  //   {
  //     enabled: true,
  //     luminanceThreshold: {
  //       value: 0.5,
  //       min: 0,
  //       max: 2,
  //       step: 0.1,
  //     },
  //     intensity: {
  //       value: 0.4,
  //       min: 0,
  //       max: 2,
  //       step: 0.1,
  //     },
  //     mipmapBlur: true,
  //   }
  // );

  return (
    <EffectComposer
      stencilBuffer
      disableNormalPass
      autoClear={false}
      multisampling={4}
    >
      {true && (
        <Bloom
          luminanceThreshold={0.45}
          intensity={1}
          mipmapBlur={true}
          // {...bloomconfig}
        />
      )}

      <Outline
        visibleEdgeColor="white"
        hiddenEdgeColor="white"
        polygonOffsetFactor={100}
        blur
        transparent
        width={size.width * 1.25}
        edgeStrength={10}
      />
      <ToneMapping />
      {/* <LUT lut={texture} /> */}
    </EffectComposer>
  );
}

export default Effectx;
