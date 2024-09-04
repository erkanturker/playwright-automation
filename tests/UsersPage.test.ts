import test, { expect } from "playwright/test";
import LoginPage from "../pages/LoginPage";
import UsersPage, { User } from "../pages/UsersPage";
import { DbHelper } from "../helpers/dbHelper";

test.describe("Users Page", () => {
  const dbHelper = new DbHelper();
  let loginPage: LoginPage;
  let usersPage: UsersPage;
  let user: User = {
    username: "testuser",
    password: "12345",
    firstName: "testFirstname",
    lastName: "firtLastname",
    email: "test@gmail.com",
    role: "Teacher",
  };

  test.beforeAll(async () => {
    await dbHelper.connect();
  });

  test.afterAll(async () => {
    await dbHelper.disconnect();
  });

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    usersPage = new UsersPage(page);
    await loginPage.loginByAdmin();
  });

  test.afterEach(async () => {
    await dbHelper.deleteUserByUsername(user.username);
  });

  test("admin can create user", async () => {
    await usersPage.clickLinkByPartialText("Users");
    await usersPage.fillCreateUserForm(user);

    const alertText = await usersPage.alertTitle.textContent();
    expect(alertText).toBe("Success");
  });
});
