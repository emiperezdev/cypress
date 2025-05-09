describe('Navegación hacia la sección de somos -> Clinicas Odontologicas y navega a clinica campestre', () => {
  it('Accede desde la página de somos y hace click en Clinicas Odontologicas y luego clinica campestre', () => {
    cy.navigateClinicasOdontologicas();
    
    cy.get('a[href="#panel-2"]').click();

    cy.contains('span', 'clínica campestre').should('exist');

  });
});