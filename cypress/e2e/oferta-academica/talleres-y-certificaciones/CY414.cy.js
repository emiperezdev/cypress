describe('Navegación hacia la sección de Talleres y certificaciones', () => {
  it('Accede desde la página principal hasta la sección de Talleres y certificaciones y verifica el título', () => {
    cy.navegarOfertaAcademica();

    cy.get('a[href="ec.php"]').click();
    
    cy.contains('span.section_title', 'EDUCACIÓN CONTINUA').should('exist');
  });
});
