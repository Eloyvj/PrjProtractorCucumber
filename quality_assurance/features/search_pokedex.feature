#language: en

@example
Feature: Pokedex list

    # Functional
    @search
    Scenario: Search pokemons by name
        Given I am in pokemons list
        When I type name mewtow in search field
        Then I should see the updated list with searched pokemon