const { defineConfig } = require("cypress");


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

      require("cypress-mochawesome-reporter/plugin")(on);
      // implement node event listeners here
    },
    projectId: "ncf61t",
    env:{
      hideXhr: true
    }
  },
});
