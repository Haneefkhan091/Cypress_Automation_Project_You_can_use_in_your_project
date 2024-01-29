import { faker } from "@faker-js/faker";
describe("template spec", () => {
  beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  });

  it("passes", () => {
    let password = faker.internet.password()
    cy.get("#alertbtn").click({ force: true });
    cy.get("#confirmbtn").click({ force: true });
    cy.get("#name").type("Haneef Here",{log:false});
    cy.get("#name").type(faker.person.firstName(),{log:false});
    cy.get("#alertbtn").click({ force: true });
    
  });
});
