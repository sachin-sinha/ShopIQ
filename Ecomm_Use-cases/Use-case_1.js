const puppeteer = require('puppeteer');
const fs = require('fs');
const { log } = require('console');


(async () => {

    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();

    await page.goto('https://ecomm.bangdb.com');
    

    // await page.setViewport({ width: 1080, height: 1024 });

    await browser.close();

    console.log("sucessfully closed browser");

})();

// Ecomm test Use-case: User visit and leaves – leaves by either close the tab / window