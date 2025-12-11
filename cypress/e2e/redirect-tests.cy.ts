import { itWithTags } from "../support/tags"

describe(`Redirect tests`, () => {
  beforeEach(`Authorize and check targetEnv`, () => {
    cy.authByApi()
  })

  itWithTags(`
  GIVEN home page
  WHEN user goes to it
  SHOULD redirect to /employee
  `, [
    `prod`,
    `local`,
  ], () => {
    cy.visit(`/`)

    cy
      .url()
      .should(`contain`, `/employee`)
  })

  itWithTags(`
    GIVEN short domain
    WHEN the page is loaded
    SHOULD redirect to the long domain
    `, [
    `prod`,
  ], () => {
    cy.visit(Cypress.env(`SOURCE_DOMAIN`))

    cy
      .url()
      .should(`contain`, Cypress.env(`TARGET_DOMAIN`))
  })
})