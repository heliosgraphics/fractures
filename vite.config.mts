/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import type { InlineConfig } from 'vitest';
import type { UserConfig } from 'vite';

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      reporter: ['text'],
    },
    threads: true
  }
} as VitestConfigExport)

