var assert = require('assert');

describe('e2e testing -> losestudiantes.co', function() {

  beforeEach(function() {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 50000;
  });

  afterEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });

  it('Visitar Los estudiantes y buscar profesor.', function() {
    browser.url('https://losestudiantes.co');
    browser.click('button=Cerrar');
    
    browser.waitForVisible('.Select-input', 5000);
    var finderBox = browser.element('.Select-input');
    var finderInput = finderBox.element('input[name="nombre"]');

    finderInput.click();
    finderInput.keys('Fernando Arruza');
  });
});
