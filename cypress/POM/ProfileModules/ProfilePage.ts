class ProfilePage {

    //Locators


    profileIcon_Locator = "a[href='/profile']"
    OnetoOne_Locator = 'a[href="/trace/one-to-ones"]'
    Service_Locator = 'a[href="/trace/services"]'
    Subscription_Locator = 'a[href="/profile/subscriptions"]'
    Availiability_Locator = 'a[href="/trace/availabilities"]'
    publicToggleBtn_Locator = 'div.flex.space-x-2.items-center > p+button'
    firstName_Locaator = "input[placeholder='First Name']"
    lastName_Locator = "input[placeholder='Last Name']"
    bio_Locator = '.bg-transparent'
    jobTitle_Locator = "input[placeholder='Job Title']"
    expLevelDropdown_Locator = "button[id='headlessui-listbox-button-2']"
    myWebsiteicon_Locator = 'input[placeholder="www.mysite.com"]+div'
    myWebsite_Locator = 'input[placeholder="www.mysite.com"]'
    languageDropdown_Locator = ".text-normal > div > div"
    getAllPermissionLabelText_Locator = '.rounded-lg.w-full.items-center.justify-center'
    permissiontoggleBtn_Locator = "#headlessui-switch-3"
    saveButn_Locator = '.md\:mt-0 > button'
    languageCheckBox='[type="checkbox"]'




    userProfile() {
        const profile = cy.get(this.profileIcon_Locator).click()
        const ProfileUrl = cy.url().should('include', 'profile')
        const OnetoOneTab = cy.get(this.OnetoOne_Locator).should('exist')
        const ServiceTab = cy.get(this.Service_Locator).should('exist')
        const SubscriptionTab = cy.get(this.Subscription_Locator).should('exist')
        const AvailiabilityTab = cy.get(this.Availiability_Locator).should('exist')
    }

    editProfile() {
        const editProfile = cy.contains('Edit').click()
        const publicToggleBtn = cy.get(this.publicToggleBtn_Locator).click()

        const firstName = cy.get(this.firstName_Locaator).clear().type('Deep')
        const lastName = cy.get(this.lastName_Locator).clear().type('Isar')

        const inputBio = cy.get(this.bio_Locator).clear().type('Bio')

        const jobTitle = cy.get(this.jobTitle_Locator).clear().type('Job Title')

        const expLevel = cy.get(this.expLevelDropdown_Locator).click()
        cy.get('li').each((ele) => {
            cy.log(ele.text())
            
        })

        cy.get('#headlessui-listbox-option-14').each(($li) => cy.log($li.text())).click({ force: true })

        const myWebsiteicon = cy.get(this.myWebsiteicon_Locator).invoke('text')
            .then(($elem) => {
                cy.log($elem)

            })

        const inputWebsiteadress = cy.get(this.myWebsite_Locator).clear().type('www.abc.com')

        const languageDropdown = cy.get(this.languageDropdown_Locator).click({force:true})
        const allAvailableLanguages=cy.get('li').each((lang)=>{
            cy.log(lang.text())
            

        })
        const selectAllLanguage = cy.get(this.languageCheckBox).check()
        const dselectAllLanguage = cy.get(this.languageCheckBox).uncheck({force:true})
        

        const allPermissionLabel = cy.get(this.getAllPermissionLabelText_Locator).invoke('text').then((txt) => {
            cy.log(txt)

        })
        const permissionTogleBtn = cy.get(this.permissiontoggleBtn_Locator).click({ force: true })
        const commemtToggleBtn=cy.get('#headlessui-switch-10').click({force:true})

        const saveBtn=cy.get('button').contains('Save').click({force:true})      

        cy.wait(1500)






    }



}
export default ProfilePage;