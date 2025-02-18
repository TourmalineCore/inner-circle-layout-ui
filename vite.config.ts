/* eslint-disable @typescript-eslint/quotes */
import { defineConfig } from 'vite'
import { federation } from '@module-federation/vite'
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
  base: `/layout`,
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
  plugins: [
    react(),
    svgr(),
    federation({
      name: "inner_circle_layout_ui", // Unique name for the application
      filename: "remoteEntry.js",
      // manifest: true,
      exposes: {
        "./layout": "./src/App.tsx", // Exposing the sidebar module from the specified path
      },
      shared: [
        "react",
      ],

      /* singleton: true: This setting ensures that only a single instance of the specified module 
      (in this case, react) is loaded in the application. 
      If multiple applications try to load their own version of React, 
      this setting prevents that by sharing the same instance across all applications */
    }),
  ],
  build: {
    target: 'chrome89', // Setting the target browser version for the build
  },
})
