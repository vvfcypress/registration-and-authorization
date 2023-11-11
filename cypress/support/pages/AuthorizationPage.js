import BasePage from "./BasePage";

class AuthorizationPage extends BasePage{
    
    constructor(){
        super();
        this.elements.submitAuthorizationLoginButton = 'button[title="Login"]';
        this.elements.loginNameField = '#loginFrm_loginname';
        this.elements.passwordField = '#loginFrm_password';
    }

    visit(){
        cy.log('Open website login page');
        cy.visit('/index.php?rt=account/login');
    }

    getSubmitAuthorizationLoginButton(){
        return cy.get(this.elements.submitAuthorizationLoginButton)
    }

    getLoginNameField(){
        return cy.get(this.elements.loginNameField)
    }

    getPasswordField(){
        return cy.get(this.elements.passwordField)
    }


    fillAuthorizationfields(user){
        cy.log('Fill in authorization fields...');

        this.getLoginNameField().type(user.loginName);
        this.getPasswordField().type(user.password);
      
    }
}
export default new AuthorizationPage();