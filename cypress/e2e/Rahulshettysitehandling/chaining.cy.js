describe("template spec", () => {
  beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
  });

  it("passes", () => {
    cy.get(".products").find(".product").each((ele, index, list) => {
        cy.log(ele.text());
      });
  });
});
