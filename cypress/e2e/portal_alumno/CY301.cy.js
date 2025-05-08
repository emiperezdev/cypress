describe('Registro de alumno', () => { 
    it('passes', () => {
        cy.login();
        cy.wait(2000); //2 segundos

        cy.get('div[id="com_title"]').should('exist')
    })
 })