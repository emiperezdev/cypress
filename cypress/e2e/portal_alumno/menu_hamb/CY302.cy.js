describe('Calendario Escolar', () => { 
    it('passes', () => {
        cy.login();

        cy.get('label[id="btnMenu"]').first().click();
        cy.wait(2000); //2 segundos

        cy.get('a[href="calendario.php"]').first().click();
        cy.wait(2000); //2 segundos

        cy.contains('span', 'calendario').should('exist');





    })
 })