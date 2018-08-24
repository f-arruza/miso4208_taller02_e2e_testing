module.exports = {
  'Filtrar comentarios por materia.': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .waitForElementVisible('.buscador', 2000)
      .click('.Select-input')
      .setValue('.Select-input input[role="combobox"]','Rubby Casallas')
      .waitForElementVisible('.Select-option', 2000)
      .assert.containsText('.Select-option', 'Rubby Casallas Gutierrez - Ingeniería De Sistemas')
      .click('.Select-option')
      .waitForElementVisible('.nombreProfesor', 2000)
      .click('.materias input[name="id:MISO4203"]')
      .assert.containsText('.jsx-3672521041', 'Gest. De Proy. Desarrollo Soft')
      .end();
  }
};
