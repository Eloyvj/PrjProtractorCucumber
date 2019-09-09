'use strict'

const Data = require('./features/support/environments.json')
const Credentials = require('./features/support/credentials.json')

const TEST_ENV = process.env.TEST_ENV || 'local'
let environment

switch (TEST_ENV) {
  case 'local':
    environment = Data[0].local
    break
  case 'homolog':
    environment = Data[1].homolog
    break
}

let credentials
credentials = Credentials


exports.config = {
  seleniumAddress: environment.seleniumAddress,
  ignoreUncaughtExceptions: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  getPageTimeout: 60000,
	allScriptsTimeout: 60000,
  baseUrl: environment.baseUrl,
  params: {
    login: credentials.crmUser.login,
    password: credentials.crmUser.password,
    customerCnpj: credentials.customerCnpj
  },

  specs: [
    'features/*.feature'
  ],

  capabilities: {
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
  },

  cucumberOpts: {
    require: './features/step_definitions/*.js',
    tags: ['~@notImplemented'],
    // tags: ['@login'],
    // tags: ['@searchCustomer'],
    format: 'json:.tmp/results.json',
    strict: true
  },

  plugins: [{
    package: 'protractor-multiple-cucumber-html-reporter-plugin',
    options: {
      pageTitle: 'Tests Execution Report',
      openReportInBrowser: true,
      automaticallyGenerateReport: true,
      removeExistingJsonReportFile: true,
      displayDuration: true,
      durationInMS: true,
      customData: {
        title: 'Run Info',
        data: [
          {label: 'Project', value: 'Iti - Atendimento'},
          {label: 'Version', value: '1.0.0'}
        ]
      }
    }
  }],

  onPrepare: function () {
    // Use only for angular applications
    // False: app Angular
    // True: app not Angular
    browser.ignoreSynchronization = true
    // Set window size for maximum size
    browser.driver.manage().window().maximize()
  }
}