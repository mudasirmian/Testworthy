///<reference types="cypress"/>

describe('Add_Suite', function(){
    beforeEach(function(){
        cy.visit('/')
        cy.fixture('data').then(function(data){
            this.data = data
        cy.login(data.email,data.password)
        })  
    })
    
    it('Add Suite', function (){

        cy.Project_OverView() 
        cy.AddSuite(this.data.Suite_Name, this.data.Suite_Description)
              
               
    })

    it('AddCases-Section', function(){
        cy.Project_OverView() 
        cy.AddSection(this.data.Section_Name, this.data.Section_Description, this.data.Suite_Name)

    })

    it('Add Case', function(){
        cy.Project_OverView() 
        cy.AddCases(this.data.Tittle)
    })

    // afterEach(() => {
    //     cy.Logout()
    //   })
})


