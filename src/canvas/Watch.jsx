import React from 'react'
import { useSnapshot } from 'valtio';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

import state from '../store';
import { useState } from 'react';
import { useRef } from 'react';

const Watch = ({parentPose = [0,0,0], parentSize =1}) => {
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/watch.glb');
  const rotateAnimationRef = useRef()
  const stateString = JSON.stringify(snap);

  useFrame((state, delta) => {
    easing.dampC(materials.strap.color, snap.strapColor, 0, delta)
    easing.dampC(materials.case.color, snap.caseColor, 0.25, delta)
    easing.dampC(materials.case_2.color, snap.case2Color, 0.25, delta)
  });
  
  return (
    <group key={stateString} ref={rotateAnimationRef} scale={parentSize} position={parentPose}>
        <mesh receiveShadow={true} castShadow geometry={nodes.Strap.geometry} material={materials.strap}
            material-roughness={0.6}
            />
        
        <mesh receiveShadow={true} castShadow geometry={nodes.Screen.geometry} material={materials.screen}
            material-roughness={0.145}
            />
        
        <mesh receiveShadow={true} castShadow geometry={nodes.Rivet.geometry} material={materials.rivet}
            material-roughness={0.07}
            material-metallic={1}
            />
        
        <mesh receiveShadow={true} castShadow geometry={nodes.Case_2.geometry} material={materials.case_2}
            material-roughness={0.24}
            material-metallic={1}
            />
        
        <mesh receiveShadow={true} castShadow geometry={nodes.Case.geometry} material={materials.case}
            material-roughness={0.2}
            material-metallic={0.58}
            />
        
        <mesh receiveShadow={true} castShadow geometry={nodes.Button.geometry} material={materials.button}
            material-roughness={0.4}
            />
        
        <mesh receiveShadow={true} castShadow geometry={nodes.Cap.geometry} material={materials.case_2}
            material-roughness={0.24}
            material-metallic={1}
            />
    </group>
  )
}

export default Watch