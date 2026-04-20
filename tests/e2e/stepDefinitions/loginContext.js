const { Given, When, Then, DataTable } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');

const dashboardSelector = "div[title='Dashboard']";
const emailSelector = "[name='emailOrUsername']";
const paasswordSelector = "[name='password']";
const baseurl = 'http://localhost:3000/';
const loginurl = 'http://localhost:3000/login';

Given('admin user has navigated to the login page', async function () {
  await page.goto(loginurl);

  expect(page.url()).toBe(loginurl);
});

When('admin user log in with following credentials', async function (dataTable) {
  const loginCredentails = dataTable.hashes();

  await page.locator(emailSelector).fill(loginCredentails[0].email);

  await page.locator(paasswordSelector).fill(loginCredentails[0].password);
  await page.getByRole('button', { name: 'Log in' }).click();
});

Then('admin user should be navigated to admin panel dashboard', async function () {
  await page.goto(baseurl);

  expect(page.url()).toBe(baseurl);
  await expect(page.locator(dashboardSelector)).toBeVisible();
});
