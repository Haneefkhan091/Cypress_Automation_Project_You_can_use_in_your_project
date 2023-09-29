import browsersracktest1 from "../Pages/browsersracktest1";
describe("POM globally set", () => {
  let testdata;
  beforeEach("Visit the URL", () => {
    cy.visit("https://www.browserstack.com/users/sign_up");
    cy.fixture("testdata11.json").then((data) => {
      testdata = data;
    });
  });
  it("Testing POM", () => {
    //   const browsersracktest1 = new LoginPage()
    browsersracktest1.fillUsername().type("Haneef");
    browsersracktest1.fillemail().type("Haneef@gmail.com");
    browsersracktest1.fillpassword().type("Haneef@123", { log: false });
    browsersracktest1.submitLoginForm().click({ force: true });
  });
});
