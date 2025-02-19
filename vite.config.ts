/* eslint-disable @typescript-eslint/quotes */
import { defineConfig } from 'vite'
import federation from "@originjs/vite-plugin-federation"
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import rewriteAll from 'vite-plugin-rewrite-all'

const LOCAL_ENV_PORT = 40100
const LAYOUT_PORT = process.env.NODE_ENV === `production` ? LOCAL_ENV_PORT : 4006

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  server: {
    origin: `http://localhost:${LAYOUT_PORT}`,
    port: LAYOUT_PORT,
  },
  base: `/`,
  define: {
    'import.meta.env.VITE_BASE_PATH': JSON.stringify(
      process.env.NODE_ENV === `production` ? `/layout` : ``,
    ),
  },
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
      filename: "layout.js",
      exposes: {
        "./layout": "./src/App.tsx", // Exposing the sidebar module from the specified path
      },
      shared: [
        "react",
        "react-dom",
        "react-router-dom",
      ],
    }),
    rewriteAll(), // rewrite paths (needs for dist/assets/style-39bed72c.css)
  ],
  build: {
    target: "esnext",
    // sourcemap: process.env.NODE_ENV === "production" ? false : true,
    // minify: process.env.NODE_ENV === "production" ? true : false,
    cssCodeSplit: false,
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
