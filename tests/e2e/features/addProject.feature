Feature: Manage projects
  As an admin
  I want to create and update existing ones
  So that I can organize my projects

  Background:
    Given the admin user has logged in with the following credentials
      | email | password |
      | demo  | demo     |

  Scenario: Create a new project
    When the admin  creates a project with the following details
      | projectName |
      | TestProject |
    Then the project "TestProject" should be visible on the dashboard

  Scenario: Rename a project
    Given the admin has created a project with the following details
      | projectName  |
      | TestProject1 |
    When the admin renames a project with following details
      | projectName  | newProjectName |
      | TestProject1 | UpdatedProject |
    Then the project "UpdatedProject" should be visible on the dashboard
