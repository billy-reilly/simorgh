import './application';
import './metaData';
import './analytics';

// Overwriting Cypress Commands should very rarely be done.
Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
  cy.request({ url, failOnStatusCode: false }).then(({ headers }) => {
    // Always ensure we're not seeing the Mozart fallback
    if (expect(headers).not.have.property('x-mfa')) {
      return originalFn(url, options);
    }

    return false;
  });
});
