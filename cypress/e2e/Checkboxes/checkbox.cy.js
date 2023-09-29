describe("Command", () => {
  beforeEach("visit website", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  });
  it("checking", () => {
    cy.get('#checkBoxOption1').check().should('be.checked')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('input[type="checkbox"]').check(['option1','option2'])
    cy.get("input[@id='autocomplete']").type('ind')

  });
});
