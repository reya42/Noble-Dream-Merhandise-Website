import React, { useRef } from 'react'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const ShadowCatcher = () => {
    const shadows = useRef()
  return (
    <AccumulativeShadows ref={shadows} temporal frames={60} alphaTest={0.85} scale={1} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -0.039]}>
      <RandomizedLight amount={4} radius={9} intensity={4} ambient={0.25} position={[2, 2, -5]} />
    </AccumulativeShadows>
  )
}

export default ShadowCatcher