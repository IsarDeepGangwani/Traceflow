import HomePage from "../../../POM/Home/HomePage";
describe('Homepage', () => {

    it('Verify HomePage and its module', () => {

        // Login through commands
        cy.fixture('Logincredentials').then((data) => {
            cy.login(data.email, data.password)
        })
        cy.wait(20000)

        const homeDriver = new HomePage()
        homeDriver.Home()
        homeDriver.forYou()
        homeDriver.allLinksStatus()









    })







})