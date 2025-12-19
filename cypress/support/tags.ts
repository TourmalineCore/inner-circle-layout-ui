export function itWithTags(title: string, tags: string[], fn: () => void) {
  const environment = Cypress.env(`E2E_RUN_ENVIRONMENT`)

  if (tags.includes(environment)) {
    it(title, fn)
  }
}
