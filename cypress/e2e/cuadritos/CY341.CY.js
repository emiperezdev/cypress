describe('Mapas de Campus – CAMPESTRE', () => {
    it('selecciona el campus CAMPESTE', () => {
      cy.visit('https://www.lasallebajio.edu.mx/');
      cy.get('#login_link').click();
      cy.get('input[name="usuario"]').first().type('00075441');
      cy.get('input[name="pass"]').first().type('espartan117');
      cy.get('button[name="Entrar"]').first().click()
      .wait(2000);
  
      cy.get('a[href="../apoyos/mapas.php"]')
        .first()
        .invoke('removeAttr','target')
        .scrollIntoView()
        .click();
  
      cy.get('#map_menu li a[href="?op=6"]')
        .scrollIntoView()
        .click();
        

        cy.url().should('include','?op=6');
        cy.get('#drag').should('exist');
  
    });
  });
  