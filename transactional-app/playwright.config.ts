import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e', // test results destination.
  timeout: 60000, // max timeOut per test.
  retries: 2, // retries number per test.
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:4200', // base URL.
    headless: true, // set false to see execution on browser.
    screenshot: 'only-on-failure', // only takes screenshots on failure.
    video: 'retain-on-failure', // only record videos on failure.
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
