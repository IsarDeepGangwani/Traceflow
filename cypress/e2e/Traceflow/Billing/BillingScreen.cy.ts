import BillingPage from "../../../POM/Billing/BillingPage";
describe('Verify Billing Module', () => {

    it('should navigate to Billing Page', () => {

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