'use strict'
const Helper = require('../shared_libs/helper.js')

class PokeList {
  constructor () {
    this.helper = new Helper()
    this.search = $('[placeholder="Pesquisar..."]')
    this.rows = element.all(
      by.repeater('item in PokemonsController.pokemons|filter: PokemonsController.filtro'))
  }

  open () {
    return browser.get('/')
  }

  fillSearchField (name) {
    this.helper.elementIsPresenceDom(this.search)
    return this.search.sendKeys(name)
  }

  clickTabToSearch () {
    this.helper.elementIsPresenceDom(this.search)
    return this.search.sendKeys(protractor.Key.TAB)
  }

  getResultText () {
    this.helper.elementIsPresenceDom(this.rows.first())
    return this.rows.first().element(by.binding('item.name')).getText()
  }
}
module.exports = PokeList
