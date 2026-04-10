import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const base = process.env.BASE_PATH || "/";

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    strictPort: false,
  },
  build: {
    outDir: "dist",
    minify: "esbuild",
    sourcemap: false,
  },
  preview: {
    port: 4173,
  },
});
