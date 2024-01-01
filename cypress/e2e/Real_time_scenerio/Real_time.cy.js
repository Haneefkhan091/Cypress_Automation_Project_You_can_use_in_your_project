describe("Footer Assertion", () => {
  it("Should assert the footer based on the URL path", () => {
    // Visit the website
    const country_code = ["/uk/", "/ca/", "/in/"];
    country_code.forEach((country) => {
      cy.visit(`https://www.apple.com${country}`, {failOnStatusCode:false});
      cy.verifycase(country).then((text) => {
        cy.get("a[title='Choose your country or region']").should(
          "have.text",
          text
        );
      });
    });
  });
});
