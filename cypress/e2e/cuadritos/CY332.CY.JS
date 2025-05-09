describe('Solidaridad', () => {
    it('abre el tile de Solidaridad y verifica el texto de la página', () => {
      cy.visit('https://www.lasallebajio.edu.mx/');
      cy.get('#login_link').click();
      cy.get('input[name="usuario"]').first().type('00075441');
      cy.get('input[name="pass"]').first().type('espartan117');
      cy.get('button[name="Entrar"]').first().click();
  
      cy.get('a[href="solidaridad.php"]')
        .first()
        .invoke('removeAttr', 'target')
        .click();
  
      cy.url().should('include', 'solidaridad.php');
      cy.contains('span', 'solidaridad').should('be.visible');
      cy.contains(
        'La asignación de los créditos dependerá de los siguientes factores:'
      ).should('be.visible');
    });
  });
  