import { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { button, useControls } from "leva";
import * as THREE from "three";
import { easing } from "maath";

const Cameracontrol = ({ animation }) => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();
  const lerpDuration = 1.9; // Duration for smooth transitions
  const [anim, setAnim] = useState(false);
  const [angleStep, setAngleStep] = useState(0);
  const [angle, setAngle] = useState(0);
  const [isMobile, setIsMobile] = useState("false");

  const speedFactor = 0.01; // Control speed of rotation
  // Animation parameters for different camera positions and targets
  const animationParam = {
    anim0: {
      target: [
        0.09845601044299077, -0.05784483214745292, -0.016658098145246335,
      ],
      position: [1.4313845108525005, -0.5712337056803873, 3.23537598807995],
    },
    anim1: {
      target: [
        0.19966117031727332, -0.15418797624161293, 0.0048186947585095175,
      ],
      position: [0.8734616995338282, -0.36482528590900754, 3.4858554643496444],
    },
    anim2: {
      target: [0.09441432548287099, -2.5869219470870406, -0.14608406822428832],
      position: [0.3600904907234163, -2.5869219470870406, 2.363088417611424],
    },
    anim3: {
      target: [0.3276577497900221, -4.6528068229667285, -0.8309161533660673],
      position: [0.6082816839145214, -4.746467506417783, 2.708641743407749],
    },
  };

  // Easing function (easeInOutQuad) to smooth out the animation
  const easeInOutQuad = (t) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const smoothTransition = (start, end, progress) => {
    return start + (end - start) * progress;
  };

  const animateCamera = async (anim) => {
    setAnim(true); // Stop the autorotate while the camera is animating
    const initialPosition = new THREE.Vector3().copy(camera.position); // Current camera position
    const initialTarget = new THREE.Vector3().copy(controlsRef.current.target); // Current target position
    const finalPosition = new THREE.Vector3(...anim.position); // Target camera position
    const finalTarget = new THREE.Vector3(...anim.target); // Target look-at position

    let elapsedTime = 0;

    const animate = () => {
      elapsedTime += 0.02;

      // Calculate progress based on easing function
      const progress = Math.min(elapsedTime / lerpDuration, 1); // Ensure progress is between 0 and 1
      const easedProgress = easeInOutQuad(progress); // Apply easing function

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
        // Continue animating
        requestAnimationFrame(animate);
      } else {
        // Animation finished
        setAnim(false);
      }
    };

    animate();
  };

  useEffect(() => {
    if (animation) {
      animateCamera(animationParam[animation]);
    }
  }, [animation]);

  useFrame((state, delta) => {
    const targetLookAt = new THREE.Vector3(0, -1, 0);
    if (false) {
      // Smooth zoom and rotation for desktop
      easing.damp3(
        state.camera.position,
        [
          state.pointer.x * 1,
          -0.6 + state.pointer.y / 2,
          5 + Math.atan(state.pointer.x * 2),
        ],
        0.7,
        delta
      );
      // camera.lookAt(targetLookAt); // Look at the center
    } else {
      if (!anim) {
        // Increment the angle step for rotation
        setAngleStep((prevStep) => prevStep + speedFactor);

        // Calculate the angle using sin and the incremented step
        setAngle((Math.sin(angleStep) * Math.PI) / 13);

        if (controlsRef.current) {
          controlsRef.current.setAzimuthalAngle(angle); // Rotate around Y-axis
          controlsRef.current.update(); // Update the controls to apply changes
        }
      }
    }
  });

  // useControls("helper angle", {
  //   getAngle: button(() => {
  //     console.log("Angle:", controlsRef.current.getAzimuthalAngle());
  //   }),
  // });

  useEffect(() => {
    animateCamera(animationParam.anim0); // Initialize camera position
    controlsRef.current.update(); // Sync controls with camera
  }, [camera]);

  return (
    <>
      {/* OrbitControls for camera interaction */}
      <OrbitControls
        dampingFactor={0.01}
        maxDistance={3}
        minDistance={2.4}
        enablePan={false}
        minPolarAngle={Math.PI / 2.3}
        maxPolarAngle={Math.PI / 1.7}
        ref={controlsRef}
        args={[camera, gl.domElement]}
      />
    </>
  );
};

export default Cameracontrol;
