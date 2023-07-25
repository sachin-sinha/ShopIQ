const puppeteer = require('puppeteer')
const fs = require('fs')
const { log } = require('console');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.goto('https://ecomm.bangdb.com')
    await page.goto('https://ecomm.bangdb.com/index.php?route=account/register&language=en-gb')
    await page.goto('https://ecomm.bangdb.com/index.php?route=product/category&language=en-gb&path=20_27')
    // await page.goto('https://mail.google.com/mail/u/0/?ogbl#inbox')
    await page.goto('https://ecomm.bangdb.com/index.php?route=product/category&language=en-gb&path=20_27')
    await page.goto('https://ecomm.bangdb.com/index.php?route=product/category&language=en-gb&path=25_28')
    await page.goto('https://ecomm.bangdb.com/index.php?route=product/category&language=en-gb&path=24')
    await page.goto('https://ecomm.bangdb.com/index.php?route=product/category&language=en-gb&path=33')
    console.log("sucessfulyy navigated to 5 pages ");
    await browser.close();

})();

// Ecomm test use-case: User visits then navigates to 5 pages.