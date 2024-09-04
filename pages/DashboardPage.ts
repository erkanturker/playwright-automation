import { Page, Locator } from "@playwright/test";
import BasePage from "./BasePage";

export class DashboardPage extends BasePage {
  protected quickStatsLocators: Locator;

  constructor(page: Page) {
    super(page);
    this.quickStatsLocators = this.page.locator("div>div.row>div");
  }

  getQuickStatsLocators = () => this.quickStatsLocators;

}
