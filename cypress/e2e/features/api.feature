@api
Feature: API Feature

  Scenario: Create a post
    Given I create a post with title "title" and body "body" and userId 1
    Then I should receive a successful response with status code 201

  Scenario: delete the post
    Given I delete the post with id 1
    Then I should receive a successful response with status code 200
