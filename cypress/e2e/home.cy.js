describe("home spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/")
  });
  it("passes", () => {
    cy.visit("http://localhost:3000/")
  })
  it("Should have a title", () => {
    cy.get(".title").should("have.text", "BIBLIOTHECA SUNDELIANA")
  });
  it("Should have a Favorites box", () => {
    cy.get(".favorites").should("have.text", "FAVORITES")
  });
  it("Should send you to your favorites page", () => {
    cy.get(".favorites").click()
    cy.location("pathname").should("eq", "/favorites")
  });
  it("Should have a Filter box", () => {
    cy.get(".filter").should("have.text", "FILTER")
  });
  it("Should send you to the filter page", () => {
    cy.get(".filter").click()
    cy.location("pathname").should("eq", "/filter")
  });
  it("Should have a Theme box", () => {
    cy.get(".theme").should("have.text", "THEME")
  });
  it("Should send you to the theme page", () => {
    cy.get(".theme").click()
    cy.location("pathname").should("eq", "/theme")
  });
  it("Should have a title to click on to send you home", () => {
    cy.get(".theme").click()
    cy.location("pathname").should("eq", "/theme")
    cy.get(".home-link").click()
    cy.location("pathname").should("eq", "/")
  });
  it("Should send you to the creators GitHub", () => {
    cy.get(".about").click()
    cy.url().should("eq", "")
  });
})