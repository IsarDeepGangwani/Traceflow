import WorkspacePage from "../../../POM/Manage/WorkspacePage";
describe('Verify Manage Sub-Modules', () => {

    it('should naviagte to Workspace_Module', () => {

        cy.fixture('Logincredentials').then((data) => {
            cy.login(data.email, data.password)

        })

        cy.wait(18000)

        const WSDriver=new WorkspacePage()
        WSDriver.Menu()
        WSDriver.workspaceUI()
        WSDriver.uploadIconImage()
        WSDriver.saveWorkspace()


    })







})