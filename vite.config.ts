import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nitro } from "nitro/vite";

const config = defineConfig({
	server: {
		host: true,
		allowedHosts: ["crablike-numeric-backtrack.ngrok-free.dev"],
	},

	resolve: { tsconfigPaths: true },
	plugins: [
		devtools(),
		tailwindcss(),
		tanstackStart(),
    nitro({preset: "vercel"}),
		viteReact(),
		babel({ presets: [reactCompilerPreset()] }),
	],
});

export default config;
