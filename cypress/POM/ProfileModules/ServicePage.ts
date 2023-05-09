class ServicePage{

    // ServicePage Locators

    profileIcon_Locator = "a[href='/profile']"
    // You don't have any services > Label1
    serviceTab_Locator = 'a[href="/trace/services"]'
    label1_Locator='.mx-auto > div > h1'
    // Propose your first deliverables > Label2
    label2_Locator='.mx-auto > div > p'
    addFirstServiceBtn_Locator='div > a > button'
    // Service Set-up > Label3
    label3_Locator='form > div > p'
    serviceNameLabel_Locator='label > span'
    inputServiceName_Locator="input[placeholder='Service Name']"
    descriptionLabel_Locator='.font-medium > p'
    inputDescription_Locator='.font-medium > div'
    deliverablesLabel_Locator='.font-medium.text-darker.text-opacity-75.mb-2'
    inputDeliverablesName_Locator="input[placeholder='Deliverable name']"
    inputPrice_Locator="input[inputmode='decimal']"
    inputShortDesc_Locator="input[placeholder='Short Description']"
    overrideChecbox_Locator='input[type="checkbox"]'
    totalPriceoverride_Locator="input[type='number']"
    publish_Locator="button[type='submit']"




    CreateService(){

        const profile = cy.get(this.profileIcon_Locator).click()
        const serviceTab=cy.get(this.serviceTab_Locator).click()
        const label1=cy.get(this.label1_Locator).should('have.text',"You don't have any services")
        const label2=cy.get(this.label2_Locator).should('have.text','Propose your first deliverables')
        

        const addFirstService=cy.get(this.addFirstServiceBtn_Locator).click()

        const label3=cy.get(this.label3_Locator).should('have.text','Service Set-up')

        const serviceNameLabel=cy.get(this.serviceNameLabel_Locator).should('have.text','Service Name')
        const inputServieName=cy.get(this.inputServiceName_Locator).type('Abc')

        const descriptionLabel=cy.get(this.descriptionLabel_Locator).should('have.text','Description')
        const inputDescription=cy.get(this.inputDescription_Locator).type('Description')

        const deliverablesLabel=cy.get(this.deliverablesLabel_Locator).should('have.text','Deliverables')
        const inputDeliverablesName=cy.get(this.inputDeliverablesName_Locator).type('deliverables')

        const inputPrice=cy.get(this.inputPrice_Locator).type('30')
        const inputShortDesc=cy.get(this.inputShortDesc_Locator).type('Short description')

        const overrideCheckbox=cy.get(this.overrideChecbox_Locator).check()

        const totalPriceoverride=cy.get(this.totalPriceoverride_Locator).clear().type('400')

        const publish=cy.get(this.publish_Locator).click()


    }

}
export default ServicePage;