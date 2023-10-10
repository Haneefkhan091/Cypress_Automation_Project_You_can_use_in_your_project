describe("Find parametarization ", function(){
  beforeEach(function()  {
    cy.visit("https://rahulshettyacademy.com/angularpractice/shop");
  });
  
  it("verify  parametarization", function()  {
    const productNames = ["iphone X", "Samsung Note 8", "Nokia Edge"];
    // Iterate through the product names and select each product
    cy.wrap(productNames).each(function(productName)  {
      cy.selectProductByName(productName);
      //   cy.wait(1000);
    });
    cy.get(".nav-link.btn.btn-primary").click({ force: true });
    let total = 0; // Initialize a variable to store the total
    cy.get("tr td:nth-child(4) strong")
      .each(function (element) {
        const text = element.text();
        const numericValue = parseInt(text.replace(/[^0-9]/g, ""), 10); // Convert the text to an integer
        if (!isNaN(numericValue)) {
          total += numericValue; // Add the numeric value to the total
        }
      })
      .then(function() {
        cy.log(`Total: ${total}`); // Log the total after processing all elements
        cy.wrap(total).should("eq", 250000);
      });
  });
});
