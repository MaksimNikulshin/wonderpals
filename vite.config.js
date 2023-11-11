import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const root = process.cwd()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(root, 'src'),
      pages: path.resolve(root, 'src/pages'),
      store: path.resolve(root, 'src/store'),
      components: path.resolve(root, 'src/components'),
      images: path.resolve(root, 'src/assets/images'),
      styles: path.resolve(root, 'src/assets/styles'),
      fonts: path.resolve(root, 'src/assets/fonts'),
      helpers: path.resolve(root, 'src/helpers'),
    },
  },
})
