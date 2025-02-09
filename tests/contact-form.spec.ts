import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  // Go to http://localhost:8000/
  await page.goto('')

  // Click text=Contact
  await page.locator('text=Contact').click()
  await expect(page).toHaveURL('/contact')

  // Click [placeholder="Your Name"]
  await page.locator('[placeholder="Your Name"]').click()

  // Fill [placeholder="Your Name"]
  await page.locator('[placeholder="Your Name"]').fill('Debbie')

  // Click [placeholder="Your Email"]
  await page.locator('[placeholder="Your Email"]').click()

  // Fill [placeholder="Your Email"]
  await page.locator('[placeholder="Your Email"]').fill('dobriendev@gmail.com')

  // Click textarea[name="message"]
  await page.locator('textarea[name="message"]').click()

  // Fill textarea[name="message"]
  await page
    .locator('textarea[name="message"]')
    .fill('hello just testing the contact form on your page')

  // Click text=Send
  await Promise.all([
    page.waitForNavigation(/*{ url: '/thank-you/' }*/),
    page.locator('text=Send').click()
  ])

  // Click text=Go Home
  await Promise.all([
    page.waitForNavigation(/*{ url: '/' }*/),
    page.locator('text=Go Home').click()
  ])
})
