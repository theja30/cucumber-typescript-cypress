// .cypress-cucumber-preprocessorrc.js
const reportId = process.pid;

module.exports = {
  json: {
    enabled: true,
    output: `reports/json/report-${reportId}.json`
  },
  stepDefinitions: [
    "cypress/e2e/step_definitions/**/*.{js,ts}"
  ]
};