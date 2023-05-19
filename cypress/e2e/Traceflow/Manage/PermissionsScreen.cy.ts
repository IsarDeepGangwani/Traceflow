import PermissionsPage from "../../../POM/Manage/PermissionsPage";
describe('Verify Manage Sub-Modules',()=>{


it('should navigate to Permissions Page',()=>{

    cy.fixture('Logincredentials').then((data) => {
        cy.login(data.email, data.password)

    })
    cy.wait(18000)
    
    const permissionDriver=new PermissionsPage()
    permissionDriver.Menu()
    permissionDriver.permissionsPageUI()
    permissionDriver.allPermisssionsForMember()
    permissionDriver.allPermisssionsForColaborator()
    permissionDriver.allowedPermissionsForMember()
    permissionDriver.allowedPermissionsForCollaboratsor()
    permissionDriver.availableChecboxes()
    permissionDriver.tableContentDetails()
    permissionDriver.savePermissions()
   








})




})