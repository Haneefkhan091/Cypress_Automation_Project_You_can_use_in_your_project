class LoginPage {
  fillUsername() {
    return cy.get("#user_full_name");
  }

  fillemail() {
    return cy.get('#user_email_login')
  }
  fillpassword() {
    return cy.get('#user_password')
  }
  submitLoginForm() {
    return cy.get("#user_submit");
  }
}

export default new LoginPage();
