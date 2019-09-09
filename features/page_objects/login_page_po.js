'use strict'
const Helper = require('../../shared_libs/helper.js')

class LoginPage {

  constructor() {
    this.helper = new Helper()
    this.loginField = element(by.name('identification'))
    this.passwordField = element(by.name('password'))
    this.loginButton = element(by.buttonText('Entrar'))
    this.invalidLoginPassword = element(by.css('#PismoID > div > div > div > form > div.mb4 > div.f7.f6-ns.bold.dark-red.tc'))
  }

  open () {
    return browser.get('/')
  }

  clickLoginField () {
    this.helper.elementIsClickable(this.loginField)
    return this.loginField.click()
  }

  fillLoginField (login) {
    this.helper.elementIsPresenceDom(this.loginField)
    return this.loginField.sendKeys(login)
  }

  clickPasswordField () {
    this.helper.elementIsClickable(this.passwordField)
    return this.passwordField.click()
  }

  fillPasswordField (password) {
    this.helper.elementIsPresenceDom(this.passwordField)
    return this.passwordField.sendKeys(password)
  }

  clickLoginButton () {
    this.helper.elementIsClickable(this.loginButton)
    return this.loginButton.click()
  }

  getMessageInvalidLoginPassword () {
    this.helper.elementIsVisible(this.invalidLoginPassword)
    return this.invalidLoginPassword.getText()
  }

}
module.exports = LoginPage