import {defineConfig} from "vite";

export default defineConfig({
	base: "/scuba-diving/",
	build: {
		sourcemap: true,
		// Reduce bloat from legacy polyfills.
		target: "esnext",
		// Leave minification up to applications.
		minify: false,
		assetsDir: './'
	},
	plugins: []
})