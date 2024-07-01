import React from 'react';
import { Canvas } from '@react-three/fiber'
import { Environment } from '@react-three/drei';

import CameraRig from './CameraRig';
import Watch from './Watch';
import ShadowCatcher from './ShadowCatcher';

const CanvasRenderer = React.memo(() => {
    return (
      <div className='w-full h-full'>
        <Canvas shadows camera={{ position: [0, 0, 0], fov: 50 }} flat linear gl={{ preserveDrawingBuffer: true }}
                className="w-full max-w-full h-full transition-all ease-in">
            <ambientLight intensity={1} />
            <Environment preset="city" />
            <CameraRig>
                <ShadowCatcher />
                <Watch parentSize={1.3} parentPose={[0, -0.03, 0]} />
            </CameraRig>
        </Canvas>
      </div>
    );
  });
  
  export default CanvasRenderer;