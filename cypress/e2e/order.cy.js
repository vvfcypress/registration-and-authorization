///<reference types = "cypress"/>
import user from '../fixtures/user.json'
import { login } from '../support/helper'
import { faker } from '@faker-js/faker'
import product from '../fixtures/product.json'


it('Order', () => {
 
  login(user);


  cy.get('#filter_keyword').type(product.productName);
  cy.get('.button-in-search').click();

  cy.get('.fa.fa-cart-plus.fa-fw').click();
  cy.get('#cart_checkout2').click();
  cy.get('#checkout_btn').click();
  
    

})