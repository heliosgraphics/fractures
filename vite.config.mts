/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import type { UserConfig } from "vite"

interface VitestConfigExport extends UserConfig {
	test: any
}

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: "jsdom",
		coverage: {
			reporter: ["html"],
		},
		threads: false,
		css: true,
	},
} as VitestConfigExport)
