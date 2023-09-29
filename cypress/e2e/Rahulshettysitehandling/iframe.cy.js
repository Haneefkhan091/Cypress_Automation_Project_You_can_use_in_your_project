describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://the-internet.herokuapp.com/iframe");
  });
  it("passes", () => {
    cy.frameLoaded("#mce_0_ifr");
    cy.iframe("#mce_0_ifr").wait(1000).clear().type("Haneef Khan Here {cmd+a}");
    cy.get('[aria-label="Bold"]').click({ force: true }).wait(40000);
  });
});
