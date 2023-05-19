import 'cypress-file-upload'
class IdentityPage {

    // Locators

    menuBtn_Locator = '#Calque_1'
    identity_Locator = 'a[href="/trace/identity"]'
    Label1_Locator = '.text-sm.mb-10'
    imagePath = 'ImageSize-500kb.jpg'
    Image_Locator = "input[type='file']"
    imageValidaionLabel_Locator = '.text-xs.mt-2'









    menuBtn() {

        cy.get(this.menuBtn_Locator).click()
        cy.get(this.identity_Locator).click()

    }

    identityPageUI() {

        const Label1 = cy.get(this.Label1_Locator)
            .should('have.text', 'Upload your Identity Logo for personalization.')
            .should('be.visible').invoke('text').then(cy.log)


        cy.log('Uploading Identity Logo').wait(500)

        const uploadingLogo = cy.get(this.Image_Locator).eq(0).attachFile(this.imagePath)
        cy.contains('button', 'Browse').click({ force: true })


        const resetingLogo = cy.log('Reset Identity Logo').wait(500)
        cy.get('button').contains('Reset').click().wait(3000)

        const imageValidaionLabel = cy.get(this.imageValidaionLabel_Locator).should('be.visible')
            .should('have.text', 'Logo larger than 5 MB are not supported.').invoke('text').then(cy.log)





    }







}
export default IdentityPage