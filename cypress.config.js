const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");

async function setupNodeEvents2(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  watchForFileChanges: false,
  pageLoadTimeout: 50000,
  experimentalStudio: true,
  chromeWebSecurity: false,
  defaultCommandTimeout: 50000,
  screenshotOnRunFailure: true,
  e2e: {
    experimentalRunAllSpecs: true,
    setupNodeEvents2,
    // specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });

      on("task", {
        async lighthouse(allOptions) {
          let txt;
          const lighthouseTask = lighthouse((lighthouseReport) => {
            let lighthouseScoreText = "";
            let lighthouseResult = lighthouseReport?.lhr?.categories;
            let lighthousePerformance =
              "Performance: " + lighthouseResult?.performance?.score + "\n";
            let lighthouseAccessibility =
              "Accessibility: " + lighthouseResult?.accessibility?.score + "\n";
            let lighthouseBestPractices =
              "Best Practices: " +
              lighthouseResult?.["best-practices"]?.score +
              "\n";
            let lighthouseSEO = "SEO: " + lighthouseResult?.seo?.score + "\n";
            lighthouseScoreText =
              lighthousePerformance +
              lighthouseAccessibility +
              lighthouseBestPractices +
              lighthouseSEO;

            console.log(lighthouseScoreText);
            txt = lighthouseScoreText;
          });

          const report = await lighthouseTask(allOptions);
          report.txt = txt;
          return report;
        },
      });
    }, // <-- Remove this extra closing bracket
    projectId: "ncf61t",
    env: {
      hideXhr: true,
    },
  },
});
