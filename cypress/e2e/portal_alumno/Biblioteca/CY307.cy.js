describe('Biblioteca > revistas electronicas > conoce la biblioteca', () => { 
    it('passes', () => {
        cy.login();

        cy.get('a[href="../apoyos/biblioteca.php"]').first().click();

        cy.get('a[href="bib_revistas.php"]').first().click();

        cy.get('a[href="bib_conoce.php"]').first().click();

        cy.contains('span', 'Horario de Biblioteca').should('exist');

    })
 })