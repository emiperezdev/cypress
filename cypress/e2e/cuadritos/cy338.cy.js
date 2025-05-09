describe('Mapas de Campus – AMÉRICAS', () => {
    it('selecciona el campus AMÉRICAS', () => {
      cy.visit('https://www.lasallebajio.edu.mx/');
      cy.get('#login_link').click();
      cy.get('input[name="usuario"]').first().type('00075441');
      cy.get('input[name="pass"]').first().type('espartan117');
      cy.get('button[name="Entrar"]').first().click();
  
      cy.get('a[href="../apoyos/mapas.php"]')
        .first()
        .invoke('removeAttr','target')
        .scrollIntoView()
        .click();
  
      cy.get('#map_menu li a[href="?op=5"]')
        .scrollIntoView()
        .click()
        

        cy.url().should('include','?op=5');
        cy.get('#drag').should('exist');
  
    });
  });
  