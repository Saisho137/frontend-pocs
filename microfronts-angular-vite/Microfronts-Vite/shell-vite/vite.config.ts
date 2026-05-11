import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
	plugins: [
		react(),
		federation({
			name: "container",
			remotes: {
				products: "http://localhost:8081/remoteEntry.js",
				mf_angular14: "http://localhost:4201/remoteEntry.js",
				mfAngular17: "http://localhost:4200/remoteEntry.js",
				remoteApp: "http://localhost:4173/assets/remoteEntry.js",
			},
			shared: ["react", "react-dom"],
		}),
	],
	build: {
		modulePreload: false,
		target: "esnext",
		minify: false,
		cssCodeSplit: false,
	},
});
