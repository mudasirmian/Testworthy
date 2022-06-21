

Cypress.Commands.add('login', (email,password)=> 
{
    cy.get('#navbar').find('li').eq(4).click()      
    cy.get(':nth-child(6) > .nav-link').click()
    cy.get("#Email").clear().type(email)
    cy.get("#Password").clear().type(password)
    cy.get("#btnLogin").click()
    // cy.wait(100)
    cy.url().should('include', 'Dashboard')
})

Cypress.Commands.add('Logout', ()=> 
{
    cy.get('#dropdownMenuLinkMainHeader').click()
    cy.contains('Log Out').should('be.visible').click()
    cy.get('#frmLogout').click()
})

Cypress.Commands.add('Project_OverView', ()=> 
{
    cy.get('.sidebar-menu').find('li').eq(1).click() // Click on Project Page
    cy.url().should('include', 'ProjectList')
    cy.contains('Tw-Smoke list').click({force: true}) // Open Project 
    cy.contains('Project Health').should('be.visible')
})

Cypress.Commands.add('AddSuite', (Suite_Name,Suite_Description)=> 
{
    cy.get('.header-nav').find('li').eq('2').click() // Test suites and cases atb
    cy.get('#btnTestPlan').should('be.visible').click() // click on Add Suite
    cy.get('#Name').click().clear().type(Suite_Name) // Suite name
    cy.get('#Description').click().clear().type(Suite_Description) // Suite desc 
    cy.get('#btnAddEditTestSuite').should('be.visible').click() // Submit btn
})

Cypress.Commands.add('AddSection', (Section_Name,Section_Description)=> 
{
    cy.get('.header-nav').find('li').eq('2').click() // Test suites and cases TAB
    cy.get('.text >a').click({force:true})  // Open Suite 
    cy.wait(2000)
    cy.contains('Add Section').click({force:true}) // Open add section modal  
    cy.get('#tbNameAddSection').click({force:true}).clear().type(Section_Name) // Section name
    cy.get('#tbDescriptionAddSection').click({force:true}).clear().type(Section_Description) //section desc
    cy.get('#btnAddSection').should('be.visible').click() // submit btn
    
})

Cypress.Commands.add('AddCases', (Tittle)=> 
{
    cy.get('.header-nav').find('li').eq('2').click() // Test suites and cases TAB
    cy.get('.text >a').click({force:true}) // Open Suite 
    cy.wait(2000)
    cy.contains('Add Test Case').click({force:true}) // Open add test case modal
    cy.get('#Title').click({force:true}).clear().type(Tittle) // Add Tittle 
    cy.get('#TypeId').select('11', {force:true}).should('have.value', '11') // Select Type
    cy.get('#PriorityId').select('2', {force: true}).should('have.value', '2') // Set Priority 
    cy.get('#Smoke').check({force: true}) // type
    cy.get('#btnUpdateCase').should('be.visible').click() // submit btn
    cy.get('.breadCrumb > :nth-child(3)').should('be.visible').click({force: true})  // redirect back to test case screen
    // cy.get('.case-title').should('be.visible')
    // cy.get('.breadCrumb').should('contain', Tittle)
  
})

Cypress.Commands.add('TestPlan', (TestPlan_Name, TestPlan_Description, Suite_Name)=> 
{
    cy.get('.header-nav').find('li').eq(3).click() // Click on Test Plan Tab
    cy.url().should('include', 'TestPlan')
    cy.get('#btnTestPlan').click({force: true}) // Click on TestPlan Button
    cy.get('#Name').click().type(TestPlan_Name) // Type Plan Name 
    cy.get('#Description').type(TestPlan_Description) // Type Plan Desc
    cy.get('#btnAddRunAndSelectSuite').click() // click on add Suite 
    cy.get('#runSuiteId').select('2441').should('have.value', '2441') // Select suite from dropdown
    cy.get('#btnAddRuns').click()
    cy.get('.suites').should('contain', Suite_Name) // Verify added test plan
    cy.get('#btnAddEditPlan').click() // click on save test plan 
    cy.get('#btnCloseCrossAdd > .close_cross').click() // Close confirmation popup 
})

Cypress.Commands.add('Milestone', function(Milestone_Name,Description, Start_date, End_date){

    cy.wait(100)
    cy.get('.header-nav').find('li').eq(1).click() // Click on Milestone Tab
    cy.url().should('include', 'Milestone')
    cy.get('#lnkCurrentEditMilestone_0').click({force: true}) //  Click on Add Milestone
    cy.get('#Name').type(Milestone_Name, {force: true}) // Milestone Name
    cy.get('#Description').type(Description)
    cy.get('#dpStartDate').type(Start_date) // Add start date 
    cy.get('#dpEndDate').type(End_date) // End date
    cy.get("#btnAddEditMilestone").should('be.visible').click() // Submit button
   
   
})
