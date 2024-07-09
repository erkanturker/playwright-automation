import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import fs from "fs";

type TestCase = {
  id: number;
  name: string;
  leftNav: string;
  column: string;
  card_title: string;
};

const testCases = JSON.parse(fs.readFileSync("./data/testcases.json", "utf-8"));

test.describe("Asana Data-Driven Tests", () => {
  testCases.forEach((data: TestCase) => {
    test(data.name, async ({ page }) => {
      const loginPage = new LoginPage(page);

      await test.step("Login", async () => {
        await loginPage.navigate();
        await loginPage.fillEmailById("ben+pose@workwithloop.com");
        await loginPage.fillPasswordById("Password123");
      });

      await test.step("Navigate to the project page", async () => {
        await page.click(`text=${data.leftNav}`);
      });
    });
  });
});
