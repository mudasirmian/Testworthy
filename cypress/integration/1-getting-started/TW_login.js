///<reference types ='cypress'/>

describe("Login Suite", function() {
    beforeEach(()=>
 {
    cy.visit('/') //BasecURL
    cy.fixture('data').then(function(data){
        this.data = data
        cy.login(data.email, data.password)
    })
})

it('Login', () =>
    {
        cy.contains('My Dashboard').should('exist')

        cy.get('label > span > a').should('contain','My Dashboard')           

        cy.get('#txtHeaderUserName').should('contain', 'Mudasir Raza')

    })
})

afterEach(()=>
 {
    cy.Logout()

    cy.contains('Welcome Back !').should('be.visible')

    cy.url().should('eq', 'https://testworthy.us/Login')
})

