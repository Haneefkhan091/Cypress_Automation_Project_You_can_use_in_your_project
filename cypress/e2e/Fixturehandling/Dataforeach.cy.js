describe("Checking flow", () => {
  beforeEach(() => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  });

  it("Testing checking", () => {
    cy.fixture("testdata1.json").then((data) => {
      data.forEach((dataset) => {
        cy.get("input[placeholder='Username']").type(dataset.name);
        cy.get("input[placeholder='Password']").type(dataset.password);
        cy.get('.oxd-button').click();

        if (dataset.name === "Admin" && dataset.password === "admin123") {
          // Additional actions for Admin user
          cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click({ force: true });
          cy.get(':nth-child(4) > .oxd-userdropdown-link').click({ force: true });
          // Add more actions specific to Admin user if needed
        } else {
          // Assert that login failed for invalid credentials
          cy.contains('Invalid credentials').should('be.visible');
        }
      });
    });
  });
});
