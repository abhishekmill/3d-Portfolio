import { useRef, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { button, useControls } from "leva";
import * as THREE from "three";

const Cameracontrol = () => {
  const { camera, gl } = useThree(); // Access Three.js camera and renderer
  const controlsRef = useRef(); // Reference to OrbitControls
  const lerpDuration = 1.5; // Duration for smooth transitions

  // Animation parameters for different camera positions and targets
  const animationParam = {
    anim0: {
      target: [-0.2861038563479678, -0.41493212624465536, -0.01076793117141741],
      position: [0.4698881127225513, -0.6567904310100844, 3.033901073149795],
    },
    anim1: {
      target: [0.34949783348077756, -0.3137539882326418, 0.07104923480165103],
      position: [-0.6622006346810204, -0.5309268790442155, 3.179943478956814],
    },
    anim2: {
      target: [0.08068517674275053, -2.6452299730054682, 0.8355455931180833],
      position: [0.5600834975779017, -2.399323588662026, 2.283233994068536],
    },
    anim3: {
      target: [-0.20979986240906262, -5.077198048519114, 1.3845695011284183],
      position: [-0.6024951101520235, -4.785438919855276, 3.1507987796932864],
    },
  };

  // Easing function (easeInOutQuad) to smooth out the animation
  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const smoothTransition = (start, end, progress) => {
    return start + (end - start) * progress;
  };

  const animateCamera = (anim) => {
    const initialPosition = new THREE.Vector3().copy(camera.position); // Current camera position
    const initialTarget = new THREE.Vector3().copy(controlsRef.current.target); // Current target position
    const finalPosition = new THREE.Vector3(...anim.position); // Target camera position
    const finalTarget = new THREE.Vector3(...anim.target); // Target look-at position

    let elapsedTime = 0;

    const animate = () => {
      elapsedTime += 0.02;

      // Calculate progress based on easing function
      const progress = Math.min(elapsedTime / lerpDuration, 1); // Ensures the value is between 0 and 1
      const easedProgress = easeInOutQuad(progress); // Apply easing

      // Lerp for smooth transitions between positions and targets with easing
      camera.position.set(
        smoothTransition(initialPosition.x, finalPosition.x, easedProgress),
        smoothTransition(initialPosition.y, finalPosition.y, easedProgress),
        smoothTransition(initialPosition.z, finalPosition.z, easedProgress)
      );

      controlsRef.current.target.set(
        smoothTransition(initialTarget.x, finalTarget.x, easedProgress),
        smoothTransition(initialTarget.y, finalTarget.y, easedProgress),
        smoothTransition(initialTarget.z, finalTarget.z, easedProgress)
      );

      controlsRef.current.update();

      if (progress < 1) {
        // Keep animating until progress reaches 1
        requestAnimationFrame(animate);
      }
    };

    animate(); // Start the animation
  };

  // Leva controls to trigger camera animations
  useControls("animation", {
    animation0: button(() => animateCamera(animationParam.anim0)),
    animation1: button(() => animateCamera(animationParam.anim1)),
    animation2: button(() => animateCamera(animationParam.anim2)),
    animation3: button(() => animateCamera(animationParam.anim3)),
  });

  useEffect(() => {
    animateCamera(animationParam.anim0);
    controlsRef.current.update(); // Sync controls with camera
  }, [camera]);

  return (
    <>
      {/* OrbitControls for camera interaction */}
      <OrbitControls ref={controlsRef} args={[camera, gl.domElement]} />
    </>
  );
};

export default Cameracontrol;
