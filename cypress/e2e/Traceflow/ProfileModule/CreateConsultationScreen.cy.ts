import { get } from "cypress/types/lodash"
import CounsultationPage from "../../../POM/ProfileModules/CounsultationPage"
describe('Navigate to One-to-One', () => {

    it('Craete a consultation', () => {

        cy.fixture('Logincredentials').then((data) => {
            cy.login(data.email, data.password)
        })
        cy.wait(15000)
        const consul_driver = new CounsultationPage()
        consul_driver.Userprofile()
        consul_driver.CreateOnetoOne()

    })
})