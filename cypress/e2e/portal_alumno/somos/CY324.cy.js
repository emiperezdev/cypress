describe('Acreditaciones > mejora continua', () => { 
    it('passes', () => {
        cy.login();

        cy.get('a[href="../somos/filosofia.php"]').first().click();

        cy.get('a[href="acreditaciones.php?c="]').first().click();

        cy.contains('span', 'mejora continua').should('exist');

    })
 })