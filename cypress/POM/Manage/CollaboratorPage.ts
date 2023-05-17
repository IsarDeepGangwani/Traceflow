class CollaboratorPage {


    // Locators
    menuBtn_Locator = '#Calque_1'
    collaboratorTab_Locator = 'a[href="/workspace/collaborators"]'
    collaboratorHomeLabel_Locator = '.w-full>label'
    backBtn_Locator = '.max-w-5xl >button>p'
    addCollaboratorLabel_Locator = '.max-w-5xl >button+p'
    orgLabel_Locator = '.text-sm>div>label'
    allPersonalInfoFiledLabel_Locator = '.space-y-6>div'
    email_Locator = 'input[placeholder="Email*"]'
    roleDropdownBtn_Locator = 'button[id^="headlessui-listbox-button"'
    tableRow_Locator = '.rounded-xl'
    spaceDropdownBtn_Locator='.css-1q86c6y'
    availableSpaces_Locator='.css-r8u8y9'









    Menu() {


        const menuBtn = cy.get(this.menuBtn_Locator).click()

    }

    collaboratorPageUI() {

        const openingLinkHyperlink = cy.contains('a', 'Manage').click()
        const collaboratorTab = cy.get(this.collaboratorTab_Locator).click()
        cy.get(this.collaboratorTab_Locator).should('contain.text', 'Collaborators')
        cy.url().should('contain', '/collaborators')
        const collaboratorHomeLabel = cy.get(this.collaboratorHomeLabel_Locator)
            .should('have.text', 'Collaborators are Users outside of your Organisation.')
            .invoke('text').then(cy.log)

    }


    addCollaborator() {
        const addCollaboratorBtn = cy.contains('p', 'Add Collaborator').should('be.visible').click()
        const inviteLabel = cy.get(this.addCollaboratorLabel_Locator).invoke('text').then(cy.log)
        const emailLabel = cy.get(this.orgLabel_Locator).eq(0).find('span')
            .should('have.text', 'Email').invoke('text').then(cy.log)
        const randomString = Math.random().toString(36).substring(2)
        const email = cy.get(this.email_Locator).type('abc@efg.coo')




        const allPersonlInfoField = cy.get(this.allPersonalInfoFiledLabel_Locator)
            .find('span').each(($field) => {
                cy.log($field.text())
            })

        const spaceDropdownBtn = cy.get(this.spaceDropdownBtn_Locator).as('spaceDropdownBtn')
        cy.get('@spaceDropdownBtn').click()
        const availableSpaces = cy.get(this.availableSpaces_Locator).find('li').each(($spaces) => {
            cy.log($spaces.text())
        })
        cy.get('li').eq(1).click()
        cy.get('@spaceDropdownBtn').click()
        cy.get('li').eq(0).click()

        const cancelBtn = cy.contains('button', 'Cancel').should('be.visible').should('be.enabled')
        const sendBtn = cy.contains('button', 'Send').should('be.visible').should('be.enabled').click()

    }

    existingCollaborator() {

        const collaboratorTab = cy.get(this.collaboratorTab_Locator).click()
        cy.wait(8000)
        const tableHeading = cy.get('table').find('th\n').next().each(($TH) => {
            cy.log($TH.text())

        })
        cy.get('table').then(($td) => {

            if ($td.find('td').length > 0) {

                cy.get(this.tableRow_Locator).each(($row) => {

                    cy.wrap($row).within(() => {
                        cy.get('td').each(($col) => {
                            cy.log($col.text())
                        })
                    })

                })

            } else {
                cy.log('No Collaborator is added')
            }
        })

    }








}
export default CollaboratorPage