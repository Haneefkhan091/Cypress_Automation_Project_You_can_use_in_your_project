
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
