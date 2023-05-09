import ProfilePage from "../../../POM/ProfileModules/ProfilePage"
describe('Navigate to Profile', () => {

    it('Edit Profile', () => {

        cy.fixture('Logincredentials').then((data) => {
            cy.login(data.email, data.password)
        })
        cy.wait(20000)
        const profileDriver=new ProfilePage()
        profileDriver.userProfile()
        profileDriver.editProfile()

    })
})