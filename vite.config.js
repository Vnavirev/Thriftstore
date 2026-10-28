import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'thrift-store-react' with your exact GitHub repository name
export default defineConfig({
  plugins: [react()],
  base: '/thrift-store-react/',
});