import ServicePage from "../../../POM/ProfileModules/ServicePage";
describe('Navigate to Service', () => {

    it('Create a Service', () => {

        cy.fixture('Logincredentials').then((data) => {
            cy.login(data.email, data.password)
        })
        cy.wait(15000)
        const serviceDriver = new ServicePage()
   
        serviceDriver.CreateService()
    })
})