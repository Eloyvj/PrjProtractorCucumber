const { Given, When, Then } = require('cucumber')
const expectPromised = require('chai').use(require('chai-as-promised')).expect
const expect = require('chai').expect

const LoginPage = require('../page_objects/login_page_po')
const loginPage = new LoginPage()
const SearchPage = require('../page_objects/search_page_po')
const searchPage = new SearchPage()

Given ('Estou na tela de login do CRM', async function () {
    await loginPage.open()
})

When ('Realizar login com usuário e senha corretos', async function () {
    await loginPage.clickLoginField()
    await loginPage.fillLoginField(browser.params.login)
    await loginPage.clickPasswordField()
    await loginPage.fillPasswordField(browser.params.password)
    await loginPage.clickLoginButton()
})

When('Realizar login com usuário correto e senha incorreta', async function () {
    await loginPage.clickLoginField()
    await loginPage.fillLoginField(browser.params.login).isDisplayed()
    await loginPage.clickPasswordField()
    await loginPage.fillPasswordField('P?smo120')
    await loginPage.clickLoginButton()
})

Then ('Devo visualizar a tela para consulta de cliente', async function () {
    await searchPage.customerSearchFieldPlaceHolder().then(function(msg) {
        expect(msg).to.equal('Buscar por email, CPF/CNPJ ou número da conta bancária.')
    })
    await searchPage.clickProfileIcon()
    await searchPage.clickExitOption()
})

Then('Devo visualizar a mensagem com o feedback de usuario e senha invalidos', async function () {
    await loginPage.getMessageInvalidLoginPassword().then(function(msg) {
        expect(msg).to.equal('Usuário ou senha inválido')
    })
})