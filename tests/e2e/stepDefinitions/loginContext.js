const { Given, When, Then, DataTable } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const dashboardSelector = "div[title='Dashboard']";
Given('admin user has navigated to the login page', async function () {
  await page.goto('http://localhost:3000/login');

  expect(page.url()).toBe('http://localhost:3000/login');
});

When('admin user log in with following credentials', async function (dataTable) {
  const loginCredentails = dataTable.hashes();

  await page.locator('[name="emailOrUsername"]').fill(loginCredentails[0].email);

  await page.locator('[name="password"]').fill(loginCredentails[0].password);
  //login button click
  await page.getByRole('button', { name: 'Log in' }).click();
});

Then('admin user should be navigated to admin panel dashboard', async function () {
  await page.goto('http://localhost:3000/');

  expect(page.url()).toBe('http://localhost:3000/');
  await expect(page.locator(dashboardSelector)).toBeVisible();
});
