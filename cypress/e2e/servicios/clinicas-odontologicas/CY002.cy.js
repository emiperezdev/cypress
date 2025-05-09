describe('Navegación hacia la sección de somos -> Clinicas Odontologicas y navega a introduccion', () => {
  it('Accede desde la página de somos y hace click en Clinicas Odontologicas y luego introduccion', () => {
    cy.navigateClinicasOdontologicas();
    
    cy.get('a[href="#panel-1"]').click();

    cy.contains('span', 'introducción').should('exist');

  });
});