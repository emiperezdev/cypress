describe('Navegación hacia la sección de Especialidades', () => {
  it('Accede desde la página principal hasta la sección de Especialidades y verifica el título', () => {
    cy.navegarOfertaAcademica();

    cy.get('a[href="especialidades.php"]').click();
    
    cy.contains('span.section_title', 'ESPECIALIDADES').should('exist');
  });
});
