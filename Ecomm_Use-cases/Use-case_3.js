const puppeteer = require('puppeteer')
const fs = require('fs')
const { log } = require('console');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,

    });

    const page = await browser.newPage();
    await page.goto('https://ecomm.bangdb.com');
    const search = await page.waitForXPath(`//input[@name='search']`);
    await search.click();
    await search.type("mac");
    const button = await page.waitForXPath(`(//button[@type='button'])[1]`);
    await button.click();
    await browser.close();

})();

// Ecomm test Use-case: User visits then search for an item