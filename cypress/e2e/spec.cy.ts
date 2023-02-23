it('numbers test steps', () => {

  cy.step('open a page')
  cy.visit('cypress/index.html')

  cy.section('find all primary colors')
  cy.step('check red color')
  cy.get('.red')
  cy.step('check green color')
  cy.get('.green')
  cy.step('check blue color')
  cy.get('.blue')

  cy.section('find all secondary colors')
  cy.step('select orange')
  cy.get('.orange')
  cy.step('select yellow')
  cy.get('.yellow')
  cy.step('select indigo')
  cy.get('.indigo')

  cy.errorMessage('Different color of orange')
  cy.get('.orange')
    .should('have.css','background-color', 'rgb(255, 165, 0)')
  cy.errorMessage('Color other than red')
  cy.get('.red')
  .should('have.css','background-color', 'rgb(0, 0, 0)')
});