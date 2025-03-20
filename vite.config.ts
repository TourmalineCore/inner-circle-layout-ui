/* eslint-disable @typescript-eslint/quotes */
import { defineConfig } from 'vite'
//correct version of federation https://github.com/originjs/vite-plugin-federation/issues/670
import federation from "@originjs/vite-plugin-federation"
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

const LOCAL_ENV_PORT = 40100
const LAYOUT_PORT = process.env.NODE_ENV === `production` ? LOCAL_ENV_PORT : 4006

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  server: {
    port: LAYOUT_PORT,
  },
  base: `/layout`,
  plugins: [
    react(),
    svgr(),
    federation({
      // Unique name for the application
      name: "inner_circle_layout_ui",
      // filename
      filename: "inner_circle_layout_ui.js",
      // Exposing the layout module from the specified path
      exposes: {
        "./layout": "./src/Layout.tsx",
      },
      shared: [
        "react",
        "react-dom",
        "react-router-dom",
      ],
    }),
  ],
  build: {
    target: "esnext",
  },
})
