describe('Navegación hacia la sección de somos luego a Despachos de asesoria juridica y finalmente entra al apartado de contacto', () => {
  it('Accede desde la página de somos y hace click en Despachos -> asesoria juridicas -> contacto', () => {
    cy.navigateDespachoDeAsesoriaJuridica();
    
    cy.get('a[href="#panel-4"]').click();

    cy.contains('span', 'contacto').should('exist');
  });
});