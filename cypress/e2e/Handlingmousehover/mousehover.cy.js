describe("Mouse HOver", () => {
  beforeEach("visit website", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  });
  it("checking mouse hover", () => {
    // cy.get("#mousehover").realHover();
    cy.contains("Top").click({ force: true });
    cy.url().should('include','top')
  });
});
 