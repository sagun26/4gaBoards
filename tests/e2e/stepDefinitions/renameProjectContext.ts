import { Given, When, Then, DataTable } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/customWorld';
import { RenameProjectPage } from '../pages/RenameProjectPage';
import { ProjectPage } from '../pages/Projectpage';

Given('the admin has created a project with the following details', async function (this: CustomWorld, dataTable: DataTable) {
  this.projectPage = new ProjectPage(this.page);

  await this.projectPage.createProject(dataTable);
});

When('the admin renames a project with following details', async function (this: CustomWorld, dataTable: DataTable) {
  this.renameProjectPage = new RenameProjectPage(this.page);
  await this.renameProjectPage.renameProjectName(dataTable);
});

Then('the project "UpdatedProject" should be visible on the dashboard', async function (this: CustomWorld) {
  this.renameProjectPage = new RenameProjectPage(this.page);
  const projectLocator = this.page.locator("button[title='UpdatedProject']");
  await expect(projectLocator).toBeVisible();
});
