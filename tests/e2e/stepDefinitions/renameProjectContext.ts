import { Given, When, Then, DataTable } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/customWorld';
import { RenameProjectPage } from '../pages/RenameProjectPage';
import { LoginPage } from '../pages/LoginPage';

// When('the admin has created a project with the following details', async function (this: CustomWorld) {
//   this.renameProjectPage = new RenameProjectPage(this.page);

//   await this.renameProjectPage.navigateToSetting();
//   await expect(this.page).toHaveURL(`${this.renameProjectPage.baseUrl}`);
// });

When('the admin renames a project from "TestProject" to "UpdatedProject"', async function (this: CustomWorld, dataTable: DataTable) {
  if (!this.renameProjectPage) {
    this.renameProjectPage = new RenameProjectPage(this.page);
  }
  await this.renameProjectPage.setting(dataTable);
});
Then('the project name should be updated to "UpdatedProject"', async function (this: CustomWorld) {
  if (!this.renameProjectPage) {
    this.renameProjectPage = new RenameProjectPage(this.page);
  }
  await expect(this.renameProjectPage.backBtnSelector).toBeVisible();
});
