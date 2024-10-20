function Video() {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: "./vid/gof.mp4",
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  );
  useEffect(() => void video.play(), [video]);
  return (
    <mesh position={[0, -6, 2]} rotation={[0, 0, 0]} scale={[7, 3, 1]}>
      <planeGeometry />
      <meshBasicMaterial toneMapped={false}>
        {/* <VideoTexture src={"./vid/gof.mp4"} /> */}

        <videoTexture
          attach="map"
          args={[video]}
          encoding={Three.sRGBEncoding}
        />
      </meshBasicMaterial>
    </mesh>
  );
}

export default Video;
