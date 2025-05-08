describe('Navegación hacia la oferta académica de Actuaría', () => {
  it('Accede desde la página principal hasta el plan de estudios de Actuaría', () => {
    cy.navegarOfertaAcademica();

    cy.get('a[href="licenciaturas.php"]').click();
    cy.get('a[href="oferta1.php?n=1&p=46"]').click();

    cy.contains('span#program_title', 'Actuaría').should('exist');
  });
});
