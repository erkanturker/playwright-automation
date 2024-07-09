import { Page, Locator } from "@playwright/test";

export class DashboardPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToProject(leftNav: string) {
    await this.page.click(`text=${leftNav}`);
  }

  getColumnLocator(column: string): Locator {
    return this.page.locator(
      `.BoardColumnHeader-headerTitle >> text="${column}"`
    );
  }

  getCardLocator(columnLocator: Locator, cardTitle: string): Locator {
    return columnLocator
      .locator("xpath=..")
      .locator(
        `.BoardColumnScrollableContainer-cardsList .BoardCard-taskName >> text="${cardTitle}"`
      );
  }
}
