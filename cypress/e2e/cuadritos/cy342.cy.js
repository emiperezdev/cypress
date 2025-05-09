describe('Publicaciones', () => {
    it('abre el tile de Publicaciones y comprueba el título', () => {
     
      cy.visit('https://www.lasallebajio.edu.mx/');
      cy.get('#login_link').click();
      cy.get('input[name="usuario"]').first().type('00075441');
      cy.get('input[name="pass"]').first().type('espartan117');
      cy.get('button[name="Entrar"]').first().click();
  
     
      cy.get('a[href="../publicaciones.php"]')
        .first()                        
        .invoke('removeAttr','target')  
        .scrollIntoView()               
        .click({ force: true });        
  
     
      cy.url().should('include', '/publicaciones.php');
  
     
      cy.get('h1')
        .should('be.visible')
        .and('contain.text', 'Publicaciones');
    });
  });
  