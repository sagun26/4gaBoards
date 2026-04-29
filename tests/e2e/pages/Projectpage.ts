import { DataTable } from '@cucumber/cucumber';
import { Locator, Page } from '@playwright/test';

export class ProjectPage {
  private readonly page: Page;
  public readonly baseUrl: string;
  public readonly projectUrl: string;

  private readonly addProjectSelector: Locator;
  private readonly projectNameSelector: Locator;
  private readonly projectBtnSelector: Locator;
  public readonly displaySelector: Locator;
  public readonly addSettingSelector: Locator;
  constructor(page: Page) {
    this.page = page;
    this.baseUrl = 'http://localhost:3000/';
    this.projectUrl = 'http://localhost:3000/projects/1763160898207221052';
    this.addProjectSelector = this.page.locator('.Projects_addButton__Wwa-t');
    this.projectNameSelector = this.page.getByRole('textbox', { name: 'Enter project name...' });
    this.projectBtnSelector = this.page.locator('.Button_submit__6X4EX');

    this.displaySelector = this.page.locator('.Project_title__kdDy-');
    this.addSettingSelector = this.page.getByRole('button', { name: 'Project Settings' });
  }

  public async navigateToDashboard(): Promise<void> {
    await this.page.goto(`${this.baseUrl}`);
  }
  public async dashboard(dataTable: DataTable): Promise<void> {
    const data = dataTable.hashes();
    await this.addProjectSelector.click();
    await this.projectNameSelector.fill(data[0].projectName);
    await this.projectBtnSelector.click();
    await this.displaySelector.click();
    await this.addSettingSelector.click();
  }
  public async navigateToProjects(): Promise<void> {
    await this.page.goto(`${this.projectUrl}`);
  }
}
