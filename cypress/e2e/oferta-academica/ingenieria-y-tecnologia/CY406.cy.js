describe('Navegación hacia la sección de Ingenieria y Tecnologia', () => {
  it('Accede desde la página principal hasta la sección de Ingenieria y Tecnologia y verifica el título', () => {
    cy.navegarOfertaAcademica();

    cy.get('a[href="area4.php"]').click();
    
    cy.contains('span.section_title', 'ÁREA INGENIERÍA Y TECNOLOGÍA').should('exist');
  });
});
