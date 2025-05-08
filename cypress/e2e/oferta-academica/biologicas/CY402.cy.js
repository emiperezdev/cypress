describe('Navegación hacia la sección de Area Biologica', () => {
  it('Accede desde la página principal hasta la sección de Area Biologica y verifica el título', () => {
    cy.navegarOfertaAcademica();

    cy.get('a[href="area3.php"]').click();
    
    cy.contains('span.section_title', 'ÁREA BIOLÓGICAS').should('exist');
  });
});
