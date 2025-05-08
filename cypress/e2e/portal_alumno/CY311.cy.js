describe('Vicerrectoría de Bienestar Universitario', () => { 
    it('passes', () => {
        cy.login();

        cy.get('a[href="formacion.php"]').first().click();

        cy.contains('span', 'Vicerrectoría de Bienestar Universitario').should('exist');

    })
 })