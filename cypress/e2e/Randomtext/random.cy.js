Important scenerio:
In cypress with javascript i have an option of Ad new fields after adding that fields i have to apply assertion making sure that field are there.
scenario is that those fields are dynamic means every time i run those script data need to be change but the assertion will also change according to the data automatically
Code:
describe('Dynamic Field Test', () => {
  it('Should enter dynamic data and assert', () => {
    // Generate random data for Name, Email, and Address
    const dynamicData = {
      Name: `User${Math.floor(Math.random() * 1000)}`,
      Email: `user${Math.floor(Math.random() * 1000)}@example.com`,
      Address: `Address${Math.floor(Math.random() * 1000)}`
    };

    // Visit the page with the form
    cy.visit('your_page_url');

    // Fill in the form fields with dynamic data
    cy.get('input[name="Name"]').type(dynamicData.Name);
    cy.get('input[name="Email"]').type(dynamicData.Email);
    cy.get('input[name="Address"]').type(dynamicData.Address);

    // Perform assertions for each field
    cy.get('input[name="Name"]').should('have.value', dynamicData.Name);
    cy.get('input[name="Email"]').should('have.value', dynamicData.Email);
    cy.get('input[name="Address"]').should('have.value', dynamicData.Address);
  });
});
