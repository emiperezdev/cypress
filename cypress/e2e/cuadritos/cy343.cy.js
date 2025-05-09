describe('Radio', ()=> {
  it('abrir radio y detener reproducción', ()=> {
    cy.visit('https://www.lasallebajio.edu.mx/');

    cy.get('div[id="login_link"]').click();
        cy.wait(2000);

        var form_folio = cy.get('input[name="usuario"]').first();
        form_folio.click().type("00075441");
        cy.wait(2000);

        var form_password = cy.get('input[name="pass"]').first();
        form_password.click().type("espartan117");
        cy.wait(2000);

        cy.get('button[name="Entrar"]').first().click();
        cy.wait(2000);

    cy.get('a[href="../vida/udiversidad.php"]')
      .first()
      .invoke('removeAttr','target')
      .click();

    
      cy.url().should('include', '/vida/udiversidad.php');
  });
});
