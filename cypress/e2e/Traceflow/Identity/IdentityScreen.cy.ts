import IdentityPage from "../../../POM/Identity/IdentityPage";
describe('Verify Identity Module',()=>{

    it('should navigate to Permissions Page',()=>{

        cy.fixture('Logincredentials').then((data) => {
            cy.login(data.expertEmail, data.expertPassword)
    
        })
        cy.wait(18000)

        const identityDriver=new IdentityPage()
        identityDriver.menuBtn()
        identityDriver.identityPageUI()






    })
    
    



})