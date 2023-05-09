class subscriptionsPage{

// Locators
profileIcon_Locator = "a[href='/profile']"
Subscription_Locator = 'a[href="/profile/subscriptions"]'
unlockBtn_Locator='.mb-6'






ulockSubscription(){

    const profile = cy.get(this.profileIcon_Locator).click()
    const SubscriptionTab = cy.get(this.Subscription_Locator).should('exist').click()
    const unlockBtn=cy.get(this.unlockBtn_Locator).click()
}












}
export default subscriptionsPage