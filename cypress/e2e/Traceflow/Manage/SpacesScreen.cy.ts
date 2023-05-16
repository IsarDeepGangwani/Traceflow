import SpacesPage from "../../../POM/Manage/SpacesPage";
describe('Verify Manage Sub-Modules', () => {

    it('should naviagte to Space_Module', () => {

        cy.fixture('Logincredentials').then((data) => {
            cy.login(data.email, data.password)

        })
        cy.wait(18000)
        const spaceDriver = new SpacesPage()
        spaceDriver.Menu()
        spaceDriver.spacePageUI()
        spaceDriver.createSpace()
        spaceDriver.existingSpaces()
        spaceDriver.editSpace()
        spaceDriver.deleteSpace()
        







    })






})
