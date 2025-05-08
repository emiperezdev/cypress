describe('Acreditaciones > reconocimientos institucionales', () => { 
    it('passes', () => {
        cy.login();

        cy.get('a[href="../somos/filosofia.php"]').first().click();

        cy.get('a[href="acreditaciones.php?c="]').first().click();

        cy.get('a[href="#panel-2"]').first().click();

        cy.contains('span', 'reconocimientos institucionales').should('exist');

    })
 })