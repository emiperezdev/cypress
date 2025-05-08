describe('Identidad', () => { 
    it('passes', () => {
        cy.login();

        cy.get('a[href="../somos/filosofia.php"]').first().click();

        cy.get('a[href="identidad.php?c="]').first().click();

        cy.contains('span', 'IDENTIDAD INSTITUCIONAL').should('exist');

    })
 })