describe('Acreditaciones > membresías', () => { 
    it('passes', () => {
        cy.login();

        cy.get('a[href="../somos/filosofia.php"]').first().click();

        cy.get('a[href="acreditaciones.php?c="]').first().click();

        cy.get('a[href="#panel-4"]').first().click();

        cy.contains('span', 'membresías').should('exist');

    })
 })