import { DataTable } from '@cucumber/cucumber';
import { Locator, Page } from '@playwright/test';

export class RenameProjectPage {
  private readonly page: Page;
  public readonly baseUrl: string;

  private readonly renameProjectSelector: Locator;
  private readonly saveBtnSelector: Locator;

  public readonly backBtnSelector: Locator;
  public readonly addSettingSelector: Locator;
  public readonly projectSelector: Locator;

  constructor(page: Page) {
    this.page = page;
    this.baseUrl = 'http://localhost:3000/';
    this.projectSelector = this.page.locator("button[title='TestProject']");
    this.renameProjectSelector = this.page.getByRole('textbox', { name: 'Enter project name...' });
    this.saveBtnSelector = this.page.locator('button[title="Save"]');
    this.backBtnSelector = this.page.locator('button[title="Back to Project"]');
    this.addSettingSelector = this.page.locator("button[title='Project Settings']");
  }

  public async navigateToHome(): Promise<void> {
    await this.page.goto(`${this.baseUrl}`);
  }

  public async navigateToSetting(): Promise<void> {
    await this.projectSelector.click();
  }

  public async renameProjectName(dataTable: DataTable): Promise<void> {
    const data = dataTable.hashes();
    await this.addSettingSelector.click();
    await this.renameProjectSelector.fill(data[0].newProjectName);
    await this.saveBtnSelector.click();
  }
  
  public async navigateToProjects(): Promise<void> {
    await this.page.goto(`${this.baseUrl}`);
  }
}
