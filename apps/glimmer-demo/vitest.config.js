/// <reference types="vitest" />
import { defineConfig } from 'vite';

import glimmer from '@ash-js/vite-plugin-glimmer';

export default defineConfig({
  plugins: [glimmer()],
  test: {
    include: ['**/*.{test,spec}.{gjs,gts}'],
    environment: 'happy-dom',
  },
});
