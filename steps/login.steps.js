import { createBdd } from 'playwright-bdd';
const {Given, When, Then} = createBdd();

Given('user opens the login page', async ({ page }) => {
  await page.goto('https://suite8demo.suiteondemand.com/#/Login');
});

When ('user enters username "will" and password "will"', async ({ page }) => {
  await page.locator('//input[@name="username"]').fill('will');
  await page.locator('//input[@name="password"]').fill('will');
});


When ('user clicks the Login button', async ({ page }) => {
  await page.locator('//button[@id="login-button"]').click();
});

Then ('user should be redirected to the dashboard', async ({ page }) => {
  await page.waitForURL('https://suite8demo.suiteondemand.com/#/home');

});