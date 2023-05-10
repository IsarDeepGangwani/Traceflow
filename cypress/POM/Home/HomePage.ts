class HomePage {

    // Locators

    homeTabBtn_Locator = 'a[href="/spaces"]'
    seacrchBar_Locator = '#mesh-categories-search'
    switchSearchToMeshBtn = 'div > div.flex.space-x-4.items-center > button'
    ForYouBtn_locator = 'a[href="/spaces/foryou"]'



    Home() {


        const Title = cy.title().should('eq', 'Aicko')
        const homeTabBtn = cy.get(this.homeTabBtn_Locator).should('have.text', 'Home')

        cy.url().should('contain', '/spaces')



        const seacrchBar = cy.get(this.seacrchBar_Locator).click().type('Enivron{downArrow}').click()  //Unstable

        const switchSearchToMeshBtn = cy.get(this.switchSearchToMeshBtn).click()


    }


    forYou() {

        const ForYouBtn = cy.get(this.ForYouBtn_locator).click().should('have.text', 'For You')
        cy.url().should('contain', '/spaces/foryou')

    }

    allLinksStatus() {


        cy.get('a').each((link) => {

            if (link.prop('href')) {
                cy.request({

                    url: link.prop('href')

                })
                cy.log(link.prop('href'))
            }

        })

    }




}
export default HomePage