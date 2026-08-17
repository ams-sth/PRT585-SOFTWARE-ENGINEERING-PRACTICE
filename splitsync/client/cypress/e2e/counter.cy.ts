describe('counter', () => {
  it('increments to 3', () => {
    cy.visit('http://localhost:5173')
    cy.get('button').as('counterButton')
    cy.get('@counterButton').click()
    cy.get('@counterButton').click()
    cy.get('@counterButton').click()
    cy.get('@counterButton').should('contain.text', 'Count is 3')
  })
})