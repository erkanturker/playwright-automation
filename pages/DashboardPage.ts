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
      `.BoardColumnHeader-headerTitle:has-text("${column}")`
    );
  }

  getCardLocator(columnLocator: Locator, cardTitle: string): Locator {
    return columnLocator
      .locator('xpath=ancestor::div[contains(@class, "BoardColumn")]')
      .locator(
        `.BoardColumnScrollableContainer-cardsList .BoardCard-taskName:has-text("${cardTitle}")`
      );
  }
}
