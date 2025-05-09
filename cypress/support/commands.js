Cypress.Commands.add('navegarOfertaAcademica', () => {
  cy.visit('https://www.lasallebajio.edu.mx/');
  cy.get('#link3').click();
});

Cypress.Commands.add('login', () => {
    cy.visit('https://www.lasallebajio.edu.mx/');

    cy.get('div[id="login_link"]').click();
    cy.wait(2000);

    cy.get('input[name="usuario"]').first().click().type("");
    cy.wait(2000);

    cy.get('input[name="pass"]').first().click().type("");
    cy.wait(2000);

    cy.get('button[name="Entrar"]').first().click();
    cy.wait(2000);

    cy.get('div[id="com_title"]').should('exist');
});

Cypress.Commands.add('navigateClinicasOdontologicas', () => {
  cy.visit('https://www.lasallebajio.edu.mx/');
  cy.get('a[href="servicios/comunitarios.php"]').click();
  cy.get('a[href="clinicas.php"]').click();
});

