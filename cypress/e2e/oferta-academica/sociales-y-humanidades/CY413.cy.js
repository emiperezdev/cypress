describe('Navegación hacia la sección de Sociales y Humanidades', () => {
  it('Accede desde la página principal hasta la sección de Sociales y Humanidades y verifica el título', () => {
    cy.navegarOfertaAcademica();

    cy.get('a[href="area5.php"]').click();
    
    cy.contains('span.section_title', 'ÁREA SOCIALES Y HUMANIDADES').should('exist');
  });
});
