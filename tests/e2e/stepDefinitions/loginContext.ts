import { Given, When, Then, DataTable } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/customWorld';
import { LoginPage } from '../pages/LoginPage';

Given('the admin user has navigated to the login page', async function (this: CustomWorld) {
  this.loginPage = new LoginPage(this.page);

  await this.loginPage.navigateToLoginPage();
  await expect(this.page).toHaveURL(`${this.loginPage.baseUrl}login`);
});

When('the admin user log in with following credentials', async function (this: CustomWorld, dataTable: DataTable) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.login(dataTable);
});

Then('the admin user should be navigated to admin panel dashboard', async function (this: CustomWorld) {
  this.loginPage = new LoginPage(this.page);
  await expect(this.page).toHaveURL(this.loginPage.baseUrl);
  await expect(this.loginPage.dashboardSelector).toBeVisible();
});

Given('the admin user has logged in with the following credentials', async function (this: CustomWorld, dataTable: DataTable) {
  this.loginPage = new LoginPage(this.page);
  await this.loginPage.navigateToLoginPage();
  await expect(this.page).toHaveURL(`${this.loginPage.baseUrl}login`);
  await this.loginPage.login(dataTable);
  await expect(this.page).toHaveURL(this.loginPage.baseUrl);
  await expect(this.loginPage.dashboardSelector).toBeVisible();
});
