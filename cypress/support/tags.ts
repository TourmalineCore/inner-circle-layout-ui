const environment = Cypress.env(`E2E_RUN_ENVIRONMENT`)

export function itOnlyInProd(title: string, fn: () => void) {
  itInEnv(`prod`, title, fn)
}

export function itOnlyInLocal(title: string, fn: () => void) {
  itInEnv(`local`, title, fn)
}

function itInEnv(env: string, title: string, fn: () => void) {
  if (environment === env) {
    it(title, fn)
  }
  else {
    it.skip(title, fn)
  }
}
