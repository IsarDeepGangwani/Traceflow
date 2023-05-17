import ContactPage from "../../../POM/Manage/ContactPage"
describe('Verify Manage Sub-Modules', () => {

    it('should naviagte to Contact_Module', () => {

        cy.fixture('Logincredentials').then((data) => {
            cy.login(data.email, data.password)

        })

        cy.wait(18000)
        const contactDriver = new ContactPage()
        contactDriver.Menu()
        contactDriver.ContactPageUI()
        contactDriver.addContact()
        contactDriver.existingContacts()
        contactDriver.addToSpace()
        contactDriver.blockContact()
        contactDriver.contactProfile()
        contactDriver.deleteContact()



    })
})