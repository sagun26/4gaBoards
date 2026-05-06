import { DataTable } from '@cucumber/cucumber';
import { Locator, Page } from '@playwright/test';

export class ProjectPage {
  private readonly page: Page;
  public readonly baseUrl: string;
  private readonly addProjectSelector: Locator;
  private readonly projectNameSelector: Locator;
  private readonly projectBtnSelector: Locator;
  public readonly displaySelector: Locator;
  public readonly projectSelector: Locator;

  constructor(page: Page) {
    this.page = page;
    this.baseUrl = 'http://localhost:3000/';
    this.projectSelector = this.page.locator("button[title='TestProject']");
    this.addProjectSelector = this.page.locator('.Projects_addButton__Wwa-t');
    this.projectNameSelector = this.page.getByRole('textbox', { name: 'Enter project name...' });
    this.projectBtnSelector = this.page.locator('.Button_submit__6X4EX');
    this.displaySelector = this.page.locator('.Project_title__kdDy-');
  }

  public async navigateToDashboard(): Promise<void> {
    await this.page.goto(`${this.baseUrl}`);
  }

  public async createProject(expectedDashboardData: DataTable): Promise<void> {
    const data = expectedDashboardData.hashes();
    await this.addProjectSelector.click();
    await this.projectNameSelector.fill(data[0].projectName);
    await this.projectBtnSelector.click();
    await this.displaySelector.click();
  }
}
