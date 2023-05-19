import { should } from "chai"

class BillingPage {



    // Locators



    menuBtn_Locator = '#Calque_1'
    billing_Locator = 'a[href="/admin/billing"]'
    monthlySummaryLabel_Locator = '.p-4.rounded-2xl'
    dateRangeDropdown_Locator = 'button[id^="headlessui-listbox-button"'
    availableDateRange_Locator = '.w-44'
    paymentMethodLabel_Locator = '.text-opacity-75.w-full>div'
    subscriptionPlanLabel_Locator = '.text-opacity-75.w-full>div'
    addpaymentLabel_Locator = '.max-w-5xl.mx-auto'
    cardTypeBtn_Locator = '.text-opacity-75.mb-6+button'
    nameLable_Locator = '.text-sm.flex-grow'
    inputName_Locator = 'input[placeholder="Name on Card"]'
    creditcardLabel_Locator = '.gap-x-10.mt-6'
    bankAccountTab_Locator = 'a[href="/admin/billing/bank-account"]'
    bankAccountLabel_Locator = '.max-w-5xl.mx-auto>div>div'
    messageLabel_Locator = '.max-w-5xl.mx-auto'
    restrictedBtn_Locator = '.max-w-5xl.mx-auto>div>div>button'








    menuBtn() {

        cy.get(this.menuBtn_Locator).click()
        cy.get(this.billing_Locator).click()

    }

    billingTab() {

        cy.get(this.billing_Locator).should('be.visible').should('have.text', 'Billing')


        const monthlySummaryLabel = cy.get(this.monthlySummaryLabel_Locator).find('p').each(($ele) => {

            const elementText = $ele.text().trim()
            cy.log(elementText)

        })

        const dateRangeDropdown = cy.get(this.dateRangeDropdown_Locator).eq(0).as('dateRangeBtn')
        cy.get('@dateRangeBtn').click()



        const availableDateRange = cy.get(this.availableDateRange_Locator).find('ul').find('li').find('span').each(($li, index) => {

            cy.log($li.text())
        })


        cy.contains('button', 'Download').should('not.be.enabled')



        const selectEachDateRange = cy.get(this.availableDateRange_Locator).find('ul').as('list')


        cy.get('@list').find('li').eq(0).click().invoke('show')

        cy.wait(1000)
        cy.get('@dateRangeBtn').click({ force: true })
        cy.get('@list').find('li').eq(1).click()
        const downloadBtn = cy.contains('button', 'Download').as('downloadBtn')
        cy.get('@downloadBtn').should('be.enabled').click()


        cy.wait(1000)
        cy.get('@dateRangeBtn').click({ force: true })
        cy.get('@list').find('li').eq(2).click()
        cy.get('@downloadBtn').should('be.enabled').click()

        cy.wait(1000)
        cy.get('@dateRangeBtn').click({ force: true })
        cy.get('@list').find('li').eq(3).click()
        cy.get('@downloadBtn').should('be.enabled').click()

        cy.wait(1000)
        cy.get('@dateRangeBtn').click({ force: true })
        cy.get('@list').find('li').eq(4).click()
        cy.get('@downloadBtn').should('be.enabled').click()

        cy.wait(1000)
        cy.get('@dateRangeBtn').click({ force: true })
        cy.get('@list').find('li').eq(5).click()
        cy.get('@downloadBtn').should('be.enabled').click()



        const paymentMethodLabel = cy.get(this.paymentMethodLabel_Locator).first().as('paymentLabel')
        cy.get('@paymentLabel').find('h1').invoke('text').then(cy.log)
        cy.get('@paymentLabel').find('p').invoke('text').then(cy.log)


        const subscriptionPlanLabel = cy.get(this.subscriptionPlanLabel_Locator).last().as('subscriptionLabel')
        cy.get('@subscriptionLabel').find('h1').invoke('text').then(cy.log)
        cy.get('@subscriptionLabel').find('p').invoke('text').then(cy.log)
    }




    addPayment() {



        const addPaymentMethodBtn = cy.contains('button', 'Add payment Method')
            .should('be.visible').should('be.enabled').click()


        const addpaymentLabel = cy.get(this.addpaymentLabel_Locator).find('p').eq(1)
            .should('be.visible').should('have.text', 'Add Payment Method').invoke('text').then(cy.log)


        const cardTypeBtn = cy.get(this.cardTypeBtn_Locator).should('be.enabled')
            .should('be.visible').click()


        const nameLable = cy.get(this.nameLable_Locator).should('have.text', 'Name on Card')
            .invoke('text').then(cy.log)
        const randomString = Math.random().toString(36).substring(2)
        const inputName = cy.get(this.inputName_Locator).clear().type(randomString)

        const creditcardLabel = cy.get(this.creditcardLabel_Locator).as('creditLabel')
        cy.get('@creditLabel').find('p').eq(0).should('have.text', 'Credit Card Number')
            .invoke('text').then(cy.log)

        cy.get('@creditLabel').find('p').eq(1).should('have.text', 'Expiration')
            .invoke('text').then(cy.log)

        cy.get('@creditLabel').find('p').eq(2).should('have.text', 'CVV')
            .invoke('text').then(cy.log)





        cy.go('back')


    }


    bankAccountTab() {


        const bankAccountTab = cy.get(this.bankAccountTab_Locator).click()
        const bankAccountLabel = cy.get(this.bankAccountLabel_Locator).find('p').invoke('text').then(cy.log)
        const messageLabel = cy.get(this.messageLabel_Locator).find('p').invoke('text').then(cy.log)
        const restrictedBtn = cy.get(this.restrictedBtn_Locator).as('restrictedBtn')
        cy.get('@restrictedBtn').invoke('text').then(cy.log)
        cy.get('@restrictedBtn').click()

    }













}
export default BillingPage