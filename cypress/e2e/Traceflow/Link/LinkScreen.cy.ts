import LinkPage from "../../../POM/Link/LinkPage";
describe('Verify Link Module',()=>{

it('Navigate to Link module',()=>{


cy.fixture('Logincredentials').then((data)=>{

    cy.login(data.email,data.password)
})
cy.wait(18000)

const linkDriver=new LinkPage()
linkDriver.Menu()
linkDriver.openLinkModule()
linkDriver.searchBar()
linkDriver.linkApp()
linkDriver.unLinkApp()


})







})