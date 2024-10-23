import { useThree } from "@react-three/fiber";
import {
  Bloom,
  EffectComposer,
  Outline,
  ToneMapping,
} from "@react-three/postprocessing";
import { useControls } from "leva";

function Effectx() {
  const { size } = useThree();

  const bloomconfig = useControls("bloom", {
    enabled: true,
    luminanceThreshold: {
      value: 0.5,
      min: 0,
      max: 2,
      step: 0.1,
    },
    intensity: {
      value: 0.4,
      min: 0,
      max: 2,
      step: 0.1,
    },
    mipmapBlur: true,
  });

  return (
    <EffectComposer
      stencilBuffer
      disableNormalPass
      autoClear={false}
      multisampling={4}
    >
      {bloomconfig.enabled && <Bloom {...bloomconfig} />}

      <Outline
        visibleEdgeColor="white"
        hiddenEdgeColor="white"
        blur
        width={size.width * 1.25}
        edgeStrength={10}
      />
      <ToneMapping />
    </EffectComposer>
  );
}

export default Effectx;
