describe("Find parametarization ", function(){
  beforeEach("Visit website",function()  {
    cy.visit("https://rahulshettyacademy.com/angularpractice/shop");
  });
  it("verify  parametarization", function()  {
    const productNames = ["iphone X", "Samsung Note 8", "Nokia Edge"];
    // Iterate through the product names and select each product
    cy.wrap(productNames).each(function(productName){
      cy.selectProductByName(productName);
      cy.wait(2000);
    });

  });
});
