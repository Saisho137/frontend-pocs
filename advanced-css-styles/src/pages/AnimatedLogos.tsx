import { Cube3D, Logo3D, Logo3dVariant, Logo3dVariant2, RenderGLB } from "@/components/animated-logos";

const AnimatedLogos = () => {
	return (
		<section>
			<h1>Animated Logos</h1>
			<Cube3D />
			<Logo3D />
			<Logo3dVariant />
			<Logo3dVariant2 />
			<RenderGLB />
		</section>
	);
};

export default AnimatedLogos;
