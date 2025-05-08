describe('SERVICIO DE INTERNET INALÁMBRICO', () => { 
    it('passes', () => {
        cy.login();

        cy.get('a[href="../dtia/wifi.php"]').first().click();

        cy.contains('h1', 'SERVICIO DE INTERNET INALÁMBRICO').should('exist');

    })
 })