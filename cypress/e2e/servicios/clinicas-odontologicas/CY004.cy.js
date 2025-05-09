describe('Navegación hacia la sección de somos -> Clinicas Odontologicas y navega a clínica juan alonso de torres', () => {
  it('Accede desde la página de somos y hace click en Clinicas Odontologicas y luego clínica juan alonso de torres', () => {
    cy.navigateClinicasOdontologicas();
    
    cy.get('a[href="#panel-3"]').click();

    cy.contains('span', 'clínica juan alonso de torres').should('exist');

  });
});