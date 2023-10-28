///<reference types = "cypress"/>

describe('registration test', () => {
    it('passes', () => {
      cy.visit('https://automationteststore.com/index.php?rt=account/create');
       
      cy.log('Your Personal Details');

      cy.get('#AccountFrm_firstname').type('Vlad');
      cy.get('#AccountFrm_lastname').type('Qa');
      cy.get('#AccountFrm_email').type('qa@test.com');
      cy.get('#AccountFrm_telephone').type('1234567');
      cy.get('#AccountFrm_fax').type('87654321');

      cy.log('Your Address');

      cy.get('#AccountFrm_company').type('QAlight');
      cy.get('#AccountFrm_address_1').type('Podol1');
      cy.get('#AccountFrm_address_2').type('Podol2');
      cy.get('#AccountFrm_city').type('Kyiv');
      cy.get('#AccountFrm_postcode').type('123');
      cy.get('[name="country_id"]').select('Ukraine');
      cy.get('[name="zone_id"]').select('Dnipro');

      
       cy.log('Login Details');

       cy.get('#AccountFrm_loginname').type('qaqaqa');
       cy.get('#AccountFrm_password').type('qa12345');
       cy.get('#AccountFrm_confirm').type('qa12345');

       cy.log('Newsletter');

       cy.get('#AccountFrm_newsletter1').click();
       cy.get('#AccountFrm_agree').click();

       cy.get('button[type="submit"]').eq(0).click();

    })

     it('authorization-test', () => {
        cy.visit('https://automationteststore.com/index.php?rt=account/login');

        cy.get('#loginFrm_loginname').type('qaqaqa');
        cy.get('#loginFrm_password').type('qa12345');

        cy.get('button[title="Login"]').click();
      })


  })