const { Given, When, Then } = require('cucumber')
const expect = require('chai').use(require('chai-as-promised')).expect

const PokeList = require('../page_objects/poke_list_po')
const page = new PokeList()

Given('I am in pokemons list', async function () {
  await page.open('/')
})

When('I type name mewtow in search field', async function () {
  await page.fillSearchField('Mewtwo')
  await page.clickTabToSearch()
})

Then('I should see the updated list with searched pokemon', async function () {
  await expect(page.getResultText()).to.eventually.equal('Mewtwo')
})
