"use strict";
/// <reference types="cypress" />
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
exports.__esModule = true;
// Import commands.js using ES2015 syntax:
require("cypress-plugin-snapshots/commands");
require("cypress-xpath");
// import '@cypress/code-coverage/support';
require("./commands");
// Alternatively you can use CommonJS syntax:
// require('./commands')
Cypress.Commands.add('attach_file', {
    prevSubject: 'element'
}, function (input, fileName, fileType) {
    cy.fixture(fileName, 'base64')
        .then(function (content) { return Cypress.Blob.base64StringToBlob(content, fileType); })
        .then(function (blob) {
        var testFile = new File([blob], fileName);
        var dataTransfer = new DataTransfer();
        dataTransfer.items.add(testFile);
        // eslint-disable-next-line no-param-reassign
        input[0].files = dataTransfer.files;
        return input;
    });
});
