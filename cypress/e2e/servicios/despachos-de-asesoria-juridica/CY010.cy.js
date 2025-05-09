describe('Navegación hacia la sección de somos luego a Despachos de asesoria juridica y finalmente entra al apartado de introducción', () => {
  it('Accede desde la página de somos y hace click en Despachos -> asesoria juridicas -> introducción', () => {
    cy.navigateDespachoDeAsesoriaJuridica();
    
    cy.get('a[href="#panel-1"]').click();

    cy.contains('span', 'introducción').should('exist');
  });
});