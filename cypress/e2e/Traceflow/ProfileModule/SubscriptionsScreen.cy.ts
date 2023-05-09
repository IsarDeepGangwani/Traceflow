import subscriptionsPage from "../../../POM/ProfileModules/SubscriptionsPage";
describe('Navigate to Subscription Module', () => {

    it('Unlock Subscription', () => {

        cy.fixture('Logincredentials').then((data) => {
            cy.login(data.email, data.password)
        })
        cy.wait(20000)
        const subscriptnDriver=new subscriptionsPage()
        subscriptnDriver.ulockSubscription()

    })
})