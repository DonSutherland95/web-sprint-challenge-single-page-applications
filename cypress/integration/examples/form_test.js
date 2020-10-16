describe("Forms App", ()=>{
    beforeEach(()=>{
        cy.visit("http://localhost:3000/pizza")
    })
    const nameInput = () => cy.get('input[name="username"]')
    const specInstructions = () => cy.get('input[name="customerNote"]')
    const toppingsInput = () =>  cy.get('[type="checkbox"]')
    const submitForm = () => cy.get("#submitForm")

    it("test that you can add text to the box", ()=>{
        nameInput().type("Donnie")
        specInstructions().type("Add napkins")
    })
    it("test that you can select multiple toppings", ()=>{
        toppingsInput().check()
    })
    it("test that you can submit the form", ()=>{
        submitForm().submit()
    })
})