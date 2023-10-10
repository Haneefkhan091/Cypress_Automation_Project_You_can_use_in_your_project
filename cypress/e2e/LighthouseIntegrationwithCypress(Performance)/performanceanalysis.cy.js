describe("Lighhouse integration with cypress", () => {
  const url = "https://rahulshettyacademy.com/AutomationPractice/"; // Define the URL here

  beforeEach("visit website", () => {
    cy.visit(url);
  });

  it("Lighthouse threshhold", () => {
    const lighthousemetrics = {
      performance: 95,
      accessibility: 100,
      "best-practices": 95,
      seo: 85,
      pwa: 100,
    };
    cy.lighthouse(lighthousemetrics);
  });
});
