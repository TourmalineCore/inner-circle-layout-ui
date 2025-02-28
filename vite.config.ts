/* eslint-disable @typescript-eslint/quotes */
import { defineConfig } from 'vite'
//correct version of federation https://github.com/originjs/vite-plugin-federation/issues/670
import federation from "@originjs/vite-plugin-federation"
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

const LOCAL_ENV_PORT = 40100
const LAYOUT_PORT = process.env.NODE_ENV === `production` ? LOCAL_ENV_PORT : 4006

// for set up component test
export const isTest = process.env.NODE_ENV === 'test'

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  server: {
    origin: `http://localhost:${LAYOUT_PORT}`,
    port: LAYOUT_PORT,
  },
  // base: `/`, // for local docker
  base: `/layout`, // for local-env
  // for mock compensation pages for component test
  resolve: {
    alias: isTest
      ? {
        "inner_circle_compensations_ui/CompensationsPersonalPage": "/src/mocks/CompensationsPersonalPageMock.tsx",
        "inner_circle_compensations_ui/AllCompensationsPage": "/src/mocks/AllCompensationsPageMock.tsx",
      }
      : {},
  },

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
      remotes: isTest
        ? {} // remove compensations-ui dependency for component test
        : {
          inner_circle_compensations_ui: `http://localhost:${LOCAL_ENV_PORT}/compensations/assets/inner_circle_compensations_ui.js`, // for local-env
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
