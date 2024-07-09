import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("basic test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  await loginPage.fillEmailById("ben+pose@workwithloop.com");
  await loginPage.fillPasswordById("Password123");
});
