import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/remesh/dist/',
  plugins: [reactRefresh(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      "remesh": resolve(__dirname, '../../packages/remesh/src'),
      "remesh-react": resolve(__dirname, '../../packages/remesh-react/src'),
      "remesh-redux-devtools": resolve(__dirname, '../../packages/remesh-redux-devtools/src'),
    }
  },
  build: {
    outDir: resolve(__dirname, '../../dist'),
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        '7guis': resolve(__dirname, '7guis/index.html'),
        'todo-mvc': resolve(__dirname, 'todo-mvc/index.html'),
      },
    },
  },
});
