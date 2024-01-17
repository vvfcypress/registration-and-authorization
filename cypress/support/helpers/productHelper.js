  export function search(product){
    
    cy.get('.fixed_wrapper').each(($productElement) => {
      
        const productNames = $productElement.text();

       
        if (productNames.includes(product.productName)) {
            
            cy.wrap($productElement).contains(product.productName).click();
            cy.get('.fa.fa-cart-plus.fa-fw').click();           
            cy.get('#cart_checkout2').click();            
            cy.get('#checkout_btn').click();
           
           
        }
        else {

          cy.get('a:contains(">")').eq(0).click();
          cy.log('Product not found, navigating to the next page');

        }
    });

 
};

