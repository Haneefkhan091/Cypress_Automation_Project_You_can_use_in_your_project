describe("JWT Session", () => {
  beforeEach(() => {
    cy.loginapi().then(function () {
      cy.visit(
        "https://rahulshettyacademy.com/client",

        {
          onBeforeLoad: function (window) {
            window.localStorage.setItem("token", Cypress.env("token"));
          },
        }
      );
      cy.viewport(1280,700)
    });
  });
  it("is logged in through local storage", async () => {
   
    cy.get(".card-body button:last-of-type").eq(1).click({force:true});

    cy.get("[routerlink*='cart']").click({force:true});

    cy.contains("Checkout").click({force:true});

    cy.get("[placeholder*='Country']").type("ind");

    cy.get(".ta-results button").each(($e1, index, $list) => {
      if ($e1.text() === " India") {
        cy.wrap($e1).click();
      }
    });

    cy.get(".action__submit").click();

    cy.wait(2000);

    cy.get(".order-summary button").click({multiple:true});
    cy.contains('csv').click({force:true})
    
    cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_Haneef.csv")
  });
});
