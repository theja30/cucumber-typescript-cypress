import { When,Then } from "@badeball/cypress-cucumber-preprocessor";

const apiUrl = "https://jsonplaceholder.typicode.com/users";
let response;

Then("I should receive a successful response with status code {int}", (statusCode: number) => {
  cy.wrap(response).its("status").should("eq", statusCode);
});

When("I create a post with title {string} and body {string} and userId {int}", (title: string, body: string, userId: number) => {
            cy.request({
    method: "POST",
    url: apiUrl,
    body: JSON.stringify({
   "title": title,
    "body": body,
    "userId": userId,
  })
  }).then((res) => response = res);
});

When("I delete the post with id {int}", (id: number) => {
            cy.request({
    method: "DELETE",
    url: `${apiUrl}/${id}`
  }).then((res) => response = res);
});