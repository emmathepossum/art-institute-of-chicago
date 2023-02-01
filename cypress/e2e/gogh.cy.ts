describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://chicago.yeetin.me');
    cy.get('.search-input').type('Gogh');
    cy.get('.search-button').click();
    cy.get(':nth-child(1) > .artwork > .artwork__title > .artwork__title-artwork').contains('Terrace and Observation Deck at the Moulin de Blute-Fin, Montmartre');
  })
})