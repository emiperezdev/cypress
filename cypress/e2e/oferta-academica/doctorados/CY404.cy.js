describe('Navegación hacia la sección de Doctorados', () => {
  it('Accede desde la página principal hasta la sección de Doctorados y verifica el título', () => {
    cy.navegarOfertaAcademica();

    cy.get('a[href="doctorados.php"]').click();
    
    cy.contains('span.section_title', 'DOCTORADOS').should('exist');
  });
});
