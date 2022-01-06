import { test } from "@playwright/test";
const Tesseract = require('tesseract.js');

test("Tesseract - Image to text", async ({ page }) => {

    await page.goto("https://www.justdial.com/Chennai/Car-Washing-Services-in-Adyar/nct-10079017");
    await page.waitForSelector('#best_deal_div >> text=X');
    await page.click('#best_deal_div >> text=X', { force: true, delay: 2000 });
    const images = await page.$$("section p.contact-info span a");
    for await (let img of images) {
        const name = Date.now();
        await img.screenshot({ path: `${name}.png` });
        await convertToText(`${name}.png`)
    }
});

async function convertToText(name: string) {
    let imgText = await Tesseract.recognize(
        `./${name}`);
    console.log(imgText.data.text);
}

// Selenium code to handle pseudo element (not working for this scenario)
/**
    public static void main(String[] args) {
        driver.get("https://www.justdial.com/Chennai/Car-Washing-Services-in-Ashok-Nagar/nct-10079017");
        List<WebElement> phones = driver.findElementsByCssSelector("section#bcard0 section.jcar p.contact-info a b span");
        for (WebElement ph : phones) {
            String script = "return window.getComputedStyle(arguments[0], ':before').getPropertyValue('content')";
            String phone = driver.executeScript(script, ph).toString();
            System.out.println(phone);
        }
        driver.quit();
    }
 */