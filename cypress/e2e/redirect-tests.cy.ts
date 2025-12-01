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

    cy
      .url()
      .should(`contain`, `/employee`)
  })

  Cypress.env(`targetEnv`) == `prod`
    ? it
    : it.skip(`
      GIVEN short domain
      WHEN the page is loaded
      SHOULD redirect to the long domain
      `, () => {
      const sourceDomain = Cypress.env(`SOURCE_DOMAIN`)
      const targetDomain = Cypress.env(`TARGET_DOMAIN`)

      cy.visit(sourceDomain)

      cy
        .url()
        .should(`contain`, targetDomain)
    })
})