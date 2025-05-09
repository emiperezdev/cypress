describe('Navegación hacia la sección de somos y hace click en Clinicas Odontologicas', () => {
  it('Accede desde la página de somos y hace click en Clinicas Odontologicas', () => {
    cy.navigateClinicasOdontologicas();
    
    cy.contains('span', 'CLÍNICAS ODONTOLÓGICAS').should('exist');
  });
});
