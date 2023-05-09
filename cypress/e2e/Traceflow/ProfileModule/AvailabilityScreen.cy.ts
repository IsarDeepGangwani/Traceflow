import AvailiabilityPage from "../../../POM/ProfileModules/AvailabilityPage";
describe('Naviagte to Availability',()=>{


    it('Edit Availability', () => {

        cy.fixture('Logincredentials').then((data) => {
            cy.login(data.email, data.password)

        })
        cy.wait(20000)
        const AvailabilityDriver=new AvailiabilityPage()
        AvailabilityDriver.selectWeeklyHours()
        AvailabilityDriver.addTimesOff()
        

    })




})