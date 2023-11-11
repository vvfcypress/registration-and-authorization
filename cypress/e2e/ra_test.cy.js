///<reference types = "cypress"/>
import user from '../fixtures/user.json';
import { faker } from '@faker-js/faker';


user.email = faker.internet.email({ provider: 'gmail.com'});
user.loginName = faker.internet.userName();
user.firstName = faker.person.firstName();
user.lastName = faker.person.lastName();
user.fax = faker.phone.number();
user.phone = faker.phone.number();
user.companyName = faker.company.name();
user.postcode = faker.location.zipCode('####');

describe('authorization and registration test', () => {
    it('registration test', () => {
      cy.visit('/');
      cy.get('.topnavbar [data-id="menu_account"]').click();
      cy.get('#accountFrm button').click();
       
      cy.log('Your Personal Details');

      cy.get('#AccountFrm_firstname').type(user.firstName);
      cy.get('#AccountFrm_lastname').type(user.lastName);
      cy.get('#AccountFrm_email').type(user.email);
      cy.get('#AccountFrm_telephone').type(user.phone);
      cy.get('#AccountFrm_fax').type(user.fax);

      cy.log('Your Address');

      cy.get('#AccountFrm_company').type(user.companyName);
      cy.get('#AccountFrm_address_1').type(user.address1);
      cy.get('#AccountFrm_address_2').type(user.address2);
      cy.get('#AccountFrm_city').type(user.city);
      cy.get('#AccountFrm_postcode').type(user.postcode);
      cy.get('[name="country_id"]').select(user.countryid);
      cy.get('[name="zone_id"]').select(user.zoneId);

      
       cy.log('Login Details');

       cy.get('#AccountFrm_loginname').type(user.loginName);
       cy.get('#AccountFrm_password').type(user.password);
       cy.get('#AccountFrm_confirm').type(user.password);

       cy.log('Newsletter');

       cy.get('#AccountFrm_newsletter1').click();
       cy.get('#AccountFrm_agree').click();
       cy.get('button[title="Continue"]').click();

       //cy.get('button[type="submit"]').eq(0).click();

      //cy.get('.heading1', {timeout: 2000}).should('contain', 'First_Name_test');

    })

     it('authorization-test', () => {
        cy.visit('/index.php?rt=account/login');

        cy.get('#loginFrm_loginname').type(user.loginName);
        cy.get('#loginFrm_password').type(user.password);

        cy.get('button[title="Login"]').click();
        cy.get('.heading1', {timeout: 2000}).should('contain', user.firstName);
      })


  })