import 'cypress-file-upload'
class WorkspacePage {
    // Locators
    menuBtn_Locator = '#Calque_1'
    allTabsOnScreen_Locator = '.MuiTabs-flexContainer'
    workspaceTab_Locator = 'a[href="/workspace"]'
    nameLabel_Locator = 'label > span'
    workspaceTextPlaceholder_Locator = "input[type='text']"
    inputWorkspaceName_Locaotr = "input[type='text']"
    iconLabel_Locator = '.relative > label'
    no_OfCheckbox_Locator = '.mr-4'
    iconCheckbox_Locator = "[type='checkbox']"
    uploadClass_Locator = '.left-80'
    attachIconImage_Locator = "input[type='file']"
    imagePath = 'ImageSize-500kb.jpg'










    Menu() {


        const menuBtn = cy.get(this.menuBtn_Locator).click()

    }

    workspaceUI() {

        const openingLinkHyperlink = cy.contains('a', 'Manage').click()

        const currentURL = cy.url().should('contain', '/workspace')
        const pageTitle = cy.title().should('eq', 'Aicko')
        const allTabsOnScreen = cy.get(this.allTabsOnScreen_Locator).find('a')
            .should('have.length', 7).then(($tabs) => {
                cy.log('Tabs Name==> ', $tabs.text())
                length = $tabs.length
                cy.log('No.of Available Tabs==> ' + length)
            })
        const workspaceTab = cy.get(this.workspaceTab_Locator).should('have.text', 'Workspace')
        const nameLabel = cy.get(this.nameLabel_Locator).should('have.text', 'Name').invoke('text').then(cy.log)
        const workspaceTextPlaceholder = cy.get(this.workspaceTextPlaceholder_Locator).should('have.attr', 'placeholder', 'e.g. My Workspace').invoke('attr', 'placeholder').then(cy.log)
        const inputWorkspaceName = cy.get(this.inputWorkspaceName_Locaotr).clear().type('MyWorkSpace{enter}')
        if (cy.get(this.iconLabel_Locator).contains('Reset'), 'exist') {

            cy.get(this.iconLabel_Locator).contains('Reset').click()

        }
        const iconLabel = cy.get(this.iconLabel_Locator).invoke('text').then(cy.log)
        const no_OfCheckbox = cy.get(this.no_OfCheckbox_Locator).should('have.length', 6).then(($box) => {
            length = $box.length
            cy.log('No. of available checkboxes==> ', +length)
        })
        const iconCheckbox = cy.get(this.iconCheckbox_Locator).check().should('be.checked')
        const uploadIconInstruction = cy.get(this.uploadClass_Locator)
            .find('label').should('have.text', 'Or upload an image instead (Max 1MB)').invoke('text').then(cy.log)
    }


    uploadIconImage() {

        const attachIconImage = cy.get(this.attachIconImage_Locator).attachFile(this.imagePath)
        const UploadBtn = cy.get(this.uploadClass_Locator).contains('button', 'Upload').click()
        cy.wait(5000)
    }


    saveWorkspace() {

        const saveBtn = cy.contains('button', 'Save').click()


    }





}
export default WorkspacePage