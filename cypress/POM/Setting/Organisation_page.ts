class Organisation_page {
    //Css Locators for organosation page 
    Organisation_name_locator = "[placeholder='Business Name']";
    Business_type_locator = "[id='headlessui-listbox-button-23']";
    CRN_locator = "[placeholder='Company Registration']";
    VAT_number = "[placeholder='VAT Number (optional)']";
    Business_phone_number_locator = "[placeholder='Phone Number']";
    Business_website_locator = "[placeholder='Business Website']";
    Business_postcode_locator = "[placeholder='Business Postcode']";
    Business_address_locator = "[placeholder='Business Address']";
    Town_city_locator = "[placeholder='Town/City']";
    Country_region_locator = "[id='headlessui-listbox-button-24']";
    Save_button_locator = "[type='submit']";

    business_name_input() {
        const organisation_name = cy.get(this.Organisation_name_locator).clear().type('Isarbusiness')

    }
    select_business_type() {
        const business_type_drop_down = cy.get(this.Business_type_locator).first().click()
        const all_options = cy.get('li').each(($options) => {
            cy.log('Available business types ==', $options.text())
        })
        const selecting_business_type = cy.get('li').contains("Limited Company").wait(1000).click({ force: true })

    }
    CRN_input() {
        const CRN = cy.get(this.CRN_locator).clear().type('67667676')
    }
    VAT_input() {
        const VAT = cy.get(this.VAT_number).clear().type('182781')
    }
    Business_phone_number() {
        const phone_number = cy.get(this.Business_phone_number_locator).clear().type('88925457')
    }
    Business_website() {
        const website = cy.get(this.Business_website_locator).clear().type('www.google.com')
    }
    Business_postcode() {
        const postcode = cy.get(this.Business_postcode_locator).clear().type('7845784')
    }
    Business_address() {
        const address = cy.get(this.Business_address_locator).clear().type('adsress')
    }
    Town_city() {
        const town = cy.get(this.Town_city_locator).clear().type('address town')
    }
    Country_region() {
        const country = cy.get(this.Country_region_locator).click()

    }
    Save_button() {
        const save = cy.get(this.Save_button_locator).click()
    }

}
export default Organisation_page;