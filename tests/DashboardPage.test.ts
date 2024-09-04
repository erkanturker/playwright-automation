import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";

test.describe("Admin Dashboard Page", () => {
  let loginPage: LoginPage;
  let dashboardPage: DashboardPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
  });

  test("Admin verify left stats Card on the page", async () => {
    await loginPage.loginByAdmin();
    ("Testing dashboard");

    const statsCards = [
      "Teachers",
      "Students",
      "Groups",
      "Subjects",
      "Term",
      "Done",
      "Remaining",
      "By Current",
      "By Terms",
    ];

    const quickStasts = await dashboardPage.getQuickStatsLocators();

    for (let index = 0; index < (await quickStasts.count()); index++) {
      const cardText = (await quickStasts.nth(index).textContent()) as string;
      const filteredText = cardText.replace(/[0-9%.]/g, "").trim();

      const isMatch = statsCards.some((text) => text.includes(filteredText));
      expect(isMatch).toBeTruthy();
    }
  });
});
