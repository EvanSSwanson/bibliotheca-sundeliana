describe('favoriting', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/filter")
        cy.intercept("https://bible-api.com/PRO%202:3", {
        method: "GET",
        fixture: "../fixtures/englishJHN316.json"
        });
        cy.intercept("https://bible-api.com/PRO%202:3?translation=clementine", {
        method: "GET",
        fixture: "../fixtures/latinJHN316.json"
        });
        cy.get("#PRO").click()
        cy.get(".verse-number").clear().type("2:3")
        cy.get(".verse-number").should("have.value", "2:3")
        cy.get(".submit-button").click()
        cy.get(".favorite-button").click()
        cy.get(".home-title").click()
        cy.get(".favorites").click()
        });
        it('Should successfully have a John 3:16 card', () => {
            cy.get(".quote-card").contains("For God so loved the world")
        })
        it('Should have John 3:16 in Latin, too', () => {
            cy.get(".quote-card").contains("Sic enim Deus")
        })
        it('Should have no other cards', () => {
            cy.get('.cards-container').within(() => {
                cy.get('.quote-card').should('have.length', 1)
              })
        })
        it('Should delete the card from the page', () => {
            cy.get(".remove").click()
            cy.get('.cards-container').within(() => {
                cy.get('.quote-card').should('have.length', 0)
              })
        })
})