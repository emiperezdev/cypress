describe('Publicaciones', () => {
    it('abre el tile de Publicaciones y comprueba el título', () => {
      // 1) Visitar home y hacer login
      cy.visit('https://www.lasallebajio.edu.mx/');
      cy.get('#login_link').click();
      cy.get('input[name="usuario"]').first().type('00075441');
      cy.get('input[name="pass"]').first().type('espartan117');
      cy.get('button[name="Entrar"]').first().click();
  
      // 2) Clic en el tile de Publicaciones
      cy.get('a[href="../publicaciones.php"]')
        .first()                         // en caso de que haya más de uno
        .invoke('removeAttr','target')   // para que no abra nueva pestaña
        .scrollIntoView()                // baja hasta él
        .click({ force: true });         // fuerza el click por si algo lo cubre
  
      // 3) Comprobar que estamos en la URL correcta
      cy.url().should('include', '/publicaciones.php');
  
      // 4) Validar el <h1> que debe decir “Publicaciones”
      cy.get('h1')
        .should('be.visible')
        .and('contain.text', 'Publicaciones');
    });
  });
  