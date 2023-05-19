import BillingPage from "../../../POM/Billing/BillingPage";
describe('Verify Identity Module', () => {

    it('should navigate to Permissions Page', () => {

        cy.fixture('Logincredentials').then((data) => {
            cy.login(data.expertEmail, data.expertPassword)

        })
        cy.wait(18000)

        const billingDriver = new BillingPage()
        billingDriver.menuBtn()
        billingDriver.billingTab()
        billingDriver.addPayment()
        billingDriver.bankAccountTab()






    })


})