class LinkPage {

    // Locators
    menuBtn_Locator = '#Calque_1'
    label_Locator = '.grid-rows-2-bottom > div > div > div > p'
    allAvailableApps_Locator = '.gap-6'
    searchBar_Locator = 'input[placeholder="Search for an app to link"]'
    Applabel_Locator = '.text-center.mt-10'
    toggleBtn_Locator = "button[type='Button']"
    checkbox_Locator = '[type="checkbox"]'
    valuesOfAllCheckboxes_Locator = '.space-y-4'
    AdvanceBtn_Locator = '.pr-5'
    toggleBtnunderAdvanc_Locator = '.px-2'
    addOtherExtension_Locator = 'input[placeholder="separate with “;”"]'
    backBtn_Locator = '.mt-10 > button'





    Menu() {


        const menuBtn = cy.get(this.menuBtn_Locator).click()

    }
    openLinkModule() {

        const openingLinkHyperlink = cy.contains('a', 'Link').click()
        const pageTitle = cy.get('title').then(($title) => {
            cy.log($title.text())
            cy.wrap($title)
        })

        cy.wait(1000)
        const label = cy.get(this.label_Locator).then(($label) => {

            cy.log($label.text())

        })


        const allAvailableApps = cy.get(this.allAvailableApps_Locator).find('.rounded-xl').then(($len) => {
            length = $len.length
            cy.log('No.of available apps to Link==> ' + length)
        })



    }


    searchBar() {

        const searchBar = cy.get(this.searchBar_Locator)
        searchBar.click().clear().type('Notion{enter}')

    }


    linkApp() {

        const linkApp = cy.get(this.allAvailableApps_Locator).find('button').eq(0)
            .contains('Connect').dblclick()

        const Applabel = cy.get(this.Applabel_Locator).then(($lab) => {

            cy.log($lab.text())

        })

        const defaultSyncStorageToggleBtn = cy.get(this.toggleBtn_Locator).eq(0)
            .click().should('be.enabled')
        const SyncAutomaticallyDocumentToMesh = cy.get(this.toggleBtn_Locator).eq(1)
            .click().should('be.enabled')


        const checkedAllCheckboxes = cy.get(this.checkbox_Locator).should('not.be.visible').
            check({ force: true }).should('be.checked').uncheck({ force: true })
            .should('not.be.checked')

        const valuesOfSyncFilesCheckboxes = cy.get(this.valuesOfAllCheckboxes_Locator).eq(0).find('p').each(($ele) => {
            cy.log('Checbox Value==>', $ele.text())
        })
        const valuesOfAllCheckboxes = cy.get(this.valuesOfAllCheckboxes_Locator).eq(2).find('p').each(($ele) => {
            cy.log('Checbox Value==>', $ele.text())
        })


        const scrollingToBottom = cy.scrollTo('bottom')

        const AdvanceBtn = cy.get(this.AdvanceBtn_Locator).find('p').contains('Advanced').click()
        const toggleBtnunderAdvanc = cy.get(this.toggleBtnunderAdvanc_Locator).eq(2).find('button').click({ multiple: true })

        const addOtherExtension = cy.get(this.addOtherExtension_Locator).type('new extension{enter}')
        const verifyAddedExtension = cy.get(this.toggleBtnunderAdvanc_Locator).eq(2).contains('p', 'new extension')

        cy.wait(1000)
        const saveBtn = cy.contains('button', 'Save').click()

        const backBtn = cy.get(this.backBtn_Locator).click()

    }

    unLinkApp() {

        cy.wait(1000)

        const linkApp = cy.get(this.allAvailableApps_Locator).find('button').eq(0).contains('Connect').dblclick()

        const unLink = cy.get(this.AdvanceBtn_Locator).contains('button', 'Unlink').click().scrollIntoView()
        const deleteAll = cy.contains('button', 'Delete All').click()

    }






}
export default LinkPage