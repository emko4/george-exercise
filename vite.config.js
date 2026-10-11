import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The build goes straight into site/, the folder the server is handed
// (.github/workflows/deploy.yml): building is what changes the page.
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'site',
    emptyOutDir: true,
    sourcemap: true,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.js',
  },
});
