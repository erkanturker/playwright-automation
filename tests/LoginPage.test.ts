import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage";

test.describe("Login Page", () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
  });

  test("Admin can log in and see the Dashboard", async () => {
    await loginPage.loginByAdmin();

    const titleText = await loginPage.pageTitle.textContent();
    expect(titleText).toBe("Dashboard");
  });

  test("Teacher can log in and see the Dashboard", async () => {
    await loginPage.loginByTeacher();

    const titleText = await loginPage.pageTitle.textContent();
    expect(titleText).toBe("Dashboard");
  });
});
