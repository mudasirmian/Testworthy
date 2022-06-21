///<reference types="cypress"/>

describe('Add_TestPlan', function(){
    beforeEach(function(){
        cy.visit('/')
        cy.fixture('data').then(function(data){
            this.data = data
        cy.login(this.data.email,this.data.password)
        })

    })
    
    it('Add Test Plan', function(){
        cy.Project_OverView() 
        cy.TestPlan(this.data.TestPlan_Name, this.data.TestPlan_Description, this.data.Suite_Name)
        cy.wait(300);
        
    //    ******* Edit Test Plan ******

        cy.get('.hover-row-edit').invoke('show').then(()=>{
            cy.get('.hover-row-edit')
            .find('span.edit-icon').eq(0)
            .click()
            cy.get('#btnAddEditPlan').click()
        })        
    //    ******* Delete Test Plan ******
    
        cy.get('.hover-row-edit').invoke('show').then(()=>{
            cy.get('.hover-row-edit')
            .find('span.trash-icon').eq(0)
            .click()
            cy.get('#deleteTestPlanModalBtn').click()
           
        })          
        
    })
})


