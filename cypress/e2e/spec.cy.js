describe('Hex Calculator', () => {
  beforeEach(() => {
      cy.visit('../../calculator.html'); // Adjust the path as necessary
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    // Prevent Cypress from failing the test on uncaught exceptions
    return false; // Return false to continue with the test
});

  it('should display the correct result for addition', () => {
      cy.get('button').contains('1').click();
      cy.get('button').contains('+').click();
      cy.get('button').contains('9').click();
      cy.get('button').contains('=').click();
      cy.get('#display').should('have.value', 'A');
  });

  it('should display the correct result for subtraction', () => {
      cy.get('button').contains('B').click();
      cy.get('button').contains('-').click();
      cy.get('button').contains('2').click();
      cy.get('button').contains('=').click();
      cy.get('#display').should('have.value', '9');
  });

  it('should handle division by zero', () => {
      cy.get('button').contains('A').click();
      cy.get('button').contains('/').click();
      cy.get('button').contains('0').click();
      cy.get('button').contains('=').click();
      cy.on('window:alert', (txt) => {
          expect(txt).to.contains('Division by zero is not allowed.');
      });
  });
});