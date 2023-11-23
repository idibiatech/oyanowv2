import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
// 	// base: "/oyanowv2",
// 	base: process.env.NODE_ENV === "production" ? "/" : "/",
// 	plugins: [react()],
// 	base: "/",
// });

// vitejs.dev/config/
export default defineConfig(({ command }) => {
	const config = {
		plugins: [react()],
		base: "/",
	};

	if (command !== "serve") {
		config.base = "/oyanowv2";
	}

	return config;
});
