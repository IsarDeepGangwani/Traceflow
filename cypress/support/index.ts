declare namespace Cypress {
    interface Chainable<Subject> {
       generateToken({secret}): void;

       /**
        * This will log user in
        * @param email string
        * @param password string
        */
       login(email: string, password: string): void;
    }
}
