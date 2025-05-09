describe('Cultura', () => {
  it('abre el tile de Cultura y verifica el texto de la página', () => {
    cy.visit('https://www.lasallebajio.edu.mx/');
    cy.get('#login_link').click();
    cy.get('input[name="usuario"]').first().type('00075441');
    cy.get('input[name="pass"]').first().type('espartan117');
    cy.get('button[name="Entrar"]').first().click();

    cy.get('a[href="cultura.php"]')
      .first()
      .invoke('removeAttr', 'target')
      .scrollIntoView()
      .click();

    cy.url().should('include', 'cultura.php');
    cy.contains('span', 'cultura').should('be.visible');

    cy.contains(
      'El desarrollo integral implica conocimiento en todas las áreas de expresión con las que cuenta el hombre'
    ).should('be.visible');
  });
});
