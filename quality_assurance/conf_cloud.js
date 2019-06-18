'use strict'

// const Data = require('./environments_parameters.json')
// let environmentParameters

// const TEST_ENV = process.env.TEST_ENV || 'cloud'

// switch (TEST_ENV) {
//   case 'local':
//     environmentParameters = Data[0].local
//     break
//   case 'homolog':
//     environmentParameters = Data[1].homolog
//     break
//   case 'cloud':
//     environmentParameters = Data[2].cloud
//     break
// }

var browserstack = require('browserstack-local')

exports.config = {
  // seleniumAddress: environmentParameters.seleniumAddress,
  seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',
  ignoreUncaughtExceptions: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  restartBrowserBetweenTests: false,
  getPageTimeout: 50000,
  allScriptsTimeout: 30000,
  rootElement: '*[ng-app]',
  // baseUrl: environmentParameters.baseUrl,
  baseUrl: 'https://pokedex-angular-example.herokuapp.com',
  params: {

  },

  specs: [
    'features/*.feature'
  ],

  exclude: [
  ],

  multiCapabilities: [{
    'browserstack.user': 'eloyvitoriojunio2',
    'browserstack.key': 'p2yEXNa9N9CC3N7AEqC2',
    'os': 'Windows',
    'os_version': '10',
    'browserName': 'Firefox',
    'browser_version': '67.0',
    'name': 'Bstack-[Protractor] e2e - Firefox',
    // Info for report
    metadata: {
      device: 'Virtual Machine',
      platform: {
        name: 'windows',
        version: '10'
      }
    }
  },
  { 
    'browserstack.user': 'eloyvitoriojunio2',
    'browserstack.key': 'p2yEXNa9N9CC3N7AEqC2',
    'os': 'Windows',
    'os_version': '10',
    'browserName': 'chrome',
    'browser_version': '75.0',
    'name': 'Bstack-[Protractor] e2e - Chrome',
    // Info for report
    metadata: {
      device: 'Virtual Machine',
      platform: {
        name: 'windows',
        version: '10'
      }
    }
  },
  {
    'browserstack.user': 'eloyvitoriojunio2',
    'browserstack.key': 'p2yEXNa9N9CC3N7AEqC2',
    'os': 'Windows',
    'os_version': '10',
    'browserName': 'IE',
    'browser_version': '11.0',
    'name': 'Bstack-[Protractor] e2e - IE',
    // Info for report
    metadata: {
      device: 'Virtual Machine',
      platform: {
        name: 'windows',
        version: '10'
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
      removeExistingJsonReportFile: true,
      reportName: 'Test Execution Report'
    }
  }],

  beforeLaunch: function () {
    console.log("Connecting local");
    return new Promise(function(resolve, reject){
      exports.bs_local = new browserstack.Local();
      exports.bs_local.start({'key': exports.config.multiCapabilities[0]["browserstack.key"] }, function(error) {
        if (error) return reject(error);
        console.log('Connected. Now testing...');

        resolve();
      });
    });
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
    return new Promise(function(resolve, reject){
      exports.bs_local.stop(resolve);
    })
  }
}
