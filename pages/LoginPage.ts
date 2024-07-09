import { Page } from "playwright";

export class LoginPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto("https://app.asana.com/-/login");
  }

  async fillEmailById(value: string) {
    const emailInput = `input[type="email"]`;
    await this.page.fill(emailInput, value);
    await this.page.locator(`text="Continue"`).click();
  }

  async fillPasswordById(value: string) {
    const emailPassword = `input[type="email"]`;
    await this.page.fill(emailPassword, value);
    await this.page.locator(`text="Log in"`).click();
  }


}
