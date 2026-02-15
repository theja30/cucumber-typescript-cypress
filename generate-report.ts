const report = require('multiple-cucumber-html-reporter');

report.generate({
  jsonDir: './reports/', // Must match the output in Step 1
  reportPath: './reports/html-report/',
  metadata: {
    browser: { name: 'chrome', version: 'latest' },
    device: 'Local test machine',
    platform: { name: 'windows' }
  }
});