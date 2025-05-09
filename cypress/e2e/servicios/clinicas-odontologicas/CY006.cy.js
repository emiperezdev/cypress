describe('Navegación hacia la sección de somos -> Clinicas Odontologicas y navega a admisión de pacientes', () => {
  it('Accede desde la página de somos y hace click en Clinicas Odontologicas y luego admisión de pacientes', () => {
    cy.navigateClinicasOdontologicas();
    
    cy.get('a[href="#panel-5"]').click();

    cy.contains('span', 'admisión de pacientes').should('exist');

  });
});