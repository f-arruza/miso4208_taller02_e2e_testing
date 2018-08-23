import { TourOfHeroesPage } from './app.po';

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
    page.navigateTo();
  });

  it('Buscar héroes.', () => {
    expect(page.searchHeroe('Dr')).toEqual(['Dr IQ']);
  });

  // it('should display top 4 heroes', () => {
  //   page.navigateTo();
  //   expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  // });
  //
  // it('should navigate to heroes', () => {
  //   page.navigateToHeroes();
  //   expect(page.getAllHeroes().count()).toBe(11);
  // });
});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('Eliminar héroes.', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.deleteHeroe('Zero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n - 1));
  });

  // it('should add a new hero', () => {
  //   const currentHeroes = page.getAllHeroes().count();
  //   page.enterNewHeroInInput('My new Hero');
  //   expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  // });
});
