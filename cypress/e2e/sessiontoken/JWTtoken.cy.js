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
    
    // cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_Haneef.csv")
    cy.readFile(Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_Haneef.csv").then((fileContent) => {
      // Split the CSV content by line to get an array of rows
      const rows = fileContent.split("\n");
    
      // Loop through each row and log its content
      rows.forEach((row, index) => {
        // Skip the header row (if it exists)
        if (index === 0) return;
    
        // Split the row by the CSV delimiter (usually a comma)
        const columns = row.split(",");
    
        // Log the data from each column
        cy.log(`Row ${index}:`);
        columns.forEach((column, columnIndex) => {
          cy.log(`  Column ${columnIndex + 1}: ${column.trim()}`);
        });
      });
    });
    

  });
});
