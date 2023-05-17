import { find } from "cypress/types/lodash"

class ContactPage {
    // Locators 
    menuBtn_Locator = '#Calque_1'
    contactTab_Locator = 'a[href="/workspace/contacts"]'
    inviteLabel_Locator = '.max-w-5xl >div>p'
    backBtn_Locator = '.max-w-5xl >div>button>p'
    emailLabel_Locator = '.max-w-5xl>div>div>div>div>label'
    inputEmail_Locator = '#client-list'
    verifyEmail_Locator = '.MuiAutocomplete-tagSizeMedium.css-hke119 > span'
    removeEmail_Locator = '.MuiChip-deleteIconMedium'
    verifyCrossBtn_Locator = '.MuiSvgIcon-fontSizeSmall'
    toggleBtn = 'button[id^=headlessui-switch]'
    infoIcon_Locator = '.space-x-6>svg'
    infoText_Locator = '.MuiTooltip-tooltipPlacementBottom'
    tableRow_Locator = '.rounded-xl'
    actionList_Locator = '.relative > div > div > ul'
    blockPoPup_Locator = '.max-w-2xl'
    blockCrossIcon_Locator = '.max-w-2xl>div>button'
    textBox_Locator = '.MuiInputBase-inputAdornedStart'
    textBoxlabel_Locator = '.text-sm>label'
    spacetTextBox_Locator = '.css-1uvydh2'
    openProfile_Locator='.rounded-l-xl > div > div > div'
    infomationLabel_Locator='.w-full>div>.mb-4'
    profilePic_Locator='.w-full.items-center > div.relative > div'
    profileTabs_Locator='.space-x-6'
    detailsTab_Locator='.space-x-6>div'
    availableDetailsField_Locator='.grid-cols-2'
    uploadTab_Locator='.space-x-6>div'
    uploadfiles_Locator='.space-y-4'
    logsTab_Locator='.space-x-6>div'
    logsDetails='.bg-opacity-50 > div > div > p'
    crossBtn_Locator='.w-full>div>.mb-4'










    Menu() {


        const menuBtn = cy.get(this.menuBtn_Locator).click()

    }

    ContactPageUI() {

        const openingLinkHyperlink = cy.contains('a', 'Manage').click()
        const contactTab = cy.get(this.contactTab_Locator).click()
        cy.get(this.contactTab_Locator).should('contain.text', 'Contact')
        cy.url().should('contain', '/contacts')
       

    }


    addContact() {

        const addClientBtn = cy.contains('p', 'Add Client').should('be.visible').click()
        const inviteLabel = cy.get(this.inviteLabel_Locator).invoke('text').then(cy.log)

        const backBtn = cy.get(this.backBtn_Locator).should('have.text', 'Back').invoke('text').then(cy.log)
        const emailLabel = cy.get(this.emailLabel_Locator).invoke('text').then(cy.log)

        const inputEmail = cy.get(this.inputEmail_Locator).type('abcd@email.com{enter}')
        const verifyEmail = cy.get(this.verifyEmail_Locator).should('have.text', 'abcd@email.com').invoke('text').then(cy.log)

        const removeEmail = cy.get(this.removeEmail_Locator).click()

        const inviteBtnInactive = cy.contains('button', 'Invite').should('be.disabled')


        const againInputEmail = cy.get(this.inputEmail_Locator).type('EFGH@email.com{enter}')

        const verfiyCrossBtn = cy.get(this.verifyCrossBtn_Locator).trigger('mouseover').should('be.visible')

        const inviteToConnectToggleBtn = cy.get(this.toggleBtn).first().click()

        const infoIcon = cy.get(this.infoIcon_Locator).trigger('mouseover')
        const infoText = cy.get(this.infoText_Locator).should('have.text', 'Connected Clients can contact you directly.')
            .invoke('text').then(cy.log)

        const inviteToSubscribe = cy.get(this.toggleBtn).last().click({ force: true })

        const cancelBtn = cy.contains('button', 'Cancel').should('be.enabled').should('be.visible')
        const inviteBtn = cy.contains('button', 'Invite').should('be.enabled').click({ force: true })


    }


