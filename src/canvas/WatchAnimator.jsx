import React from 'react'
import { useSnapshot } from 'valtio';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import state from '../store';
import { useState } from 'react';
import { useRef } from 'react';

const Watch = () => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/watch.glb');
  const rotateAnimationRef = useRef()
  const stateString = JSON.stringify(snap);

  useState(()=>{
    console.log(nodes);
    console.log(materials)
  })

  useFrame((state, delta) => {
    const rotationSpeed = 1;  
    rotateAnimationRef.current.rotation.y += rotationSpeed * delta;
  });
  
  return (
    <group key={stateString} ref={rotateAnimationRef} scale={1.5} position={[0,0,0]}>
        <mesh castShadow geometry={nodes.Strap.geometry} material={materials.strap}
            material-roughness={0.6}
            />
        
        <mesh castShadow geometry={nodes.Screen.geometry} material={materials.screen}
            material-roughness={0.145}
            />
        
        <mesh castShadow geometry={nodes.Rivet.geometry} material={materials.rivet}
            material-roughness={0.07}
            material-metallic={1}
            />
        
        <mesh castShadow geometry={nodes.Case_2.geometry} material={materials.case_2}
            material-roughness={0.24}
            material-metallic={1}
            />
        
        <mesh castShadow geometry={nodes.Case.geometry} material={materials.case}
            material-roughness={0.2}
            material-metallic={0.58}
            />
        
        <mesh castShadow geometry={nodes.Button.geometry} material={materials.button}
            material-roughness={0.4}
            />
            
        <mesh castShadow geometry={nodes.Cap.geometry} material={materials.case_2}
            material-roughness={0.24}
            material-metallic={1}
            />
    </group>
  )
}

export default Watch