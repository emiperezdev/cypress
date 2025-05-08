describe('Navegación hacia la sección de Secundaria Program', () => {
  it('Accede desde la página principal hasta la sección de Secundaria Program y verifica el título', () => {
    cy.navegarOfertaAcademica();

    cy.get('a[href="oferta2.php"]').click();
    
    cy.contains('span#program_title', 'SECUNDARIA').should('exist');
  });
});
