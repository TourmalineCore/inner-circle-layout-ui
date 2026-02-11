import { itOnlyInProd } from "../support/tags"

describe(`Redirect tests`, () => {
  beforeEach(`Authorize and check targetEnv`, () => {
    cy.authByApi()
  })

  it(`
  GIVEN home page
  WHEN user goes to it
  SHOULD redirect to /employee
  `, () => {
    cy.visit(`/`)
    cy.url()
      .should(`contain`, `/employee`)
  })

  itOnlyInProd(`
  GIVEN short domain
  WHEN the page is loaded
  SHOULD redirect to the long domain
  `, () => {
    cy.visit(Cypress.env(`SOURCE_DOMAIN`))

    cy
      .url()
      .should(`contain`, Cypress.env(`TARGET_DOMAIN`))
  })
})