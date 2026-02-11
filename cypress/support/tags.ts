const environment = Cypress.env(`E2E_RUN_ENVIRONMENT`)

function itOnlyIn(env: string, title: string, fn: () => void) {
  if (environment === env) {
    it(title, fn)
  }
  else {
    it.skip(title, fn)
  }
}

export function itOnlyInProd(title: string, fn: () => void) {
  itOnlyIn(`prod`, title, fn)
}

export function itOnlyInLocal(title: string, fn: () => void) {
  itOnlyIn(`local`, title, fn)
}