/* eslint-disable @typescript-eslint/quotes */
import { federation } from '@module-federation/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path'

const LOCAL_ENV_PORT = 40100
const LAYOUT_PORT = process.env.NODE_ENV === `production` ? LOCAL_ENV_PORT : 4006

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  server: {
    origin: `http://localhost:${LAYOUT_PORT}`,
    port: LAYOUT_PORT,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
  base: `/layout`,
  plugins: [
    react(),
    federation({
      name: `inner_circle_layout_ui`, // Unique name for the application
      filename: 'remoteEntry.js',
      manifest: true,
      exposes: {
        './layout': path.resolve(__dirname, 'src/App.tsx'), // Exposing the sidebar module from the specified path
      },
      shared: { // Used to define dependencies that should be shared between different applications
        react: {
          singleton: true, // Ensures that only one instance of React is used
          requiredVersion: '^18.2.0',
        },
        'react-dom': {
          singleton: true, // Ensures that all modules starting with 'react/' also use the same instance
          requiredVersion: '^18.2.0',
        },
      },

      /* singleton: true: This setting ensures that only a single instance of the specified module 
      (in this case, react) is loaded in the application. 
      If multiple applications try to load their own version of React, 
      this setting prevents that by sharing the same instance across all applications */
    }),
    svgr(),
  ],
  build: {
    target: `chrome89`, // Setting the target browser version for the build
    rollupOptions: {
      external: [
        `react`,
        'react-dom',
        `react/jsx-runtime`,
        'virtual:*',
        /^__mf__virtual\//,
      ],
    },
  },
})
