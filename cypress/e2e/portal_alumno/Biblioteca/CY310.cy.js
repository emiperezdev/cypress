describe('Biblioteca > revistas electronicas > Servicio especializado', () => { 
    it('passes', () => {
        cy.login();

        cy.get('a[href="../apoyos/biblioteca.php"]').first().click();

        cy.get('a[href="bib_revistas.php"]').first().click();

        cy.get('a[href="bib_servicios.php"]').first().click();

        cy.contains('span', 'Servicio especializado de Información').should('exist');

    })
 })