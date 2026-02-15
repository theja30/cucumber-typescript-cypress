Feature: Login functionality

  @test
  Scenario Outline: Successful login
    Given I navigate to login page
    When I login with username "<userName>" and password "<password>"
    Then I should login successfully
      Examples:
      | userName     | password     |
      | problem_user | secret_sauce |
      | visual_user  | secret_sauce |

  Scenario Outline: Invalid login
    Given I navigate to login page
    When I login with username "<userName>" and password "<password>"
    Then I should see login error "<errorMessage>"
    Examples:
      | userName      | password          | errorMessage                                                              |
      | incorrectUser | Password123       | Epic sadface: Username and password do not match any user in this service |
      | student       | incorrectPassword | Epic sadface: Username and password do not match any user in this service |
