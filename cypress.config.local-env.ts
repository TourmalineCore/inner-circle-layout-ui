import { defineConfig } from 'cypress'
import { plugin as cypressGrepPlugin } from '@cypress/grep/plugin'

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  env: {
    grepFilterSpecs: false,
    grepOmitFiltered: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      cypressGrepPlugin(config)
      return config
    },
    baseUrl: `http://localhost:30090`,
    env: {
      API_ROOT: `/api`,
      API_ROOT_AUTH: `/api/auth`,
      USER_LOGIN: `ceo@tourmalinecore.com`,
      USER_PASSWORD: `cEoPa$$wo1d`,
    },
    video: true,
    screenshotOnRunFailure: true,
  },
})