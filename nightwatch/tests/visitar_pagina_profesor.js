module.exports = {
  'Ingresar a página del profesor.': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .waitForElementVisible('.buscador', 2000)
      .click('.Select-input')
      .setValue('.Select-input input[role="combobox"]','Fernando Arruza')
      .waitForElementVisible('.Select-option', 2000)
      .assert.containsText('.Select-option', 'Fernando Arruza Hedman - Ingeniería De Sistemas')
      .click('.Select-option')
      .waitForElementVisible('.nombreProfesor', 2000)
      .assert.containsText('.nombreProfesor', 'Fernando Arruza')
      .end();
  }
};
