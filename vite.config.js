import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import stylelint from 'vite-plugin-stylelint';
import ESLintPlugin from '@modyqyw/vite-plugin-eslint';
import path from 'path';

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [
    react(),
    stylelint({
      fix: true,
    }),
    ESLintPlugin({
      fix: true,
    }),
  ],
});
