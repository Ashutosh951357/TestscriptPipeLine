describe("Handling Iframe" ,function(){
    it('validate the user should write the text in iframe inside the available area',function(){


        cy.visit('https://the-internet.herokuapp.com/tinymce')
        cy.get('#mce_0_ifr').then(function($iframe){

            let iframebody =$iframe.contents().find('body')
            cy.wrap(iframebody)
            .clear()
            .type("welcome to cypress")
            .type('{selectall}')
            cy.get(':nth-child(4) > .tox-mbtn__select-label').click();
            
        })
        
    })

})