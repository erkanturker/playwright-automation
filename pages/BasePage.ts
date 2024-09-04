import { Locator, Page } from "playwright";

export default class BasePage {
  protected pageTitleLocator: Locator;
  protected submitButtonLocator: Locator;
  protected alertTitleLocator: Locator;

  constructor(protected page: Page) {
    this.pageTitleLocator = this.page.locator("h1");
    this.submitButtonLocator = this.page.locator(
      `button[data-testid='submit']`
    );
    this.alertTitleLocator = this.page.locator("div.alert-heading");
  }

  get alertTitle() {
    return this.alertTitleLocator;
  }

  get pageTitle() {
    return this.pageTitleLocator;
  }

  async fillTextInputById(value: string, locator: Locator) {
    await locator.waitFor({ state: "visible" });
    await locator.fill(value);
  }

  async clickLinkByPartialText(partialText: string) {
    const link: Locator = this.page.locator("div.nav>a", {
      hasText: `${partialText}`,
    });
    await link.click();
  }

  async clickSubmitButton() {
    await this.submitButtonLocator.waitFor({ state: "visible" });
    await this.submitButtonLocator.click();
  }
}
