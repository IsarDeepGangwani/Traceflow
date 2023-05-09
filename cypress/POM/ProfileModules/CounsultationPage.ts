class CounsultationPage {

    // Profile and One-to-One Loactors

    profileIcon_Locator = "a[href='/profile']"
    OnetoOne_Locator = 'a[href="/trace/one-to-ones"]'
    Service_Locator = 'a[href="/trace/services"]'
    Subscription_Locator = 'a[href="/profile/subscriptions"]'
    Availiability_Locator = 'a[href="/trace/availabilities"]'
    // You don't have any consultation yet. > label1
    label1_Locator = '.mx-auto > div > h1'
    // Start by configuring your first one-to-one > label2
    label2_Locator = '.mx-auto > div > p'
    addFirstConsultaionBtn_Locator = 'a > button > svg'
    // Create an Accessible Consultation. You can add a Video to introduce it. > Label3
    label3_Locator = 'div.w-full.max-w-5xl.mx-auto > p'
    priceLabel_Locator = 'div:nth-child(2) > div.mb-2 > label'
    inputPrice_Locator = 'input[type="text"]'
    titleLabel_Lactor = '.mb-2.justify-between > label > span'
    inputTitle_Loactor = 'input[placeholder="title"]'
    descriptionLabel_Locator = '.flex-grow.font-medium > p'
    inputDescription_Locator = 'textarea[placeholder="Maximum 250 characters are allowed."]'
    // Create or edit your One-to-One > Label4
    label4_Locator = '.relative > p'



    Userprofile() {
        const profile = cy.get(this.profileIcon_Locator).click()
        const ProfileUrl = cy.url().should('include', 'profile')
        const OnetoOneTab = cy.get(this.OnetoOne_Locator).should('exist')
        const ServiceTab = cy.get(this.Service_Locator).should('exist')
        const SubscriptionTab = cy.get(this.Subscription_Locator).should('exist')
        const AvailiabilityTab = cy.get(this.Availiability_Locator).should('exist')
    }
    CreateOnetoOne() {
        const Open_OnetoOne = cy.get(this.OnetoOne_Locator).click()
        const OnetoOneURL = cy.url().should('include', 'one-to-ones')
        if (cy.get(this.label1_Locator).contains("You don't have any consultation yet.", { matchCase: true })) {

            const Label = cy.get(this.label1_Locator)
                .should('have.text', "You don't have any consultation yet.")

            const Label2 = cy.get(this.label2_Locator)
                .should('have.text', 'Start by configuring your first one-to-one')

            //Creating One-to-One
            const AddBtn = cy.get(this.addFirstConsultaionBtn_Locator).click()

            const Label3 = cy.get(this.label3_Locator)
                .should('have.text', 'Create an Accessible Consultation. You can add a Video to introduce it.')
            const durationLabel = cy.contains('Duration').should('have.text', 'Duration')                                         //Validating duration lable
            const durationDropdown = cy.contains('Select a value').click()                                                           //Selecting duration
            const selectDuration = cy.contains('15 minutes').click()

            const priceLabel = cy.get(this.priceLabel_Locator).should('have.text', 'Price')                      //Validating Price label
            const inputPrice = cy.get(this.inputPrice_Locator).clear().type('50')                                                         //Entering Price

            const titleLabel = cy.get(this.titleLabel_Lactor).should('have.text', 'Title')                     //Validating Title label
            const inputTitle = cy.get(this.inputTitle_Loactor).clear().type('Testing')                                            //Entering Title

            const descriptionLabel = cy.get(this.descriptionLabel_Locator).should('have.text', 'Description')                         //Validating Description label
            const inputDescription = cy.get(this.inputDescription_Locator)
                .type('Duration Input')                                                                     //Entering description

               const Publish= cy.contains('Publish').click()

        } else {
            const Label4 = cy.get(this.label4_Locator).should('have.text', 'Create or edit your One-to-One')

            const createCounsultation = cy.contains('Create Consultation').click()
            const durationLabel = cy.contains('Duration').should('have.text', 'Duration')                                         //Validating duration lable
            const durationDropdown = cy.contains('Select a value').click()                                                           //Selecting duration
            const selectDuration = cy.contains('15 minutes').click()

            const priceLabel = cy.get(this.priceLabel_Locator).should('have.text', 'Price')                      //Validating Price label
            const inputPrice = cy.get(this.inputPrice_Locator).clear().type('50')                                                         //Entering Price

            const titleLabel = cy.get(this.titleLabel_Lactor).should('have.text', 'Title')                     //Validating Title label
            const inputTitle = cy.get(this.inputTitle_Loactor).clear().type('Testing')                                            //Entering Title

            const descriptionLabel = cy.get(this.descriptionLabel_Locator).should('have.text', 'Description')                         //Validating Description label
            const inputDescription = cy.get(this.inputDescription_Locator)
                .type('Duration Input')                                                                     //Entering description

            const Publish= cy.contains('Publish').click()


        }
    }

    

}
export default CounsultationPage;