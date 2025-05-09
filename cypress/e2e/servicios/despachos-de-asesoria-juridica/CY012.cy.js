describe('Navegación hacia la sección de somos luego a Despachos de asesoria juridica y finalmente entra al apartado de servicios', () => {
  it('Accede desde la página de somos y hace click en Despachos -> asesoria juridicas -> servicios', () => {
    cy.navigateDespachoDeAsesoriaJuridica();
    
    cy.get('a[href="#panel-3"]').click();

    cy.contains('span', 'servicios').should('exist');
  });
});