import { Given, When, Then, DataTable } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/customWorld';
import { RenameProjectPage } from '../pages/RenameProjectPage';
import { LoginPage } from '../pages/LoginPage';

Given('the admin has created a project with the following details', async function (this: CustomWorld, projectDetails: DataTable) {
  this.renameProjectPage = new RenameProjectPage(this.page);

  await this.renameProjectPage.navigateToSetting();
});
When('the admin renames a project with following details', async function (this: CustomWorld, dataTable: DataTable) {
  if (!this.renameProjectPage) {
    this.renameProjectPage = new RenameProjectPage(this.page);
  }
  await this.renameProjectPage.renameprojectname(dataTable);
});

Then('the project name should be updated to "UpdatedProject"', async function (this: CustomWorld) {
  if (!this.renameProjectPage) {
    this.renameProjectPage = new RenameProjectPage(this.page);
  }
  await expect(this.renameProjectPage.backBtnSelector).toBeVisible();
});
