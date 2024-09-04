import { defineConfig } from "@playwright/test";

import * as dotenv from "dotenv";
dotenv.config();

export default defineConfig({
  testDir: "./tests",
  use: {
    headless: false,
    screenshot: "only-on-failure",
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
