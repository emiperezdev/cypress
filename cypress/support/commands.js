Cypress.Commands.add('navegarOfertaAcademica', () => {
  cy.visit('https://www.lasallebajio.edu.mx/');
  cy.get('#link3').click();
});

Cypress.Commands.add('login', () => {
    cy.visit('https://www.lasallebajio.edu.mx/');

    cy.get('div[id="login_link"]').click();
    cy.wait(2000);

    cy.get('input[name="usuario"]').first().click().type("00075884");
    cy.wait(2000);

    cy.get('input[name="pass"]').first().click().type("79Pd1m530f29");
    cy.wait(2000);

    cy.get('button[name="Entrar"]').first().click();
    cy.wait(2000);

    cy.get('div[id="com_title"]').should('exist');
});

