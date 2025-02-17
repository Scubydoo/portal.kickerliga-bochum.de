import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    include: ["**/*.unit.js"],
    coverage: {
      provider: "istanbul",
      exclude: [
        "dist",
        "**/index.js",
        "**/main.js",
        "**/*.vue",
        "vite.config.mjs",
        "cypress.config.js",
        "tests",
      ],
      all: true,
    },
  },
});
