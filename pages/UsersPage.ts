import { Page, Locator } from "@playwright/test";
import BasePage from "./BasePage";

export default class UsersPage extends BasePage {
  protected usernameInput: Locator;
  protected passwordInput: Locator;
  protected firstNameInput: Locator;
  protected lastNameInput: Locator;
  protected emailInput: Locator;
  protected roleDropDown: Locator;

  constructor(page: Page) {
    super(page);
    this.usernameInput = this.page.locator("#username");
    this.passwordInput = this.page.locator("#password");
    this.firstNameInput = this.page.locator("#firstName");
    this.lastNameInput = this.page.locator("#lastName");
    this.emailInput = this.page.locator("#email");
    this.roleDropDown = this.page.locator("#role");
  }

  async fillCreateUserForm() {
    await this.page.waitForSelector("#username", { state: "visible" });
    await this.usernameInput.fill("testUsername");

    await this.fillTextInputById("12345", this.passwordInput);
    await this.fillTextInputById("FirstNameTest", this.firstNameInput);
    await this.fillTextInputById("LastnameTest", this.lastNameInput);
    await this.fillTextInputById("test@gmail.com", this.emailInput);
    await this.roleDropDown.selectOption({ label: "Teacher" });
    await this.clickSubmitButton();
  }
}
