import { defineConfig } from "cypress"

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  e2e: {
    viewportWidth: 1200,
    viewportHeight: 660,
    specPattern: `cypress/e2e/**/*.cy.ts`,
    baseUrl: process.env.CYPRESS_BASE_URL,
    env: {
      AUTH_API_ROOT_URL: process.env.AUTH_API_ROOT_URL,
      USER_LOGIN: process.env.USER_LOGIN,
      USER_PASSWORD: process.env.USER_PASSWORD,
      SOURCE_DOMAIN: process.env.SOURCE_DOMAIN,
      TARGET_DOMAIN: process.env.TARGET_DOMAIN,
      E2E_RUN_ENVIRONMENT: process.env.E2E_RUN_ENVIRONMENT,
    },
    video: true,
    screenshotOnRunFailure: true,
  },
  component: {
    devServer: {
      framework: `react`,
      bundler: `vite`,
    },
  },
})
