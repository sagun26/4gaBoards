const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');


Given('admin user has navigated to the login page', async function () {
         await page.goto("http://localhost:3000/login");

        expect(page.url()).toBe("http://localhost:3000/login");

         });

When('admin user log in with following credentials', async function (dataTable) {
           // Write code here that turns the phrase above into concrete actions
          console.log('pending')
         });

Then('admin user should be navigated to admin panek dashboard', async function () {
           // Write code here that turns the phrase above into concrete actions
          console.log('pending')
         });
