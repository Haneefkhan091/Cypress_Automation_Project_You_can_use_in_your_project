import data from "../fixtures/testdata1.json";
describe("Fixture", () => {
  beforeEach("visit website", () => {
    cy.visit("https://www.browserstack.com/users/sign_up");
  });
  it("checking Fixture concept", () => {
    cy.get('#user_full_name').type('Haneef')
    cy.get('#user_email_login').type('email')
    cy.get('#user_password').type('passowrd')
  });
});
