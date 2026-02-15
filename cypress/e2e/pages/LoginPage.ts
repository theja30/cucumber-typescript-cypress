class LoginPage {

  usernameInput = '#user-name'
  passwordInput = '#password'
  submitButton = '#login-button'
  errorMessage = '.error-message-container.error'

  visit(url: string) {
    cy.visit(url)
  }


  login(username: string, password: string) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickLogin();
  }

  enterUsername(username: string) {
    cy.get(this.usernameInput).should("be.visible").clear().type(username)
  }

  enterPassword(password: string) {
    cy.get(this.passwordInput).should("be.visible").clear().type(password)
  }

  clickLogin() {
    cy.get(this.submitButton).should("be.visible").click()
  }

  verifyErrorMessage(errorMsg: string) {
    cy.get(this.errorMessage).should("be.visible")
    .and("have.text", errorMsg);
  }
}

export default new LoginPage()
