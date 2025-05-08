describe('Historia > Fundacion', () => { 
    it('passes', () => {
        cy.login();

        cy.get('a[href="../somos/filosofia.php"]').first().click();

        cy.get('a[href="historia.php?c="]').first().click();

        cy.get('a[href="#panel-2"]').first().click();

        cy.get('span[class="panel_title"]').should('exist');

    })
 })