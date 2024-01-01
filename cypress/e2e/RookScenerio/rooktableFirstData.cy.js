//.overflow-x-auto td:nth-child(1) locator for the data present in first columns
describe("Footer Assertion", () => {
  beforeEach("Visit the site", () => {
    cy.visit("https://www.clients.portal.tryrook.io/");
  });
  it("Should assert the footer based on the URL path", () => {
    cy.get("input[placeholder='name@mail.com']").type(
      "jamesparkes@my-dayapp.com"
    );
    cy.get("input[placeholder='Your password']").type("AbCdE124578!@£", {
      log: false,
    });
    cy.get(
      "button[class='flex items-center justify-center w-full bg-rook mt-8 rounded-md px-6 py-2 text-xl text-sm lg:text-base']"
    ).click({ force: true });
    cy.get('.overflow-x-auto td:nth-child(1)').then(($elements) => {
        // Use map() to get an array of text values
        const textArray = $elements.map((index, element) => Cypress.$(element).text()).get();
    
        // Join the array elements with commas and print the result
        const commaSeparatedText = textArray.join(',');
        cy.log(commaSeparatedText);
      });
    
    
});
});
