const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: 'cypress-mochawesome-reporter',
  video: true,
  retries: 1,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    // video:false,
    // reporter: 'mochawesome',
    // reporterOptions: {
    //   reportDir: 'cypress/results',
    //   overwrite: false,
    //   html: false,
    //   json: true,
    // },

    parseSpecialCharSequences : false,
  },
});
