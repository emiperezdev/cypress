describe('Navegación hacia la sección de somos y hace click en Despachos de asesoria juridica', () => {
  it('Accede desde la página de somos y hace click en Despachos de asesoria juridicas', () => {
    cy.navigateDespachoDeAsesoriaJuridica();
    
    cy.contains('span', 'DESPACHOS DE ASESORÍA JURÍDICA').should('exist');
  });
});