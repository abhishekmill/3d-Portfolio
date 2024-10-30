import { useLoader, useThree } from "@react-three/fiber";
import {
  Bloom,
  BrightnessContrast,
  EffectComposer,
  HueSaturation,
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
  // const brightnessconfig = useControls(
  //   "brightness",

  //   {
  //     enabled: true,
  //     brightness: {
  //       value: 0.02,
  //       min: 0,
  //       max: 5,
  //       step: 0.01,
  //     },
  //     contrast: {
  //       value: 0.06,
  //       min: -3,
  //       max: 5,
  //       step: 0.01,
  //     },
  //   }
  // );
  // const hueconfig = useControls(
  //   "hue",

  //   {
  //     hue: {
  //       value: 0.5,
  //       min: 0,
  //       max: 5,
  //       step: 0.01,
  //     },
  //     saturation: {
  //       value: 0.4,
  //       min: 0,
  //       max: 5,
  //       step: 0.01,
  //     },
  //   }
  // );

  return (
    <EffectComposer
      stencilBuffer
      disableNormalPass
      autoClear={false}
      multisampling={4}
    >
      {false && (
        <Bloom
          luminanceThreshold={0.3}
          intensity={0.25}
          mipmapBlur={true}
          // {...bloomconfig}
        />
      )}
      <BrightnessContrast contrast={0.06} brightness={0.02} />
      {/* <HueSaturation saturation={0.37} /> */}

      <Outline
        visibleEdgeColor="white"
        hiddenEdgeColor="white"
        polygonOffsetFactor={100}
        blur
        transparent
        width={size.width * 1.25}
        edgeStrength={10}
      />
      {/* <LUT lut={texture} /> */}
    </EffectComposer>
  );
}

export default Effectx;
