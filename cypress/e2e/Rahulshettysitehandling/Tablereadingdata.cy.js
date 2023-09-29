describe("template spec", () => {
  beforeEach(() => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
  });

  it("passes", () => {
    cy.get(":nth-child(5) > .left-align > fieldset > legend").scrollIntoView({
      duration: 1000,
    });

    cy.get('table[class="table-display"]>tbody>tr').each(
      ($row, index, $rows) => {
        cy.wrap($row).within(() => {
          cy.wait(2000)
          cy.get("td",{force:true}).each(($col, index, $cols) => {
            cy.log($col.text());
          });
        });
      }
    );
  });
});
