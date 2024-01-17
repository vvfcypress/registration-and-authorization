///<reference types = "cypress"/>
import user from '../fixtures/user.json'
import { login } from '../support/helper'
import { faker } from '@faker-js/faker'
import product from '../fixtures/product.json'
import { search } from '../support/helpers/productHelper'


it('Order', () => {
 
  login(user);
  

  cy.get('#filter_keyword').type('E');
  cy.get('.button-in-search').click();

  search(product);
  
})