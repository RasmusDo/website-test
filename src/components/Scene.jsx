import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Float, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

const Logo = () => {
    const groupRef = useRef();

    // Load the logo7.glb model
    const { scene } = useGLTF('/website-test/models/logo7.glb');

    // Animate rotation - Look at cursor
    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        // Get mouse position (normalized -1 to 1)
        const mouseX = state.mouse.x;
        const mouseY = state.mouse.y;

        // Smoothly rotate towards mouse position
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, mouseX * 0.5, 0.1);
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -mouseY * 0.5, 0.1);

        // Gentle floating
        groupRef.current.position.y = Math.sin(t * 0.5) * 0.1;
    });

    return (
        <group ref={groupRef}>
            <primitive object={scene} scale={10} />
        </group>
    );
};

const Scene = () => {
    return (
        <div style={{ width: '100%', height: '100vh', background: 'transparent' }}>
            <Canvas>
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[0, 0, 6]} />
                    <Environment preset="studio" />

                    {/* Lighting for the 3D model - Slightly lowered intensity */}
                    <ambientLight intensity={0.4} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={0.8} />
                    <pointLight position={[-10, -10, -10]} intensity={0.4} color="#C5A059" />

                    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
                        <Logo />
                    </Float>
                </Suspense>
            </Canvas>
        </div>
    );
};

// Preload the model for better performance
useGLTF.preload('/website-test/models/logo7.glb');

export default Scene;