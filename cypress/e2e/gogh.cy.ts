describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173/');
    cy.get('.search-input').type('Gogh');
    cy.get('.search-button').click();
    cy.get(':nth-child(1) > .card > .card-body > .card-title').contains('Terrace and Observation Deck at the Moulin de Blute-Fin, Montmartre');
  })
})