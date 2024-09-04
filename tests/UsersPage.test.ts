import test, { expect } from "playwright/test";
import LoginPage from "../pages/LoginPage";
import UsersPage from "../pages/UsersPage";

test.describe("Users Page", () => {
  let loginPage: LoginPage;
  let usersPage: UsersPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    usersPage = new UsersPage(page);
    await loginPage.loginByAdmin();
  });

  test("admin can create user", async () => {
    debugger;
    await usersPage.clickLinkByPartialText("Users");
    await usersPage.fillCreateUserForm();
    const alertText = await usersPage.alertTitle.textContent();
    console.log(alertText);

    expect(alertText).toBe("Success");
  });
});
