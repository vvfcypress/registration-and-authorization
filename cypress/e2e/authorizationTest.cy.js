import user from '../fixtures/user.json'
import { login } from '../support/helper'
import { faker } from '@faker-js/faker'
user.loginName = faker.internet.userName();
user.email = faker.internet.email({ provider: 'fakeMail.com'});
user.firstName = faker.person.firstName();
user.lastName = faker.person.lastName();


import homePage from '../support/pages/HomePage';
import loginPage from '../support/pages/LoginPage';
import registrationPage from '../support/pages/RegistrationPage';
import accountPage from '../support/pages/AccountPage';
import authorizationPage from '../support/pages/AuthorizationPage';

it('authorization-test', () => {

  authorizationPage.visit();
 
    authorizationPage.getLoginNameField().type(user.loginName);
    authorizationPage.getPasswordField().type(user.password);

   //authorizationPage.fillAuthorizationfields(user);

    authorizationPage.getSubmitAuthorizationLoginButton().click();

    cy.log('Verify first name displayed on account page...');
    accountPage.getFirstNameText().should('contain', user.firstName);
    
  })