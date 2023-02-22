/// <reference types="vitest" />
import { defineConfig } from "vite";

import glimmer from "@ash-js/vite-plugin-glimmer";

export default defineConfig({
  plugins: [glimmer()],
  test: {
    environment: "happy-dom",
  },
});
