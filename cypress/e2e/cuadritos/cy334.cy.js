describe('Deportes – Basquetbol', () => {
    it('abre el tile de Deportes, selecciona Basquetbol y muestra la sección', () => {
      cy.visit('https://www.lasallebajio.edu.mx/');
      cy.get('#login_link').click();
      cy.get('input[name="usuario"]').first().type('00075441');
      cy.get('input[name="pass"]').first().type('espartan117');
      cy.get('button[name="Entrar"]').first().click();
  
      cy.get('a[href="deportes.php"]')
        .first()
        .invoke('removeAttr','target')
        .click();
  
      cy.url().should('include','deportes.php');
  
      cy.get('label.deporte[for="dep3"]').click();
  
      cy.get('div.content').should('exist');
    });
  });
  