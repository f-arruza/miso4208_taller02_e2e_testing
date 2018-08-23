import { TourOfHeroesPage } from './app.po';

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('Buscar héroes.', () => {
    page.navigateTo();
    expect(page.searchHeroes('Dr')).toEqual(['Dr IQ']);
  });

  it('Navegar a un héroe desde el dashboard.', () => {
    page.navigateHeroeFromDashboard(2);
    expect(page.getTitleEditPage()).toEqual('Bombasto details!');
  });

  it('Navegar a un héroe desde la búsqueda.', () => {
    page.navigateToDashboard();
    page.navigateHeroeFromFinder('Celeritas');
    expect(page.getTitleEditPage()).toEqual('Celeritas details!');
  });
});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('Eliminar héroes.', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.deleteHero('Zero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n - 1));
  });

  it('Editar héroe.', () => {
    expect(page.selectHero('Narco')).toEqual('NARCO is my hero');
    expect(page.gotoEditPage()).toEqual('Narco details!');
    page.editHero('Fernando');

    page.navigateToDashboard();
    expect(page.searchHeroes('Fern')).toEqual(['Fernando']);
  });

  it('Navegar a un héroe desde el listado.', () => {
    page.navigateToHeroes();
    expect(page.selectHero('Magma')).toEqual('MAGMA is my hero');
    expect(page.gotoEditPage()).toEqual('Magma details!');
  });
});
