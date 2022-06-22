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

        // cy.get('.hover-row-edit').invoke('show').then(()=>{
        //     cy.get('.hover-row-edit')
        //     .find('span.edit-icon').eq(0)
        //     .click()
        //     cy.get('#btnAddEditPlan').click({force: true})
        // })        
    //    ******* Delete Test Plan ******
    
        cy.get('.hover-row-edit').invoke('show').then(()=>{
            cy.get('.hover-row-edit')
            .find('span.trash-icon').eq(0)
            .click()
            cy.get('#deleteTestPlanModalBtn').click()

        })          
        
    })

    it('Add Results in Testplan', function(){
        cy.Project_OverView() 
        cy.get('.header-nav').find('li').eq(3).click() // Click on Test Plan Tab
        cy.contains('Smoke test plan').click()
        cy.contains('Smoke Test Run').click()

         cy.get('[type=checkbox]').check('32348').then($addBulkResults =>{
            if ($addBulkResults.is(':checked')){
                cy.get('#addBulkResults').click({force: true})
            }
            else{
                cy.log('No Checkbox Found')
            }
        })

        cy.get('#StatusId').select('Failed').should('have.value', '5')
        cy.get('#btnAddResult').click()
    })

    afterEach(() => {
        cy.Logout()
      })
})


