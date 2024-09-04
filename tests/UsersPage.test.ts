import test, { expect } from "playwright/test";
import LoginPage from "../pages/LoginPage";
import UsersPage, { User } from "../pages/UsersPage";

test.describe("Users Page", () => {
  let loginPage: LoginPage;
  let usersPage: UsersPage;
  let user: User;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    usersPage = new UsersPage(page);
    await loginPage.loginByAdmin();
  });

  test("admin can create user", async () => {
    user = {
      username: "testuser",
      password: "12345",
      firstName: "testFirstname",
      lastName: "firtLastname",
      email: "test@gmail.com",
      role: "Teacher",
    };

    await usersPage.clickLinkByPartialText("Users");
    await usersPage.fillCreateUserForm(user);

    const alertText = await usersPage.alertTitle.textContent();
    expect(alertText).toBe("Success");
  });

});
