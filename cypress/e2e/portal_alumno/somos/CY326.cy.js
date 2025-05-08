describe('Acreditaciones > acreditaciones de programas académicos', () => { 
    it('passes', () => {
        cy.login();

        cy.get('a[href="../somos/filosofia.php"]').first().click();

        cy.get('a[href="acreditaciones.php?c="]').first().click();

        cy.get('a[href="#panel-3"]').first().click();

        cy.contains('span', 'acreditaciones de programas académicos').should('exist');

    })
 })