Cypress.Commands.add('navegarOfertaAcademica', () => {
  cy.visit('https://www.lasallebajio.edu.mx/');
  cy.get('#link3').click();
});
