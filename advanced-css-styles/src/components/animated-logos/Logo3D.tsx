import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { Extrude, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

export default function Scene() {
	return (
		<Canvas camera={{ position: [0, 0, 300] }}>
			<ambientLight intensity={0.5} />
			<directionalLight position={[0, 0, 1]} intensity={1} />
			<Logo3D />
			<OrbitControls />
		</Canvas>
	);
}

function Logo3D() {
	const shape = useRef(new THREE.Shape());

	shape.current.moveTo(239.98, 96.04);
	shape.current.lineTo(284.63, 153.21);
	shape.current.lineTo(196.78, 128.07);
	shape.current.lineTo(140.59, 229.34);
	shape.current.lineTo(149.33, 139.61);
	shape.current.lineTo(74.48, 177.39);
	shape.current.lineTo(117.79, 129.66);
	shape.current.lineTo(0, 143.01);
	shape.current.lineTo(116.92, 100.97);
	shape.current.lineTo(92.82, 70.14);
	shape.current.lineTo(153.2, 72.9);
	shape.current.lineTo(147.62, 0);
	shape.current.lineTo(182.54, 65.26);
	shape.current.lineTo(219.33, 15.83);
	shape.current.lineTo(215.46, 62.45);
	shape.current.lineTo(348.42, 11.91);
	shape.current.lineTo(239.98, 96.04);

	return (
		<mesh position={[-175, -120, 0]}>
			<Extrude args={[shape.current, { depth: 20, bevelEnabled: true, bevelThickness: 5, bevelSize: 2 }]} />
			<meshStandardMaterial color="green" />
		</mesh>
	);
}
