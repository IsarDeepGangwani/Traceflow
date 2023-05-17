class MemberPage {


    // Locators
    menuBtn_Locator = '#Calque_1'
    memberTab_Locator = 'a[href="/workspace/members"]'
    memberHomeLabel_Locator = '.w-full>label'
    backBtn_Locator = '.max-w-5xl >button>p'
    addMemberLabel_Locator = '.max-w-5xl >button+p'
    orgLabel_Locator = '.text-sm>div>label'
    allPersonalInfoFiledLabel_Locator = '.space-y-6>div'
    firstName_Locator = 'input[placeholder="First Name"]'
    lastName_Locator = 'input[placeholder="Last Name"]'
    email_Locator = 'input[placeholder="Email"]'
    roleDropdownBtn_Locator = 'button[id^="headlessui-listbox-button"'
    tableRow_Locator = '.rounded-xl'
    availableRoles_Locator='.flex.flex-col.relative.text-sm.text-darker.text-opacity-75'
    currentOrgName_Locator="input[placeholder='Organisation Name']"
    editOrgName_Locator="input[placeholder='Organisation Name']"
    orgRightTickBtn_Locator='.ml-4>button'
    orgCrossBtn_Locator='.ml-4>button'
    spaceDropdownBtn_Locator='.css-1q86c6y'
    availableSpaces_Locator='.css-r8u8y9'









    Menu() {


        const menuBtn = cy.get(this.menuBtn_Locator).click()

    }

    memberPageUI() {

        const openingLinkHyperlink = cy.contains('a', 'Manage').click()
        const MemberTab = cy.get(this.memberTab_Locator).click()
        cy.get(this.memberTab_Locator).should('contain.text', 'Members')
        cy.url().should('contain', '/members')
        const memberHomeLabel = cy.get(this.memberHomeLabel_Locator)
            .should('have.text', 'Members are Users who are part of your Organization.')
            .invoke('text').then(cy.log)

    }


    addMember() {
        const addMemberBtn = cy.contains('p', 'Add Member').should('be.visible').click()
        const inviteLabel = cy.get(this.addMemberLabel_Locator).invoke('text').then(cy.log)
        const orgLabel = cy.get(this.orgLabel_Locator).eq(0).find('span')
            .should('have.text', 'Organisation*').invoke('text').then(cy.log)
        const currentOrgName = cy.get(this.currentOrgName_Locator)
            .should('be.disabled').invoke('text').then(cy.log)

        const editBtn = cy.contains('button', 'Edit').should('be.visible').should('be.enabled').as('editOrgBtn')
        cy.get('@editOrgBtn').click()
        const randomString = Math.random().toString(36).substring(2)
        const editOrgName = cy.get(this.editOrgName_Locator).clear()
            .type(randomString).as('editOrgName')

        const orgRightBtn = cy.get(this.orgRightTickBtn_Locator).eq(0).click()
        cy.contains('button', 'Edit').click()

        const orgCrossBtn = cy.get(this.orgCrossBtn_Locator).eq(1).click()


        const allPersonlInfoField = cy.get(this.allPersonalInfoFiledLabel_Locator)
            .find('span').each(($field) => {
                cy.log($field.text())
            })


        const firstName = cy.get(this.firstName_Locator).type(randomString)
        const lastName = cy.get(this.lastName_Locator).type(randomString)
        const email = cy.get(this.email_Locator).type('abc@efg.coo')
        const roleDropdownBtn = cy.get(this.roleDropdownBtn_Locator).as('roleDropdownBtn')
        cy.get('@roleDropdownBtn').click()
        const availableRoles = cy.get(this.availableRoles_Locator)
            .find('li').each(($roles) => {
                cy.log($roles.text())

            })
        cy.get('li').eq(0).click()
        cy.get('@roleDropdownBtn').click()
        cy.get('li').eq(1).click()
        cy.get('@roleDropdownBtn').click()
        cy.get('li').eq(2).click()

        const spaceDropdownBtn = cy.get(this.spaceDropdownBtn_Locator).as('spaceDropdownBtn')
        cy.get('@spaceDropdownBtn').click()
        const availableSpaces = cy.get(this.availableSpaces_Locator).find('li').each(($spaces) => {
            cy.log($spaces.text())
        })
        cy.get('li').eq(0).click()
        cy.get('@spaceDropdownBtn').click()
        cy.get('li').eq(1).click()

        const cancelBtn = cy.contains('button', 'Cancel').should('be.visible').should('be.enabled')
        const sendBtn = cy.contains('button', 'Send').should('be.visible').should('be.enabled').click()

    }

    existingMembers() {
        
        const MemberTab = cy.get(this.memberTab_Locator).click()
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
                cy.log('No Member is added')
            }
        })

    }








}
export default MemberPage