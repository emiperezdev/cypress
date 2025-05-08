describe('Navegación hacia la sección de Preparatorias Program', () => {
  it('Accede desde la página principal hasta la sección de Preparatorias Program y verifica el título', () => {
    cy.navegarOfertaAcademica();

    cy.get('a[href="preparatorias.php"]').click();

    cy.contains('span.section_title', 'PREPARATORIAS').should('exist');
  });
});
