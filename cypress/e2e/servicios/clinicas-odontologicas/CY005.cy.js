describe('Navegación hacia la sección de somos -> Clinicas Odontologicas y navega a clínica satélite', () => {
  it('Accede desde la página de somos y hace click en Clinicas Odontologicas y luego clínica satélite', () => {
    cy.navigateClinicasOdontologicas();
    
    cy.get('a[href="#panel-4"]').click();

    cy.contains('span', 'clínica satélite').should('exist');

  });
});