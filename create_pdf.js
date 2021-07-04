const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.youtube.com/', {
        waitUntil: 'networkidle2',
    });
    await page.pdf({ path: 'youtube.pdf', format: 'a4' });

    await browser.close();
})();