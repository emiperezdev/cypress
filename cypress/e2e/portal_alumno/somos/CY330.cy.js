describe('circulares', () => { 
    it('passes', () => {
        cy.login();

        cy.get('a[href="circulares.php"]').first().click();

        cy.contains('h1', 'circulares').should('exist');

    })
 })