// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress"/>
///<reference types="cypress-iframe" />

// import "cypress-real-events";
import "@testing-library/cypress/add-commands";
import "cypress-iframe";
// or
require("cypress-iframe");
import "@cypress-audit/lighthouse/commands";
Cypress.Commands.add("getIframe", (iframe) => {
  return cy
    .get(iframe)
    .its("0.contentDocument.body")
    .should("be. visible")
    .then(cy.wrap);
});

Cypress.Commands.add("selectProductByName", (productName) => {
  // Use cy.get to locate all product titles
  cy.get("h4.card-title").each((productTitle, index) => {
    // Once the desired product is found, select it and add to cart
    if (productTitle.text().includes(productName)) {
      cy.get(".btn.btn-info").eq(index).click();
      // You can add other actions related to adding to the cart here if needed
      return false; // Stop the each loop once the product is selected
    }
  });
});



//######## Find Broken Links ###########
Cypress.Commands.add("checkBrokenLinks", () => {
  let brokenLinks = 0;
  let activeLinks = 0;

  cy.get("a")
    .each(($link, index) => {
      const href = $link.attr("href");
      if (href) {
        cy.request({ url: href, failOnStatusCode: false }).then((response) => {
          if (response.status >= 400) {
            cy.log(`**** link ${index + 1} is a Broken Link *** ${href} `);
            brokenLinks++;
          } else {
            cy.log(`*** link ${index + 1} is an Active Link ***`);
            activeLinks++;
          }
        });
      }
    })
    .then(($links) => {
      const totalLinks = $links.length;
      cy.step("==========Total links==========");
      cy.log(`**** total links **** ${totalLinks}`);
      cy.step("==========broken links==========");
      cy.log(`**** broken links **** ${brokenLinks}`);
      cy.step("==========active links==========");
      cy.log(`**** active links **** ${activeLinks}`);
    });
});

//########### Light House Custom command##########
Cypress.Commands.add("runLighthouseAudit", (url, options) => {
  cy.visit(url);
  cy.lighthouse(options);
});

//JWS token handling?
Cypress.Commands.add("loginapi", () => {
  cy.request({
    method: "POST",
    url: "https://rahulshettyacademy.com/api/ecom/auth/login",
    body: {
      userEmail: "Haneef@yopmail.com",
      userPassword: "Haneef@123",
    },
  }).then((response) => {
    // Assert that the status code is 200
    expect(response.status).to.equal(200);
    Cypress.env("token", response.body.token);
  });
});
