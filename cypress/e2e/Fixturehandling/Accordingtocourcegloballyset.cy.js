describe("Fixture handling globally set", () => {
  let testdata;
  beforeEach("Visit the URL", () => {
    cy.visit("https://www.browserstack.com/users/sign_up");
    cy.fixture("testdata11.json").then((data) => {
      testdata = data;
    });
  });
  it("Testing fixture", () => {
    cy.get("#user_full_name").type(testdata.name);
    cy.get("#user_email_login").type(testdata.email);
    cy.get("#user_password").type(testdata.password);
  });
});
