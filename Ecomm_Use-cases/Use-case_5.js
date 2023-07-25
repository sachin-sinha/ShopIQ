const puppeteer = require('puppeteer');
const fs = require('fs');
const { log } = require('console');

(async () => {

    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();

    await page.goto('https://ecomm.bangdb.com');
    console.log("landed on website");
    await page.goto('https://ecomm.bangdb.com/index.php?route=product/category&language=en-gb&path=25_28')
    console.log("navigated to monitor page");
    await page.goto('https://ecomm.bangdb.com/index.php?route=product/category&language=en-gb&path=24')
    console.log("navigated to phone and pda page");
    await page.goto('https://ecomm.bangdb.com/index.php?route=product/category&language=en-gb&path=33')
    console.log("navigated to cameras page");

    await page.goto("https://ecomm.bangdb.com/index.php?route=account/register&language=en-gb")
    console.log("landed on registration page");
    const first_name = await page.waitForXPath(`//input[@id='input-firstname']`);
    await first_name.click();
    await first_name.type("Sandeep");
    const last_name = await page.waitForXPath(`//input[@id='input-lastname']`);
    await last_name.click();
    await last_name.type("Belaki");
    const email = await page.waitForXPath(`//input[@id='input-email']`);
    await email.click();
    await email.type("sandeepbelaki@gmail.com");

    const password = await page.waitForXPath(`//input[@id='input-password']`);
    await password.click();
    await password.type("sandeep@123");

    const checkbox= await page.waitForXPath(`//input[@id='checkbox-input']`);
    await checkbox.click();
    const btn_click = await page.waitForXPath(`//button[@id='submit-button']`);
    await btn_click.click();
    console.log("registration form filled");
})();

// Ecomm Test Use-Case: User visits then navigates to 3 pages then files a form ( Any form – contact us for example )