    existingContacts() {

        cy.wait(15000)
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
                cy.log('No contact is added')
            }
        })

    }

    addToSpace() {

        const allCheckboxes = cy.get('[type="checkbox"]').then(($check) => {

            if ($check.length > 1) {
                const clickOnFirstContact = cy.get('[type="checkbox"]').eq(1).check()
                cy.contains('button', 'Actions').should('be.visible')
                    .should('be.enabled').click()

                const actionList = cy.get(this.actionList_Locator).find('li').each(($li) => {
                    cy.log($li.text())

                    if ($li.text().includes('Add to Space')) {
                        const addToSpaceBtn = cy.contains('li', 'Add to Space').click()
                        const adToSpaceLabel = cy.get(this.blockPoPup_Locator).find('h1').should('have.text', 'Add to a Space')
                            .invoke('text').then(cy.log)
                        const CrossIcon = cy.get(this.blockCrossIcon_Locator).should('be.enabled')
                        const textBox = cy.get(this.spacetTextBox_Locator).click({ force: true })
                            .type('{downArrow}{enter}').click().invoke('text').then(cy.log)
                        const textBoxlabel = cy.get(this.textBoxlabel_Locator).trigger('mouseover').click().invoke('text').then(cy.log)
                        const cancelBtn = cy.contains('button', 'Cancel').should('be.enabled').should('be.visible')
                        const addBtn = cy.contains('button', 'Add').should('be.enabled').should('be.visible').click({force:true})
                    } 
                    else if($li.text().includes('Unblock')){
                        const clickOnFirstContact = cy.get('[type="checkbox"]').eq(2).uncheck()
                    }
                })
            } else {
                cy.log('No contact added')
            }


        })
    }


    blockContact() {

        cy.reload()

        cy.wait(15000)
        const allCheckboxes = cy.get('[type="checkbox"]').then(($check) => {


            if ($check.length > 1) {
                const clickOnFirstContact = cy.get('[type="checkbox"]').eq(1).check()
                cy.contains('button', 'Actions').should('be.visible')
                    .should('be.enabled').click()

                const actionList = cy.get('.mt-1>ul').find('li').each(($li) => {
                    cy.log($li.text())

                    if ($li.text().includes('Block')) {

                        const blockContact = cy.contains('li', 'Block').should('be.visible').click()
                        const blockLabel = cy.get(this.blockPoPup_Locator).find('h1').should('have.text', 'Block')
                            .invoke('text').then(cy.log)
                        const blockCrossIcon = cy.get(this.blockCrossIcon_Locator).should('be.enabled')
                        const textBox = cy.get(this.textBox_Locator).type('ab')
                        const textBoxlabel = cy.get(this.textBoxlabel_Locator).trigger('mouseover').click().invoke('text').then(cy.log)
                        const cancelBtnOnBlock = cy.contains('button', 'Cancel').should('be.enabled').should('be.visible')
                        const blockBtn = cy.contains('button', 'Block').should('be.enabled').should('be.visible').click()
                    } else if ($li.text().includes('Unblock')) {

                        const unblockBtn = cy.contains('li', 'Unblock').should('be.visible').click()
                        const unblockLabel = cy.get(this.blockPoPup_Locator).find('h1').should('have.text', 'Unblock')
                            .invoke('text').then(cy.log)
                        const blockCrossIcon = cy.get(this.blockCrossIcon_Locator).should('be.enabled')
                        const textBox = cy.get(this.textBox_Locator).should('be.visible').should('be.enabled')
                        const textBoxlabel = cy.get(this.textBoxlabel_Locator).invoke('text').then(cy.log)
                        const cancelBtnOnUnblock = cy.contains('button', 'Cancel').should('be.enabled').should('be.visible')
                        const UnblockBtn = cy.contains('button', 'Unblock').should('be.visible').click()

                    }
                })

            }

            else {
                cy.log('No contact added')
            }
        })
    }

   


    contactProfile() {
        cy.wait(15000)

        const allCheckboxes = cy.get('[type="checkbox"]').then(($check) => {
            if ($check.length > 1) {
                
                const openProfile = cy.get(this.openProfile_Locator).as('openProfile')
                cy.get('@openProfile').eq(0).click()
                const infomationLabel = cy.get(this.infomationLabel_Locator).find('p').should('have.text', 'Information')
                    .invoke('text').then(cy.log)
                const profilePic = cy.get(this.profilePic_Locator).should('be.visible')
                const messageBtn = cy.contains('button', 'Message').should('have.class', 'mt-4')
                    .should('be.enabled').click({ force: true })
                cy.go('back')
                cy.get('@openProfile').eq(0).click()
                const profileTabs = cy.get(this.profileTabs_Locator).children().should('have.length', '3')
                    .each((txt) => { cy.log(txt.text()) })

                const detailsTab = cy.get(this.detailsTab_Locator).eq(0).should('be.visible').click()
                    .should('have.text', 'Details')
                const availableDetailsField = cy.get(this.availableDetailsField_Locator).children().should('have.length', '14')
                    .each((txt) => {
                        cy.wrap(txt.text())
                    })

                const uploadTab = cy.get(this.uploadTab_Locator).eq(1).should('be.visible').click()
                    .should('have.text', 'Uploads')
                const uploadfiles = cy.get(this.uploadfiles_Locator).find('h1').should('have.text', 'No file shared.')
                    .invoke('text').then(cy.log)


                const logsTab = cy.get(this.logsTab_Locator).eq(2).should('be.visible').click()
                    .should('have.text', 'Logs')
                const logsDetails = cy.get(this.logsDetails).should('have.text', 'No Logs.')
                    .invoke('text').then(cy.log)
                const crossBtn = cy.get(this.crossBtn_Locator).find('img')
                    .should('have.class', 'cursor-pointer').should('not.be.disabled').click()
            }else{
                cy.log('No contact available')
            }
        })

    }


    deleteContact() {

        const allCheckboxes = cy.get('[type="checkbox"]').then(($check) => {
            if ($check.length > 1) {
                const clickOnFirstContact = cy.get('[type="checkbox"]').eq(1).check()
                cy.contains('button', 'Actions').should('be.visible')
                    .should('be.enabled').click()

                const actionList = cy.get(this.actionList_Locator).find('li').each(($li) => {
                    cy.log($li.text())

                    if ($li.text().includes('Delete')) {

                        const deleteContactBtn = cy.contains('li', 'Delete').click()
                    }

                })
            }
        })

    }




}



export default ContactPage