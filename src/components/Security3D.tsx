import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, MeshWobbleMaterial, Torus, Box } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ position, color, type }: { position: [number, number, number], color: string, type: 'sphere' | 'torus' | 'box' }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      {type === 'sphere' && (
        <Sphere ref={meshRef} args={[1, 32, 32]} position={position}>
          <MeshDistortMaterial color={color} speed={2} distort={0.3} />
        </Sphere>
      )}
      {type === 'torus' && (
        <Torus ref={meshRef} args={[0.8, 0.3, 16, 100]} position={position}>
          <MeshWobbleMaterial color={color} speed={1} factor={0.6} />
        </Torus>
      )}
      {type === 'box' && (
        <Box ref={meshRef} args={[1.2, 1.2, 1.2]} position={position}>
          <meshStandardMaterial color={color} wireframe />
        </Box>
      )}
    </Float>
  );
};

export const Security3D = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
        
        <FloatingShape position={[-3, 2, -2]} color="#ff0000" type="sphere" />
        <FloatingShape position={[3, -2, -1]} color="#1a1a2e" type="torus" />
        <FloatingShape position={[0, 0, -3]} color="#ffffff" type="box" />
        
        <gridHelper args={[20, 20, 0x444444, 0x222222]} rotation={[Math.PI / 2, 0, 0]} position={[0, 0, -5]} />
      </Canvas>
    </div>
  );
};
