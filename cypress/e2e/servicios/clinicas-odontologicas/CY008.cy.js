describe('Navegación hacia la sección de somos -> Clinicas Odontologicas y navega a contacto', () => {
  it('Accede desde la página de somos y hace click en Clinicas Odontologicas y luego contacto', () => {
    cy.navigateClinicasOdontologicas();
    
    cy.get('a[href="#panel-7"]').click();

    cy.contains('span', 'contacto').should('exist');

  });
});