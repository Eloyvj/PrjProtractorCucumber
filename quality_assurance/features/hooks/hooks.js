'use strict'

const waitSec = 1000
const { BeforeAll, After, Status } = require('cucumber')

BeforeAll({ timeout: 60 * waitSec }, async function () {
  console.log('\nStart executing tests ....')
})

After(async function (scenario) {
  let world = this
  if (scenario.result.status === Status.FAILED) {
    return await browser.takeScreenshot().then(function (buffer) {
      return world.attach(buffer, 'image/png')
    })
  }
})
