describe('Navegación hacia la sección de Area Arquitectura y Diseño', () => {
  it('Accede desde la página principal hasta la sección de Area Arquitectura y Diseño y verifica el título', () => {
    cy.navegarOfertaAcademica();

    cy.get('a[href="area2.php"]').click();
    
    cy.contains('span.section_title', 'ÁREA ARQUITECTURA Y DISEÑO').should('exist');
  });
});
