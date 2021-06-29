import 'cypress-plugin-snapshots/commands';
import 'cypress-xpath';
import './commands';
export declare namespace Cypress {
    interface Chainable {
        attach_file: (fileName: string, fileType: string) => Chainable;
    }
}
