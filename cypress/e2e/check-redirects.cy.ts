describe(`Redirect tests`, () => {
  beforeEach(`Authorize and cleanup`, () => {
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

  it(`
    GIVEN one domain
    WHEN the page is loaded
    SHOULD redirect the user to the page with different domain
  `, () => {
    const sourceDomain = Cypress.env(`SOURCE_DOMAIN`)
    const targetDomain = Cypress.env(`TARGET_DOMAIN`)

    cy.visit(sourceDomain)

    cy
      .url()
      .should(`contain`, targetDomain)
  })
})
