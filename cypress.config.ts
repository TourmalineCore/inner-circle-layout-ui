import { defineConfig } from "cypress"

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  // e2e: {
  //   baseUrl: `http://localhost:4006`,
  // },
  component: {
    devServer: {
      framework: `react`,
      bundler: `vite`,
    },
    // that it quickly fails during the workshop
    defaultCommandTimeout: 500,
  },
})
