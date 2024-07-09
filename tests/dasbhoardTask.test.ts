import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";

import fs from "fs";

type TestCase = {
  id: number;
  name: string;
  leftNav: string;
  column: string;
  card_title: string;
};


const testCases: TestCase[] = JSON.parse(
  fs.readFileSync("./data/testcases.json", "utf-8")
);

test.describe("Asana Data-Driven Tests", () => {
  testCases.forEach((data) => {
    test(data.name, async ({ page }) => {
      
      const loginPage = new LoginPage(page);
      const dashboardPage = new DashboardPage(page);

      await test.step("Login", async () => {
        await loginPage.navigate();
        await loginPage.fillEmailById("ben+pose@workwithloop.com");
        await loginPage.fillPasswordById("Password123");
      });

      await test.step("Navigate to the project page", async () => {
        await page.click(`text=${data.leftNav}`);
      });

      await test.step("Verify the card is within the right column", async () => {
        const columnLocator = dashboardPage.getColumnLocator(data.column);

        await expect(columnLocator).toBeVisible();
        await columnLocator.waitFor();

        const cardLocator = dashboardPage.getCardLocator(
          columnLocator,
          data.card_title
        );

        await cardLocator.waitFor();
        await expect(cardLocator).toBeVisible();
      });
    });
  });
});
