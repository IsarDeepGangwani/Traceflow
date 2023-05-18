import CollaboratorPage from "../../../POM/Manage/CollaboratorPage"
describe('Verify Manage Sub-Modules', () => {

    it('should navigate to CollaboratorPage', () => {

        cy.fixture('Logincredentials').then((data) => {
            cy.login(data.email, data.password)

        })
        cy.wait(18000)

        const collDriver=new CollaboratorPage()
        collDriver.Menu()
        collDriver.collaboratorPageUI()
        collDriver.addCollaborator()
        collDriver.existingCollaborator()
    })
        
 

})
