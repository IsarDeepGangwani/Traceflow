class PermissionsPage {



    // Locators

    menuBtn_Locator = '#Calque_1'
    permissionsTab_Locator = 'a[href="/workspace/permission"]'
    teamHomeLabel_Locator = '.w-full>label'
    permissionsPageLabel_Locator = '.mt-4.mb-6'












    Menu() {


        const menuBtn = cy.get(this.menuBtn_Locator).click()

    }

    permissionsPageUI() {

        const openingLinkHyperlink = cy.contains('a', 'Manage').click()
        const PermissionsTab = cy.get(this.permissionsTab_Locator).click()
        cy.get(this.permissionsTab_Locator).should('contain.text', 'Permissions')
        cy.url().should('contain', '/permission')

        const permissionsPageLabel = cy.get(this.permissionsPageLabel_Locator).find('label').should('have.text', 'Manage user permission for each role')
            .invoke('text').then(cy.log)

    }



    allPermisssionsForMember() {
        cy.get('table').first().find('label').each(($click) => {
            cy.wrap($click, { log: false }).click()
            cy.log($click.text())
        })

    }


    allPermisssionsForColaborator() {
        cy.get('table').last().find('label').each(($click) => {
            cy.wrap($click, { log: false }).click()
            cy.log($click.text())
        })

    }

    allowedPermissionsForMember() {

        cy.get('[type="checkbox"]').should('be.checked').then(($checkbox) => {

            length = $checkbox.length
            cy.log('Total allowed Permissions for Members = ' + length)


        })
    }

    allowedPermissionsForCollaboratsor() {

        cy.get('[type="checkbox"]').should('be.checked').then(($checkbox) => {

            length = $checkbox.length
            cy.log('Total allowed Permissions for Collaborator = ' + length)


        })
    }


    availableChecboxes() {


        cy.get('[type="checkbox"]').then(($checkbox) => {

            length = $checkbox.length
            cy.log('Total available checkboxes = ' + length)

            cy.wrap($checkbox, { log: false }).uncheck({ force: true, log: false })
                .wait(500).check({ force: true, log: false }).then(($count) => {

                })



        })

    }



    tableContentDetails() {

        cy.log('All Available Permissions for Members and Collaborators')

        cy.get('table').find('tbody > tr').each((row) => {
            // iterate through each row of the table
            cy.wrap(row).find('td').each((cell) => {
                // iterate through each cell of the row
                const content = cell.text().trim() || 'checkbox';
                // get the text content of the cell and trim any extra whitespace
                cy.log(content);
                // print the content to the Cypress log
            })

        })
        


    }


    savePermissions() {
        cy.contains('button', 'Save').should('not.be.enabled').click({ force: true })
    }


}
export default PermissionsPage