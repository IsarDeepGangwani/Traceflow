class Loginpage {

    //CSS Locators for Login

    emailLocator = "[type='email']";
    nextbtnLocator = 'Next';
    passwordlocator = "[type='Password']"
    submitbtnLocator = "[type='submit']"
    loginverify = "a[href='/spaces']"

    usernameInput(email) {
        const field = cy.get(this.emailLocator).type(email)
    }
    clickNext() {
        const field = cy.contains(this.nextbtnLocator).click()
    }
    passwordInput(password) {
        const field = cy.get(this.passwordlocator).type(password)
    }
    Submit() {
        const field = cy.get(this.submitbtnLocator).click()
    }

    Verifylogin() {
        cy.wait(20000)
        cy.get(this.loginverify).should('be.visible')
    }



}
export default Loginpage;