import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
	server: {
		port: 5001,
	},
	plugins: [
		react(),
		federation({
			name: "remoteApp",
			filename: "remoteEntry.js",
			exposes: {
				"./RemoteComponent": "./src/RemoteComponent.tsx",
				"./Input": "./src/Input.tsx",
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
