import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact, { reactCompilerPreset } from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

const config = defineConfig({
	server: {
		host: true,
		allowedHosts: [
			"crablike-numeric-backtrack.ngrok-free.dev",
			".trycloudflare.com",
		],
	},

	resolve: { tsconfigPaths: true },
	plugins: [
		devtools(),
		tailwindcss(),
		tanstackStart(),
		nitro({}), // preset removed — auto-detects on Vercel's build, stays plain in local dev
		viteReact(),
		babel({ presets: [reactCompilerPreset()] }),
	],
});

export default config;
