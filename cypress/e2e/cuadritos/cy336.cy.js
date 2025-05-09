describe('Movilidad', ()=> {
    it('abre la página de Movilidad y valida el título', ()=> {

      cy.visit('https://www.lasallebajio.edu.mx/');
      cy.get('#login_link').click();
      cy.get('input[name="usuario"]').first().type("00075441");
      cy.get('input[name="pass"]').first().type("espartan117");
      cy.get('button[name="Entrar"]').first().click();
    
      cy.get('a[href="movilidad.php"]')
        .first()
        .invoke('removeAttr','target') 
        .scrollIntoView()
        .click({ force: true });
    
      cy.url().should('include', '/movilidad.php');
    
    
      cy.contains('h2', '¿Deseas salir de Intercambio?')
        .should('be.visible');
    });
  });
  