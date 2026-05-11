import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Extrude } from "@react-three/drei";
import * as THREE from "three";

export default function Scene() {
	return (
		<Canvas camera={{ position: [0, 0, 300] }}>
			<ambientLight intensity={0.5} />
			<directionalLight position={[0, 0, 1]} intensity={1} />
			<Logo3D />
		</Canvas>
	);
}

function Logo3D() {
	const ref = useRef();

	// Rotación automática en el eje Y
	useFrame(() => {
		ref.current.rotation.y += 0.01;
	});

	// Define el contorno del logo en 2D
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

	// Configuración de extrusión para darle profundidad
	const extrudeSettings = {
		depth: 20,
		bevelEnabled: false,
	};

	return (
		<mesh ref={ref}>
			<Extrude args={[shape, extrudeSettings]}>
				<meshStandardMaterial color="#009245" />
			</Extrude>
		</mesh>
	);
}
