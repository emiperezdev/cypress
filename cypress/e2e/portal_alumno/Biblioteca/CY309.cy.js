describe('Biblioteca > revistas electronicas > imagenes para leer > lasallista', () => { 
    it('passes', () => {
        cy.login();

        cy.get('a[href="../apoyos/biblioteca.php"]').first().click();

        cy.get('a[href="bib_revistas.php"]').first().click();

        cy.get('a[href="bib_imagenes.php"]').first().click();

        cy.get('a[href="#panel-2"]').first().click();

        cy.get('a[href="images/postales/1.jpg"]').should('exist');

    })
 })