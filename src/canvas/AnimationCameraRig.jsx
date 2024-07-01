import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from 'valtio';

import state from '../store';

const AnimationCameraRig = ({ children }) => {
  const group = useRef();
  const snap = useSnapshot(state);

  useFrame((state, delta) => easing.damp3(state.camera.position, [0, .05, 0.16], 0, delta))
  

  return <group ref={group}>{children}</group>
}

export default AnimationCameraRig