describe('Buscar profesor', function() {
    it('Buscar profesor.', function() {

        // Registrar nueva cuenta
        cy.visit('https://losestudiantes.co')
        cy.contains('Cerrar').click()

        cy.get('.Select-input').find('input[role="combobox"]').type("Fernando Arruza", {force:true})
        cy.contains('Fernando Arruza Hedman - Ingeniería de Sistemas')
    })
})
