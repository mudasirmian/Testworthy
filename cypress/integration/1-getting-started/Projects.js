///<reference types ='cypress'/>

describe('Open Project', function (){
    beforeEach (function (){
        cy.visit('/')
        cy.fixture('data').then(function(data) {
            this.data = data
            cy.login(data.email,data.password)
        })
    })

    it('Project Overview Page', function(){

        cy.Project_OverView()              
    })
})