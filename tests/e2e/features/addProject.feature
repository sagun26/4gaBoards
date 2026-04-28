Feature: Add project
  As an admin
  I want to create projects from the dashboard
  So that I can manage my projects

  Background:
    Given admin user has navigated to the login page
    And admin user log in with following credentials
      | email | password |
      | demo  | demo     |
    And admin user should be navigated to admin panel dashboard

  Scenario: Create new project
    When the admin  creates a project with the following details
      | projectName |
      | TestProject |
    Then the project "TestProject" should be visible on the dashboard

  Scenario: Rename a project successfully
    Given the admin has created a project with the following details
      | projectName |
      | TestProject |
    When the admin renames a project with following details
      | projectName | newProjectName |
      | TestProject | UpdatedProject |
    Then the project name should be updated to "UpdatedProject"
