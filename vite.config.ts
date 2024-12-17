import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  plugins: [
    react(),
    svgr(),
  ],
  server: {
    port: 4006,
  },
  base: `/layout`,
})
