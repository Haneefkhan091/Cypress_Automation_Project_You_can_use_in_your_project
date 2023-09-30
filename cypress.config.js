const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

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
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on("file:preprocessor", preprocessor(config));
      require("cypress-mochawesome-reporter/plugin")(on);
      // implement node event listeners here
    },
    projectId: "ncf61t",
    // env:{
    //   hideXhr: true
    // }
  },
});
