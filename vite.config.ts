/* eslint-disable @typescript-eslint/quotes */
import { defineConfig } from 'vite'
import federation from "@originjs/vite-plugin-federation"
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

const LOCAL_ENV_PORT = 40100
const LAYOUT_PORT = process.env.NODE_ENV === `production` ? LOCAL_ENV_PORT : 4006

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  server: {
    origin: `http://localhost:${LAYOUT_PORT}`,
    port: LAYOUT_PORT,
  },
  // base: `/`, // for local docker
  base: `/layout`, // for local-env
  plugins: [
    react(),
    svgr(),
    federation({
      // Unique name for the application
      name: "inner_circle_layout_ui",
      filename: "inner_circle_layout_ui.js",
      // Exposing the layout module from the specified path
      exposes: {
        "./layout": "./src/App.tsx",
      },
      shared: [
        "react",
        "react-dom",
        "react-router-dom",
      ],
    }),
  ],
  build: {
    cssCodeSplit: false,
    target: "esnext",
  },
})
