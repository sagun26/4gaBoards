Feature: login
 As an admin
 I want to log in to the website admin panel
 So that I can manage my products

  Scenario: Successful login with valid credentials
    Given the admin user has navigated to the login page
    When the admin user log in with following credentials
      | email | password |
      | demo  | demo     |
    Then the admin user should be navigated to admin panel dashboard
