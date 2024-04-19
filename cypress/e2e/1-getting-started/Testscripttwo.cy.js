///<reference types="cypress"/>

describe('Learn BDD Explicit Assertion',function(){


    it('validate complex data using expect',function()
    {
        cy.visit('www.google.com')
        let pageName="Google Homepage"
        expect(pageName).to.not.equal('Google')
        //validating object
        let person ={
            firstName:"Testing",lastName:"cypress"

        }
          
    })
})
