import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
        proxy: {
          '/api/createPayment': {
            target: 'https://us-central1-doctorinan.cloudfunctions.net',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api\/createPayment/, '/createPayment'),
          },
          '/api/executePayment': {
            target: 'https://us-central1-doctorinan.cloudfunctions.net',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api\/executePayment/, '/executePayment'),
          },
          '/api/queryPayment': {
            target: 'https://us-central1-doctorinan.cloudfunctions.net',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api\/queryPayment/, '/queryPayment'),
          },
        },
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      publicDir: 'static',
      build: {
        outDir: 'public',
        emptyOutDir: false,
      }
    };
});
