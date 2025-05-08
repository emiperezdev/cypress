describe('Navegación hacia la oferta académica de Licenciaturas', () => {
  it('Accede desde la página principal hasta el plan de estudios de Licenciaturas', () => {
    cy.navegarOfertaAcademica();

    cy.get('a[href="licenciaturas.php"]').click();

    cy.contains('span.section_title', 'LICENCIATURAS').should('exist');
  });
});
