/// <reference types="cypress" />

describe('Teste para a página de agenda', () => {
    beforeEach(()=>{
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve renderizar 3 contatos', () => {
        cy.get('.sc-iAEyYk > .sc-beqWaB').should('have.length', 3)
    })

    it('Deve inserir um novo contato', () => {
        cy.get('input[type="text"]').type('Jônatas Carvalho')
        cy.get('input[type="email"]').type('jonatas@gmail.com')
        cy.get('input[type="tel"]').type('11971271858')
        cy.get('.adicionar').click()
        cy.get('.sc-iAEyYk > .sc-beqWaB').should('have.length', 4)
    })

    it('Deve alterar um contato existente', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .edit').click()
        cy.get('input[type="email"]').clear()
        cy.get('input[type="email"]').type('jonatas.07022003@gmail.com')
        cy.get('.alterar').click()
    })

    it('Deve deletar um contato existente', () => {
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click()
        cy.get('.sc-iAEyYk > .sc-beqWaB').should('have.length', 3)
    })

})