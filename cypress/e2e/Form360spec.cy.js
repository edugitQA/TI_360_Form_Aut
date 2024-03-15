/// <reference types="Cypress" />

describe('Automação de formulário', function() {
  beforeEach(function() {
  cy.visit('https://ti360form.netlify.app/')
})
it('Validando cadastro com preenchimento de todos os campos', function() {
  cy.get('#firstName').type('EDUARDO')
  cy.get('#lastName').type('ALVES')
  cy.get('#seniority').select('pleno');
  cy.get('#email').type('EDU@GMAIL.COM')
  cy.get('input[name="question1"][value="front-end"]').check()
  cy.get('input[name="question2"][value="HTML"]').check()
  cy.get('input[name="question2"][value="PHP"]').check()
  cy.get('input[name="question2"][value="Python"]').check()
  cy.get('#comments').type('Sou um analista de testes apaixonado por tecnologia e qualidade de software. No decorrer da minha carreira adquiri habilidades em testes manuais, este manuais, testes regressivos, planejamento e modelagem de testes, reporte e')
  cy.get('button').click()
  cy.get('#formResults').should('contain','Nome')
})
it('Validando cadastro com preenchimento apenas dos campos obrigarótios', function() {
  cy.get('#firstName').type('EDUARDO')
  cy.get('#lastName').type('ALVES')
  cy.get('#seniority').select('pleno')
  cy.get('#email').type('EDU@GMAIL.COM')
  cy.get('input[name="question1"][value="back-end"]').check()
  cy.get('button').click()
  cy.get('#formResults').should('contain','Nome')

})
it('Validando cadastro sem o preenchimento dos campos obrigarótios', function() {
          cy.get('button').click()
      // Verifica se as mensagens de erro são exibidas para os campos obrigatorios
            cy.get('#myForm').within(() => {
            cy.get('label[for="firstName"]').should('have.text', 'Nome:').next().should('have.attr', 'required')
            cy.get('label[for="lastName"]').should('have.text', 'Sobrenome:').next().should('have.attr', 'required')
            cy.get('label[for="seniority"]').should('have.text', 'Senioridade:').next().should('have.attr', 'required')
            cy.get('label[for="email"]').should('have.text', 'Email:').next().should('have.attr', 'required')
    })
  })
})




