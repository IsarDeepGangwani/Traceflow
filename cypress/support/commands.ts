Cypress.Commands.add('login' as any,(email, password)=>{

  
    
//    cy.session([email,password],()=>{

    cy.visit('/')
    
    cy.get('[type="email"]').type(email as any)
    cy.contains('Next').click()
    cy.get('[type="Password"]').type(password as any)
    cy.get('[type="submit"]').click()
   /// <refrence require('cypress-xpath') />

   })
//    })

  