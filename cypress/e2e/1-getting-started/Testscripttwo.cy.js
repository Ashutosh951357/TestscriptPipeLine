///<reference types="cypress"/>

describe('smoke test' , ()=>
{
    before(function()
    {
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name', { timeout: 60000 }).should('be.visible');
    }
    )
    beforeEach(function()
    {
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.wait(1000)
                
    })
    it('validate link',()=>
    {
        cy.get(`a[id='item_4_title_link'] div[class='inventory_item_name']`).click();

    }
    )
    it('validate add to cart' ,()=>
    {
     cy.get('#add-to-cart-sauce-labs-backpack').click()

        
    }
    )
    afterEach(function()
    {
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()

    })
}
)