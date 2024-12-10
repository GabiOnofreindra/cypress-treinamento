class LoginPage {
    visit() {
      cy.visit('https://www.saucedemo.com/');
    }
  
    login(username, password) {
      cy.get('input#user-name').type(username);
      cy.get('input#password').type(password);
      cy.get('input#login-button').click();
    }
  
    assertLoginError() {
      cy.get('h3[data-test="error"]').should('be.visible');
    }
  
    assertLoginSuccess() {
      cy.url().should('include', '/inventory.html');
    }
  }
  
  export default LoginPage;
  