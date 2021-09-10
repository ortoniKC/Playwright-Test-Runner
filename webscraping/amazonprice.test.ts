const url = "https://www.amazon.in/Maono-AU-400-Lavalier-Microphone-Black/dp/B07JF9B592/ref=sr_1_4?dchild=1&keywords=moana+mic&qid=1630822326&sr=8-4";

import { test } from "@playwright/test";

import * as auth from "./auth.json"

const nodemailer = require("nodemailer");
test("Amazon Price Drop Notification", async ({ page }) => {

    // Navigate to the Amazon product page
    await page.goto(url);
    // get the price of the product 
    const price = await page.$eval("#priceblock_ourprice", el => el.textContent);
    // remove the currency symbol and the comma from the price
    const currentPrice = price?.replace("₹", '').split(".")[0];
    console.log(currentPrice);
    // send the email using nodemailer
    sendEmailNotification(currentPrice);
    if (Number(currentPrice) < 400) {
    }

})

function sendEmailNotification(currentPrice: string | undefined) {
    // github environment variables
    const { MY_EMAIL, MY_PASS } = process.env;
    console.log(MY_EMAIL, MY_PASS);
    // create a transporter object
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: MY_EMAIL,
            pass: MY_PASS
        }
    });
    transporter.sendMail({
        from: MY_EMAIL,
        to: 'koushik350@gmail.com',
        subject: 'Amazon Price Drop Notification',
        html: `<p>The price of the product has dropped to ${currentPrice}</p><a href="${url}">click to open</a>`
    }, (err: any, info: any) => {
        if (err) {
            console.error(err);
        } else {
            console.log(info);
        }
    });
}
