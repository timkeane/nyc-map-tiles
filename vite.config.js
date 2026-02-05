import {defineConfig} from 'vite';

const config = {
  base: '',
  server: {
    host: true,
  },
  build: {
    outDir: './dist'
  }
};

export default defineConfig(config);
