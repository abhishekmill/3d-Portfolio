import { Box, Image, RoundedBox, VideoTexture } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const Vertical = () => {
  const viewport = useThree((t) => t.viewport);
  const { height, width } = viewport;

  return (
    <group>
      <group position={[-3, -width + 0.5, 0]} rotation={[0, Math.PI / 4, 0]}>
        <ambientLight />
        <directionalLight
          position={[-5, 5, 5]}
          castShadow
          shadow-mapSize={1024}
        />
        <Box
          position={[0, -1, 0]}
          rotation={[-0.5 * Math.PI, 0, 0]}
          scale={[10, 10, 1, 1]}
        >
          {" "}
          <shadowMaterial transparent opacity={0.2} />
        </Box>
      </group>
    </group>
  );
};

export default Vertical;
