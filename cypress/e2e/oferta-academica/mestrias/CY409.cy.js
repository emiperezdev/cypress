describe('Navegación hacia la sección de Maestrias', () => {
  it('Accede desde la página principal hasta la sección de Maestrias y verifica el título', () => {
    cy.navegarOfertaAcademica();

    cy.get('a[href="maestrias.php"]').click();
    
    cy.contains('span.section_title', 'MAESTRÍAS').should('exist');
  });
});
