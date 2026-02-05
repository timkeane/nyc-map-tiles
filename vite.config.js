import {defineConfig} from 'vite';

const config = {
  base: '',
  server: {
    host: true,
  },
  build: {
    outDir: './dist',
    rollupOptions: {
      input: {
        main: 'index.html',
        tms: 'tms.html',
        login: 'wmts.html'
      },
    },
  }
};

export default defineConfig(config);
