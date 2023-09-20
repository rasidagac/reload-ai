import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@config": path.resolve(__dirname, "./src/config"),
      "@container": path.resolve(__dirname, "./src/container"),
    },
  },
});
