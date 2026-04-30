import { Given, When, Then, DataTable } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

import { CustomWorld } from '../support/customWorld';
import { ProjectPage } from '../pages/Projectpage';

When('the admin  creates a project with the following details', async function (this: CustomWorld, projectDetails: DataTable) {
  if (!this.projectPage) {
    this.projectPage = new ProjectPage(this.page);
  }
  await this.projectPage.dashboard(projectDetails);
});
Then('the project {string} should be visible on the dashboard', async function (this: CustomWorld, projectDetails: DataTable) {
  if (!this.projectPage) {
    this.projectPage = new ProjectPage(this.page);
  }
});
