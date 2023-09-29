describe("Find parametarization ", () => {
  beforeEach("Visit website",() => {
    cy.visit("https://rahulshettyacademy.com/angularpractice/shop");
  });
  it("verify  parametarization", () => {
    const productNames = ["iphone X", "Samsung Note 8", "Nokia Edge"];
    // Iterate through the product names and select each product
    cy.wrap(productNames).each((productName) => {
      cy.selectProductByName(productName);
      cy.wait(2000);
    });

  });
});
