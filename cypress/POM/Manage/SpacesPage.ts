import 'cypress-file-upload'
class SpacesPage {
    // Locators
    menuBtn_Locator = '#Calque_1'
    allTabsOnScreen_Locator = '.MuiTabs-flexContainer'
    imagePath = 'ImageSize-500kb.jpg'
    Image_Locator = "input[type='file']"
    iconLabel_Locator = '.space-y-2'
    no_OfCheckbox_Locator = '.space-y-2'
    iconCheckbox_Locator = "[type='checkbox']"
    uploadInstLabel_Locator = 'div>.relative>p'
    spacesTab_Locator = 'a[href="/workspace/spaces"]'
    inputSpaceName_Locator = '#spaceName'
    publicToggleBtn_Locator = 'button[id^=headlessui-switch-]'
    copyLink_Locator = '#myTooltip'
    uniqueLink_Locator = '.flex-row'
    createSpaceLabel_Locator = '.text-center'
    AbstractLabel_Locator = 'div>.space-y-4>.text-sm'
    abstractTextArea_Locator = 'div>.space-y-4>.text-sm>.flex'
    UploadIconBtn_Locator = 'button >.MuiSvgIcon-root'
    threadLabel_Locator = 'div>.w-full>.space-y-2'
    infoIcon_Locator = 'div>.ml-3'
    threadPlaceholderText_Locator = 'div>.text-sm>.rounded-full'
    inputThreadVaue_Locator = 'div>.text-sm>.rounded-full>textarea'
    verifyThread_Locator = 'div>.flex-wrap>div'
    blackListLabel_Locator = 'div>.w-full>.space-y-2'
    blockListId_Locator = '#blocklist'
    verifyBlockedList_Locator = 'div>.MuiFormControl-root>div>.MuiButtonBase-root'
    addExistingAssetsToggleBtn_Locator = 'button[id^=headlessui-switch-]'
    addExistingAssetsToggleLabel_Locator = '.space-x-2>p'
    horizontaLine_Locator = '.opacity-10'
    inviteLabel_Locator = '.mb-4'
    memberLabel_Locator = '.mb-4+div'
    addMember_Locator = '#members-list'
    collaboratorLabael_Locator = '.space-y-2>label'
    addCollaborator_Locator = '#collobrator-list'
    downloadAssetsToggleBtn_Locator = 'button[id^=headlessui-switch-]'
    addAssetsToMeshToggleBtn_Locator = 'button[id^=headlessui-switch-]'
    ModerationToggleBtn_Locator = 'button[id^=headlessui-switch-]'
    FlagToggleBtn_Locator = 'button[id^=headlessui-switch-]'
    VetoAssetsToggleBtn_Locator = 'button[id^=headlessui-switch-]'
    CommentToggleBtn_Locator = 'button[id^=headlessui-switch-]'
    clickOnHomeBtn_Locator = "svg[id^='Calque']"
    availableSpace_Locator = '.MuiMenu-list >div>div>.pr-1'
    selectSpace_Locator = '.MuiMenu-list >div>div>.pr-1>div>a>div+div>.text-sm'
    editSpaceBtn_Locator = '.mt-20 > a'
    deleteBox_Locator = '.relative > div > input'







    Menu() {


        const menuBtn = cy.get(this.menuBtn_Locator).click()

    }

    spacePageUI() {

        const openingLinkHyperlink = cy.contains('a', 'Manage').click()
        const spacesTab = cy.get(this.spacesTab_Locator).click()
        cy.get(this.spacesTab_Locator).should('contain.text', 'Spaces')
        cy.url().should('contain', '/spaces')

    }

