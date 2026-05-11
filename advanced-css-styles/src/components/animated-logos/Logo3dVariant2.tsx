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

	const shape = new THREE.Shape();
	shape.moveTo(239.98, 96.04);
	shape.lineTo(284.63, 153.21);
	shape.lineTo(196.78, 128.07);
	shape.lineTo(140.59, 229.34);
	shape.lineTo(149.33, 139.61);
	shape.lineTo(74.48, 177.39);
	shape.lineTo(117.79, 129.66);
	shape.lineTo(0, 143.01);
	shape.lineTo(116.92, 100.97);
	shape.lineTo(92.82, 70.14);
	shape.lineTo(153.2, 72.9);
	shape.lineTo(147.62, 0);
	shape.lineTo(182.54, 65.26);
	shape.lineTo(219.33, 15.83);
	shape.lineTo(215.46, 62.45);
	shape.lineTo(348.42, 11.91);
	shape.lineTo(239.98, 96.04);

	const extrudeSettings = {
		depth: 10,
		bevelEnabled: true,
		bevelSegments: 2,
		steps: 2,
		bevelSize: 1,
		bevelThickness: 1,
	};
	/* const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
	const material = new THREE.MeshStandardMaterial({ color: "#009245", shininess: 100 }); */

	useFrame(() => {
		if (meshRef.current) {
			meshRef.current.rotation.y += 0.01;
		}
	});

	return (
		<mesh ref={meshRef} scale={[0.02, 0.02, 0.02]}>
			<extrudeGeometry args={[shape, extrudeSettings]} />
			<meshStandardMaterial color="#009245" shininess={100} />
		</mesh>
	);
};
