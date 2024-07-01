import { Canvas } from '@react-three/fiber'
import { Environment, Center } from '@react-three/drei';
import { useSnapshot } from 'valtio';

import AnimationCameraRig from './AnimationCameraRig';
import WatchAnimator from './WatchAnimator';
import state from '../store';


const AnimationCanvas = () => {
    const snap = useSnapshot(state)
    return (
        <Canvas shadows camera={{ position: [0, 0, 0], fov: 50 }} 
            gl={{ preserveDrawingBuffer: true }}
        >
            <ambientLight intensity={0.5} />
            <Environment preset="city" />

            <AnimationCameraRig>
                <WatchAnimator/>
            </AnimationCameraRig>
        </Canvas>
    )
}

export default AnimationCanvas