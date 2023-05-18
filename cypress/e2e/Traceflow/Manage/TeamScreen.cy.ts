import TeamPage from "../../../POM/Manage/TeamPage"
describe('Verify Manage Sub-Modules', () => {

    it('should navigate to Managepage', () => {

        cy.fixture('Logincredentials').then((data) => {
            cy.login(data.email, data.password)

        })
        cy.wait(18000)

        const teamDriver=new TeamPage()
        teamDriver.Menu()
        teamDriver.teamPageUI()
        teamDriver.addTeam()
        teamDriver.existingMembers()

    })
        
 

})