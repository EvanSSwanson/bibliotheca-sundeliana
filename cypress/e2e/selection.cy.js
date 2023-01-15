
describe('template spec', () => {
    beforeEach(() => {
    cy.intercept('https://bible-api.com/JHN%203:16', {
    method: 'GET',
    fixture: '../fixtures/englishJHN316.json'
    });
    cy.intercept('https://bible-api.com/JHN%203:16?translation=clementine', {
    method: 'GET',
    fixture: '../fixtures/latinJHN316.json'
    });
      cy.visit('http://localhost:3000/filter')
    });
    it('passes', () => {
        cy.visit('http://localhost:3000/filter')
      })
      it('converts favorite to ', () => {
        cy.visit('http://localhost:3000/filter')
      })
  })