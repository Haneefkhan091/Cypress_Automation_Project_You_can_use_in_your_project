
describe("Checking flow", () => {
    beforeEach(() => {
      cy.visit("https://www.browserstack.com/users/sign_up");
    });
  
    it("Testing checking", () => {
      cy.fixture("testdata1.json").then((data) => {
        data.forEach((dataset) => {
            
            cy.get('#user_full_name').type(dataset.name)
            cy.get('#user_email_login').type(dataset.email)
            cy.get('#user_password').type(dataset.password)
        });
      });
    });
  });
  