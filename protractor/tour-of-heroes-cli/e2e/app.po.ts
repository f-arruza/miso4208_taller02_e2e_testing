import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }

  searchHeroe(hero_name: string) {
    element(by.id('search-box')).sendKeys(hero_name);
    return element.all(by.css('.search-result')).getText();
  }

  deleteHeroe(hero_name: string) {
    var list = this.getAllHeroes();

    list.each(function(key) {
      key.all(by.tagName('span')).get(1).getText().then(function (val) {
        if (val == hero_name) {
          key.all(by.tagName('button')).click();
        }
      })
    });
  }
}
