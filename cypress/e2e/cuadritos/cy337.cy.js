describe('Mapas de Campus – juan  Alonso', () => {
    it('selecciona el campus Juan Alonos', () => {
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
        .wait(3000)
        .click();
  
      cy.get('#map_menu li a[href="?op=7"]')
        .scrollIntoView()
        .click()
        .wait(3000);

        cy.url().should('include','?op=7');
        cy.get('#drag').should('exist');
  
    });
  });
  