'use strict'
const Helper = require('../../shared_libs/helper.js')

class SearchPage  {

  constructor() {
    this.helper = new Helper()
    this.searchCustomerField = element(by.name('CustomerSearchInput'))
    this.profileIcon = element(by.css('#root > div > div:nth-child(2) > div.AppBar.z-max.dt.w-100.border-box.shadow-2.bg-pismo-darker-blue.white.relative > div.app-menu-right.dtc.v-mid.w-25.tl > nav > div > div > svg'))
    this.exitOption = element(by.css('#root > div > div:nth-child(2) > div.AppBar.z-max.dt.w-100.border-box.shadow-2.bg-pismo-darker-blue.white.relative > div.app-menu-right.dtc.v-mid.w-25.tl > nav > div > div > div > div:nth-child(2) > div > ul > li:nth-child(5) > div'))
    this.firstCustomerResult = element(by.css('#root > div > div:nth-child(2) > div:nth-child(2) > div > div > div.bg-pismo-light-gray.z-1.CustomerSearchResults > a:nth-child(1) > article > div.w-83.w-86-ns.dib.v-mid > div.dn.db-ns'))
    this.endProtocolButton = element(by.css('#root > div > div:nth-child(2) > div.AppBar.z-max.dt.w-100.border-box.shadow-2.bg-pismo-darker-blue.white.relative > div.app-menu-left.dtc.v-mid.w-75.tl > div > a > svg'))
  }

  customerSearchFieldPlaceHolder() {
    this.helper.elementIsClickable(this.searchCustomerField)
    return this.searchCustomerField.getAttribute('placeholder')
  }

  clickProfileIcon() {
    this.helper.elementIsClickable(this.profileIcon)
    return this.profileIcon.click()
  }

  clickExitOption() {
    this.helper.elementIsClickable(this.exitOption)
    return this.exitOption.click()
  }

  clickCustomerSearchField() {
    this.helper.elementIsClickable(this.searchCustomerField)
    return this.searchCustomerField.click()
  }

  fillCustomerSearchField(customerIdentification) {
    this.helper.elementIsClickable(this.searchCustomerField)
    return this.searchCustomerField.sendKeys(customerIdentification)
  }

  clickFirstCustomerResult() {
    this.helper.elementIsClickable(this.firstCustomerResult)
    return this.firstCustomerResult.click()
  }

  clickEndProtocol() {
    this.helper.elementIsClickable(this.endProtocolButton)
    return this.endProtocolButton.click()
  }
}
module.exports = SearchPage