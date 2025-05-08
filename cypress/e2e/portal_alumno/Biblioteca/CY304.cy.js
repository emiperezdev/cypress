describe('Biblioteca > libros digitales', () => { 
    it('passes', () => {
        cy.login();

        cy.get('a[href="../apoyos/biblioteca.php"]').first().click();

        cy.get('a[href="bib_libros.php"]').first().click();

        cy.get('a[href="biblioteca.php"]').should('exist');

    })
 })