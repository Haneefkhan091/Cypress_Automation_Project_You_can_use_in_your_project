describe("Parent and child window concept", () => {
  const url = "https://rahulshettyacademy.com/AutomationPractice/";

  beforeEach("visit website", () => {
    cy.visit(url);
  });

  it("checking Parent and child window concept", () => {
    const thresholds = {
      performance: 50,
      accessibility: 90,
      'best-practices': 80,
      seo: 80,
    };
    const opts = {
      formFactor: 'desktop',
      screenEmulation: {
        mobile: false,
        disable: false,
        width: Cypress.config('viewportWidth'),
        height: Cypress.config('viewportHeight'),
        deviceScaleRatio: 1,
      },
    };
    
    cy.url().then((url) => {
      cy.task('lighthouse', {
        url,
        thresholds,
        opts,
      }).then((report) => {
        const categories = report.lhr.categories;
        
        cy.log(`Performance: ${categories.performance.score}`);
        cy.log(`Accessibility: ${categories.accessibility.score}`);
        cy.log(`Best Practices: ${categories['best-practices'].score}`);
        cy.log(`SEO: ${categories.seo.score}`);
      });
    });
  });
});
