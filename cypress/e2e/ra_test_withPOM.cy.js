import user from '../fixtures/user.json';
import { faker } from '@faker-js/faker';
import homePage from '../support/pages/HomePage';
import loginPage from '../support/pages/LoginPage';
import registrationPage from '../support/pages/RegistrationPage';
import accountPage from '../support/pages/AccountPage';
import authorizationPage from '../support/pages/AuthorizationPage';

user.email = faker.internet.email({ provider: 'fakeMail.com'});
user.loginName = faker.internet.userName();
user.firstName = faker.person.firstName();
user.lastName = faker.person.lastName();
user.fax = faker.phone.number();
user.phone = faker.phone.number();
user.companyName = faker.company.name();
user.postcode = faker.location.zipCode('####');


describe('Succesfull registration', ()=>{

    it('Registration', () => {
        homePage.visit();
        
        cy.log('Opening registration page...');
        homePage.getHeaderAccountButton().click();    
        loginPage.getRegisterAccountButton().click();

        registrationPage.fillRegistrationFields(user);

        cy.log('Submit registration form...');
        registrationPage.getNewsLetterCheckbox().check();
        registrationPage.getPrivacyPolicyCheckbox().check();
        registrationPage.getSubmitRegistrationFormButton().click();
    
        cy.log('Verify first name displayed on account page...');
        accountPage.getFirstNameText().should('contain', user.firstName);
    })
    
    it('Authorization', () => {
        
    cy.log('Open website login page');

    authorizationPage.visit();
    
       // cy.log('Check user is unauthorized');
        //cy.getCookie('customer').should('be.null');
    
    cy.log('Authorize user');
    authorizationPage.getLoginNameField().type(user.loginName);
    authorizationPage.getPasswordField().type(user.password);

    authorizationPage.getSubmitAuthorizationLoginButton().click();
        
        //cy.get('#loginFrm_loginname').type(user.loginName);
        //cy.get('#loginFrm_password').type(user.password);
        //cy.get('button[type="submit"]').contains('Login').click();
    
        accountPage.getFirstNameText().should('contain', user.firstName);
    })
})