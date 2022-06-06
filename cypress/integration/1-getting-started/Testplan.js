///<reference types="cypress"/>

describe('Add_TestPlan', function(){
    beforeEach(function(){
        cy.visit('/')
        cy.fixture('data').then(function(data){
            this.data = data
        cy.login(data.email,data.password)
        })  
    })
    
    it('Add Test Plan', function(){
        cy.Project_OverView() 
        cy.TestPlan(this.data.TestPlan_Name, this.data.TestPlan_Description, this.data.Suite_Name)
    })
})


