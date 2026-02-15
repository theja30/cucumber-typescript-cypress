
import { Given, When, Then ,DataTable} from "@badeball/cypress-cucumber-preprocessor"
import SearchPage from "../pages/SearchPage"

When("I search and add to cart", (table: DataTable) => {
  table.hashes().forEach((product) => {
    SearchPage.searchForSkuAndAddToCart(product.ProductName)
  })
})

Then("I should see the cart qty as {int}", (qty: number) => {
  SearchPage.verifyCartQuantity(qty)
})
