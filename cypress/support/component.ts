import './commands'

import { mount } from 'cypress/react18'

// styles
import '../../src/styles/index.scss'

window.__ENV__ = {
  API_ROOT: `http://test.com/to-dos-api`,
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      mount: typeof mount,
      getByData(selector: string): Chainable<JQuery<HTMLElement>>,
    }
  }
}

Cypress.Commands.add(`mount`, mount)
