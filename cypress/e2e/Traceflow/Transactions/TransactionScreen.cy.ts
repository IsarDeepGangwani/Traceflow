import TransactionPage from "../../../POM/Transactions/TransactionPage";
describe('Verify Transactions Module', () => {

    it('should navigate to Transaction Page', () => {

        cy.fixture('Logincredentials').then((data) => {
            cy.login(data.expertEmail, data.expertPassword)

        })
        cy.wait(18000)

        const trans_Driver = new TransactionPage()
        trans_Driver.menuBtn()
        trans_Driver.transac_Page()
        trans_Driver.addAccount()




    })



})