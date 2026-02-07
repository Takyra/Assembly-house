import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": 'src/',
      "assets": 'src/assets',
      "components": 'src/components',
      "constants": 'src/constants',
      "modules": 'src/modules',
      "pages": 'src/pages',
    }
  }
})
