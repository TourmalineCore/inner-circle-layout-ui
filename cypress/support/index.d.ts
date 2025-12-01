/// <reference types="cypress" />
/// <reference types="@cypress/grep" />

declare namespace Cypress {
  interface Chainable {
    getByData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>,
    authByApi(): Chainable<any>,
  }
}
