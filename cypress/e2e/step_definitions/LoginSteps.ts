console.log("STEP FILE LOADED");

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import LoginPage from "../pages/LoginPage"

Given("I navigate to login page", () => {
  LoginPage.visit("https://www.saucedemo.com/")
})

When("I login with username {string} and password {string}", (username: string, password: string) => {
  LoginPage.login(username, password);
});

When("I click login", () => {
  LoginPage.clickLogin()
})

Then("I should login successfully", () => {
  cy.url().should("include", "/inventory.html")
})

Then("I should see login error {string}", (errorMsg: string) => {
  LoginPage.verifyErrorMessage(errorMsg)
})
