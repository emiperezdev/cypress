describe('Navegación hacia la sección de somos -> Clinicas Odontologicas y navega a horarios clínicos', () => {
  it('Accede desde la página de somos y hace click en Clinicas Odontologicas y luego horarios clínicos', () => {
    cy.navigateClinicasOdontologicas();
    
    cy.get('a[href="#panel-6"]').click();

    cy.contains('span', 'horarios clínicos').should('exist');

  });
});