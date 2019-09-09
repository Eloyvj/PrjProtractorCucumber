'use strict'
const Helper = require('../../shared_libs/helper.js')

class PrepaidPage {
  constructor () {
    this.helper = new Helper()
    this.prepaidButton = element(by.css('#root > div > div:nth-child(2) > div:nth-child(2) > div > nav > ul > li.tc.link-btn-container.w-19.prepaid'))
  }

  prepaidButtonIsDisplayed () {
    this.helper.elementIsClickable(this.prepaidButton)
    return this.prepaidButton.isDisplayed()
  }

  clickConfirmButtonToEndCall () {
    var alertDialog = browser.switchTo().alert()
    return alertDialog.accept()
  }
}
module.exports = PrepaidPage