import { federation } from '@module-federation/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  server: {
    origin: `http://localhost:4006`,
    port: 4006,
  },
  base: `http://localhost:4006/layout`,
  plugins: [
    react(),
    federation({
      name: `inner_circle_layout_ui`, // Unique name for the application
      manifest: true,
      exposes: {
        './layout': `./src/App.tsx`, // Exposing the sidebar module from the specified path
      },
      shared: { // Used to define dependencies that should be shared between different applications
        react: {
          singleton: true, // Ensures that only one instance of React is used
        },
        'react/': {
          singleton: true, // Ensures that all modules starting with 'react/' also use the same instance
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
  },
})
