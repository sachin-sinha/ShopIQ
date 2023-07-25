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
    await page.goto('https://ecomm.bangdb.com/index.php?route=product/category&language=en-gb&path=20_27')
    const extlink = await page.waitForXPath(`//a[.='OpenCart']`);
    await extlink.click(); 
    const extlinkfb = await page.waitForXPath(`//a[.='Facebook']`);
    await extlinkfb.click(); 
    await browser.close();

})();

// Ecomm test Use-case: User visits then navigates to 3 pages then click on external link