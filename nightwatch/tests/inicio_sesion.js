module.exports = {
  'Iniciar sesión.': function(browser) {
    browser
      .url('https://losestudiantes.co/')
      .click('.botonCerrar')
      .waitForElementVisible('.botonIngresar', 4000)
      .click('.botonIngresar')
      .waitForElementVisible('.cajaLogIn', 4000)
      .setValue('.cajaLogIn input[name="correo"]', 'f.arruza@uniandes.edu.co')
      .setValue('.cajaLogIn input[name="password"]', '1234567890')
      .click('.cajaLogIn .logInButton')
      .end();
  }
};
