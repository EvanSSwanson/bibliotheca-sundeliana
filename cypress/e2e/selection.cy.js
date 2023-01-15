
describe('filter page', () => {
    beforeEach(() => {
    cy.intercept("https://bible-api.com/JHN%203:16", {
    method: "GET",
    fixture: "../fixtures/englishJHN316.json"
    });
    cy.intercept("https://bible-api.com/JHN%203:16?translation=clementine", {
    method: "GET",
    fixture: "../fixtures/latinJHN316.json"
    });
      cy.visit("http://localhost:3000/filter")
    });
    it('passes', () => {
        cy.visit("http://localhost:3000/filter")
      })
      it("Should change selection to that book", () => {
        cy.get("#MRK").click()
        cy.get(".selected-book-name").should("have.text", "Mark")
      });
      it("Should change verse to what is typed in", () => {
        cy.get(".verse-number").clear().type("2:9")
        cy.get(".verse-number").should("have.value", "2:9")
      });
      it("Should give the proper verse back (from the api)", () => {
        cy.get("#MRK").click()
        cy.get(".verse-number").clear().type("2:9")
        cy.get(".verse-number").should("have.value", "2:9")
        cy.get(".submit-button").click()
        cy.get(".english-display").should("have.text", "\nWhich is easier, to tell the paralytic, ‘Your sins are forgiven;’ or to say, ‘Arise, and take up your bed, and walk?’\n\n")
        cy.get(".latin-display").should("have.text", "Quid est facilius dicere paralytico : Dimittuntur tibi peccata : an dicere : Surge, tolle grabatum tuum, et ambula ?")
      });
      it("Should respond to stub", () => {
        cy.get("#MRK").click()
        cy.get(".selected-book-name").should("have.text", "Mark")
        cy.get(".verse-number").clear().type("2:9")
        cy.get(".verse-number").should("have.value", "2:9")
        cy.intercept("https://bible-api.com/MRK%202:9", {
            method: "GET",
            fixture: "../fixtures/englishJHN316.json"
        });
        cy.get(".submit-button").click()
        cy.get(".english-display").should("have.text", "For God so loved the world, that he gave his one and only Son, that whoever believes in him should not perish, but have eternal life.")
      });
      it("Should give an error alert if the api call is unsuccessful", () => {
        cy.get("#MRK").click()
        cy.get(".selected-book-name").should("have.text", "Mark")
        cy.get(".verse-number").clear().type("2:9")
        cy.get(".verse-number").should("have.value", "2:9")
        cy.get(".submit-button").click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal("not a valid verse!")
          })
       })
})