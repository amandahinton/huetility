/// <reference types="vitest" />
import { defineConfig } from "vite";
import type { UserConfig as VitestUserConfigInterface } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

const vitestConfig: VitestUserConfigInterface = {
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/tests/setup.ts",
    css: true,
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  base: "/huetility/",
  plugins: [react()],
  test: vitestConfig.test,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      components: path.resolve(__dirname, "./src/components/"),
      contexts: path.resolve(__dirname, "./src/contexts/"),
      tests: path.resolve(__dirname, "./src/tests/"),
      types: path.resolve(__dirname, "./src/types/"),
      utils: path.resolve(__dirname, "./src/utils/"),
    },
  },
});
