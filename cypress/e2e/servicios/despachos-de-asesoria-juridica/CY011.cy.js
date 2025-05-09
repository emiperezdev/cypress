describe('Navegación hacia la sección de somos luego a Despachos de asesoria juridica y finalmente entra al apartado de objetivos', () => {
  it('Accede desde la página de somos y hace click en Despachos -> asesoria juridicas -> objetivos', () => {
    cy.navigateDespachoDeAsesoriaJuridica();
    
    cy.get('a[href="#panel-2"]').click();

    cy.contains('span', 'objetivos').should('exist');
  });
});