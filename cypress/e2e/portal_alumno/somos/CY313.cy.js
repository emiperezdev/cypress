describe('Filosofia Institucional > Mision', () => { 
    it('passes', () => {
        cy.login();

        cy.get('a[href="../somos/filosofia.php"]').first().click();

        cy.get('div[id="int_section_links"]').should('exist');

    })
 })