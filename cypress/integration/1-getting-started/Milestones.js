///<reference types="cypress"/>

describe('Add_TestPlan', function(){
    beforeEach(function(){
        cy.visit('/')
        cy.fixture('data').then(function(data){
            this.data = data
        cy.login(this.data.email,this.data.password)
        })

    })
   it('Add New Milestone', function(){
    cy.Project_OverView() 
    cy.Milestone(this.data.Milestone_Name, this.data.Description, this.data.Start_date, this.data.End_date)
    
    // ************* Delete Milestone ***********
    // cy.get('.project-filter').invoke('show').eq(0).then(()=>{
    //     cy.get('.hover-row-edit')
    //     cy.get('span.trash-icon').click()
    // })
   })

   it('Open Milestone', function (){

    cy.Project_OverView()
    cy.get('.header-nav').find('li').eq(1).click()
    cy.get('#listOpenCompleted3 > :nth-child(2) > :nth-child(1) > .row > :nth-child(1) > .custom-control > .custom-control-label').click({Force: true})
    cy.url().should('include', 'DetailView')

    // ********** Add Sub-Milestone ********
    
    cy.get('#lnkAddSubMilestone > .btn').click({force: true})
    cy.get('#Name').type(this.data.Sub_Milestone_Name)
    cy.get('#Description').type(this.data.SubMilestoneDescription)
    cy.get('#dpStartDate').type(this.data.Start_date) // Add start date 
    cy.get('#dpEndDate').type(this.data.End_date) // End date
    cy.get('#btnAddEditMilestone').click()
  
   })

   it('Add Test plan in Sub Milestone', function(){

    cy.Project_OverView()
    cy.get('.header-nav').find('li').eq(3).click() // Click on Test Plan Tab
    cy.url().should('include', 'TestPlan')

     //    ******* Edit Test Plan ******

     cy.get('.hover-row-edit').invoke('show').then(()=>{
        cy.get('.hover-row-edit')
        .find('span.edit-icon').eq(0)
        .click()
        cy.get('#selectedMilestone').click()
        cy.get('[data-value="1648"]').click() //Select Milestone
        cy.get('#btnAddEditPlan').click()
        cy.url().should('include', 'TestPlan/OverView')
     })  
   })
})


