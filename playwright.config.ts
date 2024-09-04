import { defineConfig } from "@playwright/test";

import * as dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  testDir: "./tests",
  use: {
    headless: false,
    screenshot: { mode: "only-on-failure", fullPage: true },
    video: { mode: "retain-on-failure", size: { width: 1920, height: 1080 } },
  },
  fullyParallel: true,
  workers: 4,
  projects: [
    {
      name: "Chromium",
      use: { browserName: "chromium" },
    },
  ],
});
