import {browser, by, element, ElementFinder} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToDashboard() {
    element(by.linkText('Dashboard')).click();
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

  searchHeroes(hero_name: string) {
    element(by.id('search-box')).sendKeys(hero_name);
    return element.all(by.css('.search-result')).getText();
  }

  deleteHero(hero_name: string) {
    var list = this.getAllHeroes();

    list.each(function(key) {
      key.all(by.tagName('span')).get(1).getText().then(function (val) {
        if (val == hero_name) {
          key.all(by.tagName('button')).click();
        }
      })
    });
  }

  selectHero(hero_name: string) {
    var list = this.getAllHeroes();

    list.each(function(key) {
      key.all(by.tagName('span')).get(1).getText().then(function (val) {
        if (val == hero_name) {
          key.all(by.tagName('span')).get(1).click();
        }
      })
    });
    return element(by.tagName('my-heroes')).all(by.tagName('div')).get(1).all(by.tagName('h2')).get(0).getText();
  }

  gotoEditPage() {
    element(by.tagName('my-heroes')).all(by.tagName('div')).get(1).all(by.tagName('button')).click();
    return element(by.tagName('h2')).getText();
  }

  editHero(hero_new_name: string) {
    element(by.tagName('input')).clear();
    element(by.tagName('input')).sendKeys(hero_new_name);
    element(by.xpath('//html/body/my-app/hero-detail/div/button[2]')).click();
    // browser.driver.sleep(5000);
  }
}
