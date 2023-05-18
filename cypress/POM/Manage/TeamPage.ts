class TeamPage {


    // Locators
    menuBtn_Locator = '#Calque_1'
    teamTab_Locator = 'a[href="/workspace/team"]'
    teamHomeLabel_Locator = '.w-full>label'
    backBtn_Locator = '.max-w-5xl >button>p'
    inputTeamName_Locator = "input[type='text']"
    orgRightTickBtn_Locator = '.h-10>button'
    orgCrossBtn_Locator = '.h-10>button'
    memberDropdownBtn_Locator = "#new-team-list"
    availablemember_Locator = '.css-1ozefeb'
    clearBtn = '.MuiAutocomplete-clearIndicator'
    availableTeam_Locator = '.w-full.px-4'
    addMoreTeamBtn_Locator = '.w-6.mt-4'
    eachTeam_Locator='.flex-row.space-x-4.w-full'
    noTeamLabel_Locator='.w-full.mt-64'









    Menu() {


        const menuBtn = cy.get(this.menuBtn_Locator).click()

    }

    teamPageUI() {

        const openingLinkHyperlink = cy.contains('a', 'Manage').click()
        const MemberTab = cy.get(this.teamTab_Locator).click()
        cy.get(this.teamTab_Locator).should('contain.text', 'Team')
        cy.url().should('contain', '/team')
    }


    addTeam() {

        cy.wait(3000)
        cy.get(this.availableTeam_Locator).then(($team) => {
            if ($team.text().includes('1')) {


                const addMoreTeamBtn = cy.get(this.addMoreTeamBtn_Locator).click({ force: true })

                const randomString = Math.random().toString(36).substring(2)
                const inputTeamName = cy.get(this.inputTeamName_Locator).clear()
                    .type(randomString)


                const memberDropdownBtn = cy.get(this.memberDropdownBtn_Locator).as('memberDropdownBtn')
                cy.get('@memberDropdownBtn').click()

                const inputMembers = cy.get('@memberDropdownBtn').type(randomString).wait(500).clear()
                const availablemembers = cy.get(this.availablemember_Locator).find('li').each(($memb) => {

                    cy.log($memb.text())
                    cy.wrap($memb).click()

                }).wait(500)

                const clearSelectedMember = cy.get(this.clearBtn).click().wait(500)

                const selectingAllMembers = cy.get(this.availablemember_Locator).find('li').each(($memb) => {

                    cy.wrap($memb).click()

                }).wait(500)

                cy.get('@memberDropdownBtn').click()

                const orgCrossBtn = cy.get(this.orgCrossBtn_Locator).eq(1).should('be.visible').should('be.enabled')

                const rightMarkBtn = cy.get(this.orgRightTickBtn_Locator).eq(0).click()

            } else {


                const createTeamBtn = cy.contains('p', 'Create a Team').should('be.visible').click()
                const randomString = Math.random().toString(36).substring(2)
                const inputTeamName = cy.get(this.inputTeamName_Locator).clear()
                    .type(randomString)


                const memberDropdownBtn = cy.get(this.memberDropdownBtn_Locator).as('memberDropdownBtn')
                cy.get('@memberDropdownBtn').click()

                const inputMembers = cy.get('@memberDropdownBtn').type(randomString).wait(500).clear()


                cy.get(this.availableTeam_Locator).then(($memb) => {
                    if ($memb.find('li').length > 0) {

                        const availablemembers = cy.get(this.availablemember_Locator).find('li').each(($memb) => {

                            cy.log($memb.text())
                            cy.wrap($memb).click()

                        }).wait(500)

                        const clearSelectedMember = cy.get(this.clearBtn).click().wait(500)

                        const selectingAllMembers = cy.get(this.availablemember_Locator).find('li').each(($memb) => {

                            cy.wrap($memb).click()

                        }).wait(500)

                        cy.get('@memberDropdownBtn').click()

                        const orgCrossBtn = cy.get(this.orgCrossBtn_Locator).eq(1).should('be.visible').should('be.enabled')


                        const addMoreTeamBtn = cy.get(this.addMoreTeamBtn_Locator).click({ force: true })
                        const rightMarkBtn = cy.get(this.orgRightTickBtn_Locator).eq(0).click()
                    } else {
                        cy.log('No Members Added')
                        const orgCrossBtn = cy.get(this.orgCrossBtn_Locator).eq(1)
                            .should('be.visible').should('be.enabled').click()

                    }
                })
            }
        })

    }

    existingMembers() {

        cy.wait(10000)
        cy.get(this.availableTeam_Locator).then(($team) => {

            if ($team.text().includes('1')) {

                const eachTeam = cy.get(this.eachTeam_Locator).each(($teamdetails) => {
                    cy.wrap($teamdetails.text())
                })

            } else {

                cy.get(this.noTeamLabel_Locator).find('h1').invoke('text').then(cy.log)
                cy.get(this.noTeamLabel_Locator).find('p').invoke('text').then(cy.log)
            }


        })






    }








}
export default TeamPage