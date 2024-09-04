import { Page, Locator } from "@playwright/test";
import BasePage from "./BasePage";

export interface User {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

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

  async fillCreateUserForm(user: User) {
    const { username, password, firstName, lastName, email, role } = user;
    
    {
      await this.fillTextInputById(username, this.usernameInput);
      await this.fillTextInputById(password, this.passwordInput);
      await this.fillTextInputById(firstName, this.firstNameInput);
      await this.fillTextInputById(lastName, this.lastNameInput);
      await this.fillTextInputById(email, this.emailInput);
      await this.roleDropDown.selectOption({ label: `${role}` });
      await this.clickSubmitButton();
    }
  }
}
