'use strict'

const Data = require('./environments_parameters.json')

const TEST_ENV = process.env.TEST_ENV || 'local'
let environmentParameters

switch (TEST_ENV) {
  case 'local':
    environmentParameters = Data[0].local
    break
  case 'homolog':
    environmentParameters = Data[1].homolog
    break
}

exports.config = {
  seleniumAddress: environmentParameters.seleniumAddress,
  ignoreUncaughtExceptions: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  restartBrowserBetweenTests: false,
  getPageTimeout: 50000,
  allScriptsTimeout: 30000,
  rootElement: '*[ng-app]',
  baseUrl: environmentParameters.baseUrl,
  params: {

  },

  specs: [
    'features/*.feature'
  ],

  exclude: [
  ],

  multiCapabilities: [{
    'browserName': 'firefox',
    // Info for report
    metadata: {
      device: 'Macbook Pro',
      platform: {
        name: 'OSX'
      }
    }
  },
  {
    'browserName': 'chrome',
    chromeOptions: {
      args: [
        '--disable-gpu'
      ]
    },
    // Info for report
    metadata: {
      device: 'Macbook Pro',
      platform: {
        name: 'OSX'
      }
    }
  }
  ],

  cucumberOpts: {
    require: '../features/step_definitions/*.js',
    tags: ['~@notImplemented'],
    // tags: ['@search'],
    format: 'json:.tmp/results.json',
    strict: true
  },

  plugins: [{
    package: 'protractor-multiple-cucumber-html-reporter-plugin',
    options: {
      automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true
    }
  }],

  beforeLaunch: function () {
  },

  onPrepare: function () {
    // Use only for angular applications
    // False: app Angular
    // True: app not Angular
    browser.ignoreSynchronization = false
    // Set window size for maximum size
    browser.driver.manage().window().maximize()
  },

  afterLaunch: function () {
  }
}
