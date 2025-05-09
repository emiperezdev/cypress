describe('Mapas de Campus San pancho', () => {
    it('selecciona el campus San Panchp', () => {
      cy.visit('https://www.lasallebajio.edu.mx/');
      cy.get('#login_link').click();
      cy.get('input[name="usuario"]').first().type('00075441');
      cy.get('input[name="pass"]').first().type('espartan117');
      cy.get('button[name="Entrar"]').first().click()
  
      cy.get('a[href="../apoyos/mapas.php"]')
        .first()
        .invoke('removeAttr','target')
        .scrollIntoView()
        .click();
  
      cy.get('#map_menu li a[href="?op=9"]')
        .scrollIntoView()
        .click()
        .wait(3000);

        cy.url().should('include','?op=9');
        cy.get('#drag').should('exist');
  
    });
  });
  