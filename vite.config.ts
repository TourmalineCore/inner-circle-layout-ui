/* eslint-disable @typescript-eslint/quotes */
import { defineConfig } from 'vite'
//correct version of federation https://github.com/originjs/vite-plugin-federation/issues/670
import federation from "@originjs/vite-plugin-federation"
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

const LOCAL_ENV_PORT = 40100
// Set the port for the layout based on the environment
const LAYOUT_PORT = process.env.NODE_ENV === `production` ? LOCAL_ENV_PORT : 4006

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  // Set the port on which the development server runs
  // Documentation: https://vitejs.dev/config/server-options.html#server-port
  server: {
    port: LAYOUT_PORT,
  },
  // Base public path that is added to beginnings of static assets and routes in the generated HTML.
  // This affects how files like scripts, styles, and images are referenced in the final build.
  // Example: If an image is imported as `/assets/logo.png`, it will be resolved as `/layout/assets/logo.png`.
  // Documentation: https://vitejs.dev/config/shared-options.html#base
  base: `/layout`,
  plugins: [
    // Enable React support
    react(),
    // Enable SVG imports as React components
    svgr(),
    // Configure module federation
    // Example config https://github.com/originjs/vite-plugin-federation/blob/main/packages/examples/react-vite/remote/vite.config.js
    // Doc https://vitejs.dev/config/
    federation({
      // Unique name for the application
      name: "inner_circle_layout_ui",
      // Filename for the remote entry point
      filename: "inner_circle_layout_ui.js",
      // Exposing the layout module from the specified path
      exposes: {
        "./layout": "./src/Layout.tsx",
      },
      // Shared dependencies to avoid duplication
      shared: [
        "react",
        "react-dom",
        "react-router-dom",
      ],
    }),
  ],
  // Build configuration
  build: {
    // For successful docker build 
    // https://stackoverflow.com/questions/76616620/vite-refuses-to-use-the-correct-build-target-in-my-svelte-ts-project 
    // https://github.com/Lenni009/vite-build-target-issue
    target: "esnext",
  },
})
