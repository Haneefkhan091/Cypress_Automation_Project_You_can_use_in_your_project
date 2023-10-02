const { defineConfig } = require("cypress");
const {addCucumberPreprocessorPlugin} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");


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
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    projectId: "ncf61t",
    env: {
      hideXhr: true,
    },
  },
});
