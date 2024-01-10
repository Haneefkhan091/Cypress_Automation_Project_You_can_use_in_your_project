describe("Footer Assertion", () => {
    beforeEach("Visit the site", () => {
      cy.visit("https://app.revreply.com/personas");
      //   cy.checkBrokenLinks();
    });
  
    it("Should assert the footer based on the URL path", () => {
      cy.checkBrokenLinks();
  
      cy.get(".block.mt-4 > .block").type("Codes@123");
      cy.get(":nth-child(2) > .block").type("qa.codesorbit@gmail.com");
      cy.get(".align-bottom").click();
      cy.checkBrokenLinks();
  
      // Click on the first element
      cy.get(
        "body > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > span:nth-child(2)"
      ).click();
      cy.checkBrokenLinks(); // Execute after the first click
  
      // Click on the second element
      cy.get(
        "body > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > div:nth-child(1) > ul:nth-child(2) > li:nth-child(3) > a:nth-child(1) > span:nth-child(2)"
      ).click();
      cy.checkBrokenLinks(); // Execute after the second click
  
      // Click on the third element
      cy.get('aside[id="desktopSidebar"] li:nth-child(1)').click();
      cy.checkBrokenLinks(); // Execute after the third click
    });
  });
  