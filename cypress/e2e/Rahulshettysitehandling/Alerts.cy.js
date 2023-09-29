describe("template spec", () => {
  beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  });

  it("passes", () => {
    cy.get("#alertbtn").click({ force: true });
    cy.get("#confirmbtn").click({ force: true });
    cy.get("#name").type("Haneef Here",{log:false});
    cy.get("#alertbtn").click({ force: true });
  });
});
