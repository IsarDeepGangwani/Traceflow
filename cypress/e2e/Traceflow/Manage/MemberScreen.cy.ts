import MemberPage from "../../../POM/Manage/MemberPage"
describe('Verify Manage Sub-Modules', () => {

    it('should navigate to MembersPage', () => {

        cy.fixture('Logincredentials').then((data) => {
            cy.login(data.email, data.password)

        })
        cy.wait(18000)

        const memberDriver=new MemberPage()
        memberDriver.Menu()
        memberDriver.memberPageUI()
        memberDriver.addMember()
        memberDriver.existingMembers()

    })
        
 

})