describe('Biblioteca', () => { 
    it('passes', () => {
        cy.login();

        cy.get('a[href="../apoyos/biblioteca.php"]').first().click();

        cy.get('div[class="simple dark"]').should('exist');



    })
 })