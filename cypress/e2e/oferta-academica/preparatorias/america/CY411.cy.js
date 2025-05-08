describe('Navegación hacia la sección de Preparatorias(America)', () => {
  it('Accede desde la página principal hasta la sección de Preparatorias(America) y verifica el título', () => {
    cy.navegarOfertaAcademica();

    cy.get('a[href="preparatorias.php"]').click();

    cy.get('a[href="oferta3.php?n=33&p=1"]').click();
    
    cy.contains('span#program_title', 'PREPARATORIA').should('exist');
  });
});
