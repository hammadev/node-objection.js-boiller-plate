const puppeteer = require('puppeteer');

// Function to create a delay
const delay = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

const user = {
    username: 'path.to.ceo',
    password: 'uncool25000',
};

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const authResponse = await signIn(browser, user);
    console.log(authResponse);
})();

const signIn = async (browser, user, opts) => {
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/accounts/login/');

    await page.waitForSelector('input[name=username]', { visible: true });
    await delay(100); // Adjust delay as needed
    await page.type('input[name=username]', user.username, { delay: 50 });

    await delay(100); // Adjust delay as needed
    await page.type('input[name=password]', user.password, { delay: 50 });

    await delay(100); // Adjust delay as needed
    // const [signin] = await page.$x('//button[contains(.,"Log in")]');
    // await signin.click({ delay: 30 });
    await page.click('button[type="submit"]');

    // Download PDF

//   await page.pdf({
//     path: 'page.pdf',
//     format: 'A4',
//   });

//   await browser.close();

    // let _resp = null;
    // await page.waitForResponse(response => {
    //     if (response.url() === 'https://www.instagram.com/accounts/login/ajax/') {
    //         _resp = response.json().then(body => body.authenticated);
    //         return _resp
    //     }
    // }).catch();

    // return await _resp;
};
