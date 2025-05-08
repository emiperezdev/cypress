describe('campus', () => { 
    it('passes', () => {
        cy.login();
        cy.get('a[href="../somos/filosofia.php"]').first().click();

        cy.get('a[href="campus.php?c="]').first().click();

        cy.contains('span', 'campus').should('exist');

    })
 })