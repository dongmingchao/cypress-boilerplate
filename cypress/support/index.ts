// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import 'cypress-plugin-snapshots/commands';
import 'cypress-xpath';
// import '@cypress/code-coverage/support';
import './commands';
// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.Commands.add(
  'attach_file',
  {
    prevSubject: 'element',
  },
  (input: JQuery<HTMLInputElement>, fileName: string, fileType: string) => {
    cy.fixture(fileName, 'base64')
      .then((content) => Cypress.Blob.base64StringToBlob(content, fileType))
      .then((blob) => {
        const testFile = new File([blob], fileName);
        const dataTransfer = new DataTransfer();

        dataTransfer.items.add(testFile);
        // eslint-disable-next-line no-param-reassign
        input[0].files = dataTransfer.files;
        return input;
      });
  },
);
