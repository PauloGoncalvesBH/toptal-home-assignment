/** @type {import('@playwright/test').PlaywrightTestConfig} */

const BASE_URL = 'http://localhost:4567'

module.exports = {
  reporter: [ ['list'], ['html', { open: 'never', outputFolder: 'reports' }] ],
  projects: [
    {
      name: 'e2e',
      outputDir: 'test-results',
      testMatch: '**/*.e2e.test.js',
      use: {
        baseURL: BASE_URL,
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
    {
      name: 'visual-1-viewport-1024x768',
      testMatch: '**/*.visual.test.js',
      use: {
        viewport: { width: 1024, height: 768 },
        baseURL: BASE_URL,
      }
    },
    {
      name: 'visual-2-viewport-1920x1080',
      testMatch: '**/*.visual.test.js',
      use: {
        viewport: { width: 1920, height: 1080 },
        baseURL: BASE_URL
      }
    },
  ]
}