    createSpace() {

        const clickOnSpaceBtn = cy.contains('p', 'Create a Space').click()
        const inputSpaceName = cy.get(this.inputSpaceName_Locator).clear().type('New Space{enter}')
        cy.get(this.Image_Locator).eq(0).attachFile(this.imagePath)
        const publicToggleBtn = cy.get(this.publicToggleBtn_Locator).eq(0).click()
        const copyLink = cy.get(this.copyLink_Locator).trigger('mouseover', { force: true }).should('have.text', 'Copy to clipboard')
        const uniqueLink = cy.get(this.uniqueLink_Locator).eq(1).invoke('text').then(cy.log)
        const createSpaceLabel = cy.get(this.createSpaceLabel_Locator).eq(1).should('have.text', 'Create a space').invoke('text').then(cy.log)

        if (cy.get('button').contains('Reset'), 'exist') {
            cy.get('button').contains('Reset').click()
        }
        const iconLabel = cy.get(this.iconLabel_Locator).eq(1).invoke('text').then(cy.log)
        const no_OfCheckbox = cy.get(this.no_OfCheckbox_Locator).should('have.length', 6).then(($box) => {
            length = $box.length
            cy.log('No. of available checkboxes==> ', +length)
        })
        const iconCheckbox = cy.get(this.iconCheckbox_Locator).check().should('be.checked')
        const uploadIconInstruction = cy.get(this.uploadInstLabel_Locator).contains('p', '(Max 1MB)')
            .should('have.text', '(Max 1MB)').invoke('text').then(cy.log)

        const UploadIconImage = cy.get(this.Image_Locator).eq(1).attachFile(this.imagePath)
        const UploadIconBtn = cy.get(this.uploadInstLabel_Locator).eq(0).click()

        const AbstractLabel = cy.get(this.AbstractLabel_Locator).find('p')
            .should('have.text', 'Abstract').invoke('text').then(cy.log)
        const abstractTextArea = cy.get(this.abstractTextArea_Locator).find('textarea')
            .should('have.attr', 'placeholder', 'Write a short description of your space')
        const inputabstract = cy.get(this.abstractTextArea_Locator).type('New Abstract{enter}')

        const threadLabel = cy.get(this.threadLabel_Locator).eq(0).find('p').eq(0)
            .should('have.text', 'Threads').invoke('text').then(cy.log)
        const infoIcon = cy.get(this.infoIcon_Locator).eq(0).trigger('mouseover').invoke('text').then(cy.log)
        const threadPlaceholderText = cy.get(this.threadPlaceholderText_Locator).first().find('textarea')
            .should('have.attr', 'placeholder', 'Write a short description of your space')
        const inputThreadVaue = cy.get(this.inputThreadVaue_Locator).click({ force: true })
            .clear().type('Thread1{enter}', { force: true })
        const verifyThread = cy.get(this.verifyThread_Locator).find('p\n').should('have.text', 'Thread1').each(($thread) => {
            cy.log($thread.text())
        })

        const blackListLabel = cy.get(this.blackListLabel_Locator).eq(1).find('p').eq(0)
            .should('have.text', 'Blocklist').invoke('text').then(cy.log)
        cy.get(this.infoIcon_Locator).eq(1).trigger('mouseover').invoke('text').then(cy.log)
        const inputBlockUser = cy.get(this.blockListId_Locator).click({ force: true }).clear().type('Blocked{enter}')
        const verifyBlockedList = cy.get(this.verifyBlockedList_Locator).find('span\n').should('contain.text', 'Blocked').each(($thread) => {
            cy.log($thread.text())
        })

        const addExistingAssetsToggleBtn = cy.get(this.addExistingAssetsToggleBtn_Locator).eq(1).click()
        const addExistingAssetsTogglLabel = cy.get(this.addExistingAssetsToggleLabel_Locator).last().invoke('text').then(cy.log)
        const horizontaLine = cy.get(this.horizontaLine_Locator).then(($line) => {
            length = $line.length
            cy.log('No. of horizonal line present on the page==> ' + length)
        })

        const inviteLabel = cy.get(this.inviteLabel_Locator).first().should('contain.text', 'Invite')
            .should('have.text', 'Invite').invoke('text').then(cy.log)
        const memberLabel = cy.get(this.memberLabel_Locator).first().find('label')
            .should('have.text', 'Members').invoke('text').then(cy.log)

        cy.get(this.addMember_Locator).should('have.attr', 'placeholder', 'Search existing members or add an email')
        const addMember = cy.get(this.addMember_Locator).click().type('isar').each(($meb) => {
            length = $meb.length
            cy.log('Available members to add==> ' + length)
            if ($meb.text().includes('Isar Gangwani')) {
                cy.wrap($meb).click()
            } else {
                addMember.clear().type('isar@mail.com{enter}')
            }
        })


        const collaboratorLabael = cy.get(this.collaboratorLabael_Locator).eq(2)
            .should('have.text', 'External Collaborators').invoke('text').then(cy.log)
        cy.get(this.addCollaborator_Locator).should('have.attr', 'placeholder', 'Add an email')
        const addCollaborator = cy.get(this.addCollaborator_Locator).clear().type('collaborator@email.com{enter}')
        const downloadAssetsToggleBtn = cy.get(this.downloadAssetsToggleBtn_Locator).eq(2).click()
            .parent().find('p').invoke('text').then(cy.log)
        const addAssetsToMeshToggleBtn = cy.get('button[id^=headlessui-switch-]').eq(3).click()
            .parent().find('p').invoke('text').then(cy.log)
        const ModerationToggleBtn = cy.get('button[id^=headlessui-switch-]').eq(4).click()
            .parent().find('p').invoke('text').then(cy.log)
        const FlagToggleBtn = cy.get('button[id^=headlessui-switch-]').eq(5).click()
            .parent().find('p').invoke('text').then(cy.log)
        const VetoAssetsToggleBtn = cy.get('button[id^=headlessui-switch-]').eq(6).click()
            .parent().find('p').invoke('text').then(cy.log)
        const CommentToggleBtn = cy.get('button[id^=headlessui-switch-]').eq(7).click()
            .parent().find('p').invoke('text').then(cy.log)


        const createSpaceBtn = cy.contains('button', 'Create').click()


    }




    existingSpaces() {

        const tableHeading = cy.get('table').find('th\n').each(($TH) => {
            cy.log($TH.text())

        })

        if (cy.get('table').should('exist').find('tbody').find('td')) {

            cy.get('tbody').find('td\n').each(($td) => {
                cy.log($td.text())
            })
        }
    }

    editSpace() {

        const clickOnHomeBtn = cy.get(this.clickOnHomeBtn_Locator).eq(1).click({ force: true })
        const availableSpace = cy.get(this.availableSpace_Locator).find('a').then(($space) => {
            length = $space.length
            cy.log('Total available spcaes are ==> ' + length)
        })

        const selectSpace = cy.get(this.selectSpace_Locator).each(($Sname) => {
            cy.log('Spacce Name==> ', $Sname.text())
        })

        cy.get(this.selectSpace_Locator).last().click()
        const editSpaceBtn = cy.get(this.editSpaceBtn_Locator)
            .should('have.text', 'Edit').invoke('text').then(cy.log)

        cy.get(this.editSpaceBtn_Locator).click({ force: true })



    }

    deleteSpace() {

        cy.contains('button', 'DELETE SPACE').invoke('text').then(cy.log)
        cy.contains('button', 'DELETE SPACE').click({ force: true })
        cy.contains('button', 'Delete Space').should('be.disabled')
        cy.contains('button', 'Cancel').should('be.enabled')
        cy.get(this.deleteBox_Locator).type('Delete', { force: true })
        cy.contains('button','Delete Space').should('be.enabled').click({force:true})


    }





}
export default SpacesPage