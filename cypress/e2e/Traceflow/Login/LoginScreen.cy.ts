import { get } from "cypress/types/lodash"
import LoginPage from "../../../POM/Login/LoginPage"
import { data } from "cypress/types/jquery"


describe('Verify Login Sucessful', () => {


    it('should Login Sucessfully', () => {

        cy.visit('/')
        cy.fixture('Logincredentials.json').then((data)=>{
            const logdriver =new LoginPage()
            logdriver.usernameInput(data.email)
            logdriver.clickNext()
            logdriver.passwordInput(data.password)
            logdriver.Submit()
            logdriver.Verifylogin()
        })
        
    })
    
})

