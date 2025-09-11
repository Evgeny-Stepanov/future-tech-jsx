import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import svgr from "vite-plugin-svgr";

const __dirname = dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
	plugins: [react(), svgr()],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				contactUs: resolve(__dirname, "contact-us.html"),
			},
		},
	},
});
