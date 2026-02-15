class SearchPage {


    searchForSkuAndAddToCart(sku: string) {
    cy.contains('.inventory_item_name', sku)
  .parents('.inventory_item') 
  .find('button.btn_primary')  
  .click();
  }

    verifyCartQuantity(qty: number) {   
    cy.get('#shopping_cart_container').should('have.text', qty.toString());
    }
}

export default new SearchPage()
