import { When, Then, DataTable } from '@cucumber/cucumber';
import { CustomWorld } from '../support/customWorld';
import { ProjectPage } from '../pages/Projectpage';
import { expect } from '@playwright/test';
When('the admin  creates a project with the following details', async function (this: CustomWorld, projectDetails: DataTable) {
  this.projectPage = new ProjectPage(this.page);

  await this.projectPage.createProject(projectDetails);
});

Then('the project "TestProject" should be visible on the dashboard', async function (this: CustomWorld) {
  this.projectPage = new ProjectPage(this.page);
  const projectLocator = this.page.locator("button[title='TestProject']");
  await expect(projectLocator).toBeVisible();
});
