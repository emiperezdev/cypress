describe('Navegación hacia la sección de Area Dental Program', () => {
  it('Accede desde la página principal hasta la sección de Area Dental Program y verifica el título', () => {
    cy.navegarOfertaAcademica();

    cy.get('a[href="idp_en.php"]').click();
    
    cy.contains('span#program_title', 'INTERNATIONAL DENTAL PROGRAM OF DE LA SALLE').should('exist');
  });
});
