/** @type {import('@playwright/test').PlaywrightTestConfig} */

module.exports = {
  reporter: [ ['list'], ['html', { open: 'never', outputFolder: 'reports' }] ],
  projects: [
    {
      name: 'e2e',
      outputDir: 'test-results',
      testMatch: '**/*.e2e.test.js',
      use: {
        baseURL: 'http://localhost:4567',
        browsers: ['chromium'],
        viewport: { width: 1440, height: 900 },
        screenshot: 'only-on-failure',
        trace: 'retain-on-failure',
        launchOptions: {
          args: [
            '--no-sandbox',
            '--disable-gpu',
          ],
          headless: true
        }
      }
    },
  ]
}
