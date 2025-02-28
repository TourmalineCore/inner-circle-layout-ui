import { defineConfig } from "cypress"

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  component: {
    devServer: {
      framework: `react`,
      bundler: `vite`,
    },
    env: {
      NODE_ENV: `test`,
    },
    // that it quickly fails during the workshop
    defaultCommandTimeout: 500,
  },
})
