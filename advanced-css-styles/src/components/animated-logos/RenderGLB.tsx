import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export default function Scene() {
	return (
		<Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
			<ambientLight intensity={0.5} />
			<directionalLight position={[2, 5, 2]} intensity={1} />
			<Model />
			<OrbitControls />
		</Canvas>
	);
}

function Model() {
	const { scene } = useGLTF("/assets/sci-fi_container.glb"); // Carga el modelo
	return <primitive object={scene} scale={1} />;
}
