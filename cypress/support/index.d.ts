/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    attach_file(fileName: string, fileType: string): Chainable<Element>;
  }
}
