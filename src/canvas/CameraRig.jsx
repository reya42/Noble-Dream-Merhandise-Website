import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const CameraRig = ({ children }) => {
  const group = useRef();

  useFrame((state, delta) => {
    //Kamera Pozisyonu
    easing.damp3(state.camera.position, [0,0,0.2], 0.25, delta)

    // Kamera rotasyonu
    
    easing.dampE( group.current.rotation, [-state.pointer.y / 5 +0.3, state.pointer.x / 2.4, 0], 0.25, delta)
  })


  return <group ref={group}>{children}</group>
}

export default CameraRig