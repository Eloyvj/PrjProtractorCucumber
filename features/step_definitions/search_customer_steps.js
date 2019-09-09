const { Given, When, Then } = require('cucumber')
const expect = require('chai').use(require('chai-as-promised')).expect

const LoginPage = require('../page_objects/login_page_po')
const loginPage = new LoginPage()
const SearchPage = require('../page_objects/search_page_po')
const searchPage = new SearchPage()
const PrepaidPage = require('../page_objects/prepaid_page_po')
const prepaidPage = new PrepaidPage()

Given('Estou na tela de consulta de clientes do CRM', async function () {
    await loginPage.open()
    await loginPage.clickLoginField()
    await loginPage.fillLoginField(browser.params.login)
    await loginPage.clickPasswordField()
    await loginPage.fillPasswordField(browser.params.password)
    await loginPage.clickLoginButton()
})

When('Realizar realizar de cliente por CNPJ', async function () {
    await searchPage.clickCustomerSearchField()
    await searchPage.fillCustomerSearchField(browser.params.customerCnpj)
    await searchPage.clickFirstCustomerResult()
})

Then('Devo visualizar a tela de extrato do cliente pesquisado por default', async function () {
    await prepaidPage.prepaidButtonIsDisplayed().then(function(isDisplayed) {
        expect(isDisplayed).to.be.true
    })
    await searchPage.clickEndProtocol()
    await searchPage.clickProfileIcon()
    await searchPage.clickExitOption()
})

