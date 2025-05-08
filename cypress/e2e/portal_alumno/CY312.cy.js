describe('Reconocimientos', () => { 
    it('passes', () => {
        cy.login();

        cy.get('a[href="reconocimientos.php"]').first().click();

        cy.get('div[id="com_title_wrap"]').should('exist');

    })
 })