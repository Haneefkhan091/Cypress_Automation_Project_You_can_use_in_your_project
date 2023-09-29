describe("Command", () => {
    beforeEach("visit website", () => {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    });
    it("Alerts", () => {


        cy.get('#alertbtn').click()
        cy.on('window:alert',(str)=>
        {
            
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.get('#confirmbtn').click()

        //After click on confirm button
        cy.on('window:confirm',(str)=>{
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.wait(3000)
        cy.go('back')
  
    });
  });
  