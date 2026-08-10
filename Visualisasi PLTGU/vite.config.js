import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  server: {
    port: 3000,
    host: true,
  },
  // Semua asset statis (gambar, SVG, PNG) ada di folder public/
  publicDir: 'public',

  // Multi-Page App: index.html + mapper.html
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mapper: resolve(__dirname, 'mapper.html'),
      },
    },
  },
});
