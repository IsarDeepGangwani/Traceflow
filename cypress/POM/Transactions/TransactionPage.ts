class TransactionPage {

    // Locators

    menuBtn_Locator = '#Calque_1'
    transcation_Locator = 'a[href="/admin/transactions"]'
    totalLabel_Locator = '.mb-4'
    totalAmount_Locator = '.relative.text-base'
    connectYourAccountBtn_Locator = '.py-2.px-4'
    label_Locator = '.text-sm.flex-grow.relative'
    connectYourBankAcc_Lable_Locator = '.w-full.flex.justify-between'
    contactBtn_Locator = '.w-full.flex.justify-between'
    accountTypeLabel_Locator = '.space-y-2'
    selectAccount_Region_Locator = "button[id^='headlessui-listbox-button']"
    accountType_Locator = '.w-full.overflow-auto'
    inputFirstNameLocator = 'input[placeholder="First Name"]'
    inputLastName_Locator = 'input[placeholder="Last Name"]'
    inputDOB_Locator = 'input[placeholder="01/01/1901"]'
    inputPhoneNo_locator = 'input[placeholder="Phone number"]'
    allLabel_ID_Locator = "label[id^='headlessui-listbox-label']"
    selectCountry_Currency_Locator = "button[id^='headlessui-listbox-button']"
    allList_Locator = 'ul[id^="headlessui-listbox-options"]'
    inputAddress_Locator = 'input[placeholder="Address"]'
    inputCity_Locator = 'input[placeholder="Town/City"]'
    inputPostalCode_Locator = 'input[placeholder="Postcode"]'
    inputBankName_Locator = 'input[placeholder="Bank Name"]'
    inputIBAN_Locator = 'input[placeholder="IBAN"]'
    inputConfirmIBAN_Locator = 'input[placeholder="Confirm IBAN"]'
    inputBusinessame_Locator = 'input[placeholder="Business Name"]'
    inputCRN_Locator = 'input[placeholder="Company House Registration Number"]'
    inputWebsite_Locator = 'input[placeholder="Business Website"]'
    footerLabel1_Locator = '.text-sm>p'
    footerLabel2_Locator = '.text-sm>p'
    inputemail_Locator = 'input[placeholder="Email"]'
    addMoreOwnerBtn_Locator = '.mt-6'
    deleteTitleBtn_Locator = '.w-4.cursor-pointer'



















    menuBtn() {

        cy.get(this.menuBtn_Locator).click()
        cy.get(this.transcation_Locator).click()
        cy.url().should('include', '/admin/transactions')

    }


    transac_Page() {

        const totalLabel = cy.get(this.totalLabel_Locator).find('h1').should('have.text', 'TOTAL')
            .invoke('text').then(cy.log)
        const totalAmount = cy.get(this.totalAmount_Locator).find('p').invoke('text').then(cy.log)

    }

    addAccount() {


        const randomString = Math.random().toString(36).substring(2)
        const randomNumber = Math.floor(Math.random() * 1000000000) + 1

        const connectYourAccountBtn = cy.get(this.connectYourAccountBtn_Locator).as('connectAccount')
        cy.get('@connectAccount').find('a').should(($a) => {

            expect($a.text()).to.include('Connect your account to receive Payments and Withdraw')
            expect($a).to.have.attr('href', '/admin/billing/bank-account/add-bank-account')

        })

        cy.get('@connectAccount').click()

        const connectYourBankAcc_Lable = cy.get(this.connectYourBankAcc_Lable_Locator).find('p').first()
            .should('have.text', 'Connect your Bank account')

        const contactBtn = cy.get(this.contactBtn_Locator).find('a').should(($contact) => {

            expect($contact.text()).to.include('Contact')
            expect($contact).to.have.attr('href', '/admin/billing/bank-account/add-bank-account')
        })

        const accountTypeLabel = cy.get(this.accountTypeLabel_Locator).find('p').first().should('have.text', 'Type of Account')
            .invoke('text').then(cy.log)

        const selectAccount = cy.get(this.selectAccount_Region_Locator).as('selectAccountBtn')
        cy.get('@selectAccountBtn').eq(0).click().then(() => {

            const accountType = cy.get(this.accountType_Locator).as('list')
            cy.get('@list').click().find('li').each(($li) => {

                cy.wrap($li.text())

            })
        })


        
        /*************************Adding Individual Account**************************** */

        cy.get('@selectAccountBtn').eq(0).click({ force: true }).get('@list').find('li')
            .first().click().then(($account) => {



                if ($account.text().includes('individual')) {


                    const firstNameLable = cy.get(this.label_Locator).eq(0).should('have.text', 'First Name*')
                    const inputFirstName = cy.get(this.inputFirstNameLocator).clear().type(randomString, { force: true })

                    const lastNameLable = cy.get(this.label_Locator).eq(1).should('have.text', 'Last Name*')
                    const inputLastName = cy.get(this.inputLastName_Locator).clear().type(randomString)

                    const dobLable = cy.get(this.label_Locator).eq(2).should('have.text', 'Date of Birth*')
                    const inputDOB = cy.get(this.inputDOB_Locator).clear().type('10/02/1995')

                    const Ph_No_Lable = cy.get(this.label_Locator).eq(3).find('span')
                        .should('have.text', 'Phone number*')
                    const inputPhoneNo = cy.get(this.inputPhoneNo_locator).clear()
                        .type(randomNumber.toString())

                    const countryLabel = cy.get(this.allLabel_ID_Locator).eq(0).should(($country) => {
                        expect($country.text()).to.include('Country/Region')
                    })

                    const selectRegion = cy.get(this.selectCountry_Currency_Locator).eq(1).click().then(($region) => {

                        cy.wrap($region.text())
                        const findList = cy.get(this.allList_Locator).find('li').first().click()
                    })

                    const addressLable = cy.get(this.label_Locator).eq(4).find('span')
                        .should('have.text', 'Address*')
                    const inputAddress = cy.get(this.inputAddress_Locator).clear().type(randomString)

                    const cityLabel = cy.get(this.label_Locator).eq(5).find('span')
                        .should('have.text', 'Town/City*')
                    const inputCity = cy.get(this.inputCity_Locator).clear().type(randomString)

                    const postalCodeLable = cy.get(this.label_Locator).eq(6).find('span')
                        .should('have.text', 'Postcode*')
                    const inputPostalCode = cy.get(this.inputPostalCode_Locator).clear()
                        .type(randomNumber.toString())


                    const bankName_Lable = cy.get(this.label_Locator).eq(7).find('span')
                        .should('have.text', 'Bank Name*')
                    const inputBankName = cy.get(this.inputBankName_Locator).clear().type(randomString)

                    const currencyLabel = cy.get(this.allLabel_ID_Locator).eq(1).should(($currency) => {
                        expect($currency.text()).to.include('Currency')

                    })

                    const selectCurrency = cy.get(this.selectCountry_Currency_Locator).eq(2).click().then(($currency) => {

                        cy.wrap($currency.text())
                        cy.get(this.allList_Locator).find('li').first().click()
                    })


                    const IBAN_Lable = cy.get(this.label_Locator).eq(8).find('span')
                        .should('have.text', 'IBAN*')
                    const inputIBAN = cy.get(this.inputIBAN_Locator).clear().type(randomNumber.toString())


                    const confirmIBAN_Lable = cy.get(this.label_Locator).eq(9).find('span')
                        .should('have.text', 'Confirm IBAN*')
                    const inputConfirmIBAN = cy.get(this.inputConfirmIBAN_Locator).clear().type(randomNumber.toString())



                }


            })

        /*************************Adding Company Account**************************** */



        cy.get('@selectAccountBtn').eq(0).click({ force: true }).get('@list').find('li')
            .last().click().then(($account) => {



                if ($account.text().includes('company')) {



                    const firstBusinessLabel = cy.get(this.label_Locator).eq(0).find('span')
                        .should('have.text', 'Business Name*')

                    const inputBusinessame = cy.get(this.inputBusinessame_Locator)
                        .clear().type(randomString)

                    const CRNLabel = cy.get(this.label_Locator).eq(1).find('span')
                        .should('have.text', 'Companies House Registration Number (CRN)*')
                    const inputCRN = cy.get(this.inputCRN_Locator)
                        .clear().type(randomNumber.toString())


                    const countryLabel = cy.get(this.allLabel_ID_Locator).eq(0).should(($country) => {
                        expect($country.text()).to.include('Country/Region')
                    })

                    const selectRegion = cy.get(this.selectCountry_Currency_Locator).eq(1).click().then(($region) => {

                        cy.wrap($region.text())
                        cy.get(this.allList_Locator).find('li').first().click()
                    })

                    const addressLable = cy.get(this.label_Locator).eq(2).find('span')
                        .should('have.text', 'Address*')
                    const inputAddress = cy.get(this.inputAddress_Locator).clear().type(randomString)


                    const cityLabel = cy.get(this.label_Locator).eq(3).find('span')
                        .should('have.text', 'Town/City*')
                    const inputCity = cy.get(this.inputCity_Locator).clear().type(randomString)

                    const postalCodeLable = cy.get(this.label_Locator).eq(4).find('span')
                        .should('have.text', 'Postcode*')
                    const inputPostalCode = cy.get(this.inputPostalCode_Locator).clear().type(randomNumber.toString())

                    const Ph_No_Lable = cy.get(this.label_Locator).eq(5).find('span')
                        .should('have.text', 'Phone Number*')
                    const inputPhoneNo = cy.get(this.inputPhoneNo_locator).clear().type(randomNumber.toString())

                    const businessWebsite_Lable = cy.get(this.label_Locator).eq(6).find('span')
                        .should('have.text', 'Business Website*')
                    const inputWebsite = cy.get(this.inputWebsite_Locator).clear().type(randomString)

                    const bankName_Lable = cy.get(this.label_Locator).eq(7).find('span')
                        .should('have.text', 'Bank Name*')
                    const inputBankName = cy.get(this.inputBankName_Locator).clear().type(randomString)

                    const currencyLabel = cy.get(this.allLabel_ID_Locator).eq(1).should(($currency) => {
                        expect($currency.text()).to.include('Currency')

                    })

                    const selectCurrency = cy.get(this.selectCountry_Currency_Locator).eq(2).click().then(($currency) => {

                        cy.wrap($currency.text())
                        cy.get(this.allList_Locator).find('li').first().click()
                    })


                    const IBAN_Lable = cy.get(this.label_Locator).eq(8).find('span')
                        .should('have.text', 'IBAN*')
                    const inputIBAN = cy.get(this.inputIBAN_Locator).clear().type(randomNumber.toString())


                    const confirmIBAN_Lable = cy.get(this.label_Locator).eq(9).find('span')
                        .should('have.text', 'Confirm IBAN*')
                    const inputConfirmIBAN = cy.get(this.inputConfirmIBAN_Locator).clear().type(randomNumber.toString())

                    const footerLabel1 = cy.get(this.footerLabel1_Locator).eq(1).invoke('text').then(cy.log)
                    const footerLabel2 = cy.get(this.footerLabel2_Locator).eq(2).invoke('text').then(cy.log)




                    const TitleLabel = cy.get(this.allLabel_ID_Locator).eq(2).should(($title) => {
                        expect($title.text()).to.include('Title')

                    })

                    const selectitle = cy.get(this.selectAccount_Region_Locator).as('title')
                    cy.get('@title').eq(3).click().each(($title) => {

                        cy.get(this.allList_Locator).find('li').as('titleList')
                        cy.get('@titleList').each(($li) => {

                            cy.wrap($li.text())
                        })

                    })

                    /************************************Title=> Director**************************************** */

                    cy.get('@titleList').eq(0).click({ force: true }).then(($title) => {

                        if ($title.text().includes('Director')) {

                            const firstNameLable = cy.get(this.label_Locator).eq(10).should('have.text', 'First Name*')
                            const inputFirstName = cy.get(this.inputFirstNameLocator).clear().type(randomString, { force: true })

                            const lastNameLable = cy.get(this.label_Locator).eq(11).should('have.text', 'Last Name*')
                            const inputLastName = cy.get(this.inputLastName_Locator).clear().type(randomString)

                            const emailLable = cy.get(this.label_Locator).eq(12).should('have.text', 'Email*')
                            const inputemail = cy.get(this.inputemail_Locator).clear().type(randomString)

                            const dobLable = cy.get(this.label_Locator).eq(13).should('have.text', 'Date of Birth*')
                            const inputDOB = cy.get(this.inputDOB_Locator).clear().type('10/02/1990')


                        }

                    })
                    /************************************Title=>Owner (25%+)**************************************** */

                    const deleteTitleBtn = cy.get(this.deleteTitleBtn_Locator).as('deleteTitleBtn')
                    cy.get('@deleteTitleBtn').click()

                    cy.get('@title').eq(3).click().get('@titleList').eq(1).click({ force: true }).then(($title) => {

                        if ($title.text().includes('Owner (25%+)')) {

                            const firstNameLable = cy.get(this.label_Locator).eq(10).should('have.text', 'First Name*')
                            const inputFirstName = cy.get(this.inputFirstNameLocator).clear().type(randomString, { force: true })

                            const lastNameLable = cy.get(this.label_Locator).eq(11).should('have.text', 'Last Name*')
                            const inputLastName = cy.get(this.inputLastName_Locator).clear().type(randomString)

                            const emailLable = cy.get(this.label_Locator).eq(12).should('have.text', 'Email*')
                            const inputemail = cy.get(this.inputemail_Locator).clear().type(randomString)

                            const dobLable = cy.get(this.label_Locator).eq(13).should('have.text', 'Date of Birth*')
                            const inputDOB = cy.get(this.inputDOB_Locator).clear().type('10/02/1990')

                            const countryLabel = cy.get(this.allLabel_ID_Locator).eq(3).should(($country) => {
                                expect($country.text()).to.include('Country/Region')
                            })

                            const selectRegion = cy.get(this.selectAccount_Region_Locator).eq(4).click().then(($region) => {

                                cy.wrap($region.text())
                                cy.get(this.allList_Locator).find('li').first().click()
                            })


                            const addressLable = cy.get(this.label_Locator).eq(14).find('span')
                                .should('have.text', 'Address')
                            const inputAddress = cy.get(this.inputAddress_Locator).eq(1).clear().type(randomString)


                            const cityLabel = cy.get(this.label_Locator).eq(15).find('span')
                                .should('have.text', 'Town/City')
                            const inputCity = cy.get(this.inputCity_Locator).eq(1).clear().type(randomString)

                            const poatalCodeLable = cy.get(this.label_Locator).eq(16).find('span')
                                .should('have.text', 'Postcode')
                            const inputPostalCode = cy.get(this.inputPostalCode_Locator).eq(1).clear().type(randomNumber.toString())


                        }
                    })

                    /************************************Title=> Representative**************************************** */

                    const addMoreOwner = cy.get(this.addMoreOwnerBtn_Locator).first().click()

                    cy.get('@title').eq(5).click().get('@titleList').eq(2).click({ force: true }).then(($title) => {

                        if ($title.text().includes('Representative')) {

                            const firstNameLable = cy.get(this.label_Locator).eq(17).should('have.text', 'First Name*')
                            const inputFirstName = cy.get(this.inputFirstNameLocator).eq(1).clear().type(randomString, { force: true })

                            const lastNameLable = cy.get(this.label_Locator).eq(18).should('have.text', 'Last Name*')
                            const inputLastName = cy.get(this.inputLastName_Locator).eq(1).clear().type(randomString)

                            const dobLable = cy.get(this.label_Locator).eq(19).should('have.text', 'Date of Birth*')
                            const inputDOB = cy.get(this.inputDOB_Locator).eq(1).clear().type('10/02/1990')

                            const countryLabel = cy.get(this.allLabel_ID_Locator).eq(5).should(($country) => {
                                expect($country.text()).to.include('Country/Region')
                            })

                            const selectRegion = cy.get(this.selectAccount_Region_Locator).eq(6).click().then(($region) => {

                                cy.wrap($region.text())
                                cy.get(this.allList_Locator).find('li').first().click()
                            })


                            const addressLable = cy.get(this.label_Locator).eq(20).find('span')
                                .should('have.text', 'Address')
                            const inputAddress = cy.get(this.inputAddress_Locator).eq(2).clear().type(randomString)


                            const cityLabel = cy.get(this.label_Locator).eq(21).find('span')
                                .should('have.text', 'Town/City')
                            const inputCity = cy.get(this.inputCity_Locator).eq(2).clear().type(randomString)

                            const poatalCodeLable = cy.get(this.label_Locator).eq(22).find('span')
                                .should('have.text', 'Postcode')
                            const inputPostalCode = cy.get(this.inputPostalCode_Locator).eq(2).clear().type(randomNumber.toString())


                        }
                    })


                    /************************************Title=> Executive**************************************** */

                    cy.get('@deleteTitleBtn').first().click()

                    cy.get('@title').eq(3).click().get('@titleList').eq(3).click({ force: true }).then(($title) => {

                        if ($title.text().includes('Executive')) {

                            const firstNameLable = cy.get(this.label_Locator).eq(10).should('have.text', 'First Name*')
                            const inputFirstName = cy.get(this.inputFirstNameLocator).clear().type(randomString, { force: true })

                            const lastNameLable = cy.get(this.label_Locator).eq(11).should('have.text', 'Last Name*')
                            const inputLastName = cy.get(this.inputLastName_Locator).clear().type(randomString)

                            const emailLable = cy.get(this.label_Locator).eq(12).should('have.text', 'Email*')
                            const inputemail = cy.get(this.inputemail_Locator).clear().type(randomString)

                            const dobLable = cy.get(this.label_Locator).eq(13).should('have.text', 'Date of Birth*')
                            const inputDOB = cy.get(this.inputDOB_Locator).clear().type('10/02/1990')

                            const countryLabel = cy.get(this.allLabel_ID_Locator).eq(3).should(($country) => {
                                expect($country.text()).to.include('Country/Region')
                            })

                            const selectRegion = cy.get(this.selectAccount_Region_Locator).eq(4).click().then(($region) => {

                                cy.wrap($region.text())
                                cy.get(this.allList_Locator).find('li').first().click()
                            })


                            const addressLable = cy.get(this.label_Locator).eq(14).find('span')
                                .should('have.text', 'Address')
                            const inputAddress = cy.get(this.inputAddress_Locator).eq(1).clear().type(randomString)


                            const cityLabel = cy.get(this.label_Locator).eq(15).find('span')
                                .should('have.text', 'Town/City')
                            const inputCity = cy.get(this.inputCity_Locator).eq(1).clear().type(randomString)

                            const poatalCodeLable = cy.get(this.label_Locator).eq(16).find('span')
                                .should('have.text', 'Postcode')
                            const inputPostalCode = cy.get(this.inputPostalCode_Locator).eq(1).clear().type(randomNumber.toString())


                        }
                    })

                }
            })

        cy.contains('button', 'Next').click()

        const confirmationPage = cy.get('.p-10').invoke('text').then(cy.log).then(() => {
            cy.contains('button', 'Yes').click()
        })

        cy.contains('button', 'Back').click()
 

   

    }






}
export default TransactionPage