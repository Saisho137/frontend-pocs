import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Scene() {
	return (
		<Canvas camera={{ position: [0, 0, 5] }}>
			<ambientLight intensity={0.5} />
			<directionalLight position={[2, 2, 5]} intensity={1} />
			<RotatingLogo />
		</Canvas>
	);
}

const RotatingLogo = () => {
	const meshRef = useRef<THREE.Mesh>(null);

	useFrame(() => {
		if (meshRef.current) {
			meshRef.current.rotation.y += 0.01; // Velocidad de rotación
		}
	});

	return (
		<mesh ref={meshRef} scale={[1.5, 1.5, 1.5]}>
			<boxGeometry args={[2, 2, 2]} />
			<meshStandardMaterial color="purple" />
		</mesh>
	);
};
