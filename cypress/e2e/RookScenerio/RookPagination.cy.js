describe("Footer Assertion", () => {
    beforeEach("Visit the site", () => {
      cy.visit("https://www.clients.portal.tryrook.io/");
    });
  
    it("Should assert the footer based on the URL path", () => {
      cy.get("input[placeholder='name@mail.com']").type("jamesparkes@my-dayapp.com");
      cy.get("input[placeholder='Your password']").type("AbCdE124578!@£", { log: false });
      cy.get("button[class='flex items-center justify-center w-full bg-rook mt-8 rounded-md px-6 py-2 text-xl text-sm lg:text-base']").click({ force: true });
  
      // Define a function to check if the pagination button is disabled
      const isPaginationButtonDisabled = () => {
        return cy.get('.MuiPagination-ul.css-nhb8h9 li :nth-child(2)',{timeout:1000000000}).should('have.class', 'Mui-disabled');
      };
  
      // Define a recursive function to keep clicking until the button is disabled
      const clickButtonUntilDisabled = () => {
        cy.get('.overflow-x-auto td:nth-child(1)',{timeout:1000000000}).then(($elements) => {
          const textArray = $elements.map((index, element) => Cypress.$(element).text()).get();
          const commaSeparatedText = textArray.join(',');
          cy.log(commaSeparatedText);
        });
  
        cy.get('.MuiPagination-ul.css-nhb8h9 li :nth-child(2)').then(($button) => {
          if (!$button.hasClass('Mui-disabled')) {
            $button.click();
            clickButtonUntilDisabled();
          }
        });
      };
  
      // Start the recursive function
      clickButtonUntilDisabled();
    });
  });
  