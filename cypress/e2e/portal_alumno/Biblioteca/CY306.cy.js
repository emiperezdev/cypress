describe('Biblioteca > revistas electronicas > bases de datos', () => { 
    it('passes', () => {
        cy.login();

        cy.get('a[href="../apoyos/biblioteca.php"]').first().click();

        cy.get('a[href="bib_revistas.php"]').first().click();

        cy.get('a[href="bib_bases.php"]').first().click();

        cy.get('a[href="#item1"]').should('exist');

    })
 })