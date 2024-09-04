import { Locator, Page } from "playwright";
import BasePage from "./BasePage";

export default class LoginPage extends BasePage {
  protected usernameInput: Locator;
  protected passwordInput: Locator;
  protected submitButton: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = this.page.locator(`input[name="username"]`);
    this.passwordInput = this.page.locator('input[type="password"]');
    this.submitButton = this.page.locator(`text='Login'`);
  }

  async login(username: string, password: string) {
    await this.page.goto("https://comattfrontend.onrender.com/");
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async loginByAdmin() {
    const username = process.env.ADMIN_USERNAME as string;
    const password = process.env.ADMIN_PASSWORD as string;

    await this.login(username, password);
  }

  async loginByTeacher() {
    const username = process.env.TEACHER_USERNAME as string;
    const password = process.env.TEACHER_PASSWORD as string;

    await this.login(username, password);
  }
}
