describe("Command", () => {
  beforeEach("visit website", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
  });
  it("checking", () => {
    cy.get(".search-keyword").type("a");
    //Return the text present in that locater
    cy.get(".brand").then(function (logotext) {
      cy.log(logotext.text());
    });

    cy.get(".products").then(function (text) {
      cy.log(text.text());
    });

    //In proper sequence:
    cy.get('.products')
    .find('.product')
    .should('have.length', 30)
    .each(($product) => {
      // Use .invoke('text') to get the text content of each element
      cy.wrap($product,{log:false}).invoke('text').then((text) => {
        // Log only the text to the console
        cy.log(text);
      });
    });
  

    // cy.get('.products').find('.product').each(($el, index, $list)=>{
    //  const veg=$el.find('h4.product-name').text()
    //   if(veg.includes('Potato')){
    //     $el.find('button').click()
    //   }
    // })
    // const veg=
  });
});
