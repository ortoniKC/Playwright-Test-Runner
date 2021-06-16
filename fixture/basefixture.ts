import { test as baseTest } from '@playwright/test';
import { Page } from 'playwright';

import HeaderPage from '../page/Header.page'
import LoginPage from '../page/Login.page'
import CommonFunctions from '../page/common.page';
// Extend basic test by providing a "table" fixture.
// const test = base.extend<{ todoPage: TodoPage }>({
//     todoPage: async ({ page }, use) => {
//         const todoPage = new TodoPage(page);
//         await todoPage.goto();
//         await todoPage.addToDo('item1');
//         await todoPage.addToDo('item2');
//         await use(todoPage);
//         await todoPage.removeAll();
//     },
// });
const it = baseTest.extend<{
    letcodeInPage: Page,
    headerPage: HeaderPage,
    loginPage: LoginPage,
    common: CommonFunctions
}>({
    letcodeInPage: async ({ page }, use) => {
        const letcodeInPage = page;
        await page.goto("https://letcode.in");
        await use(letcodeInPage)
    },
    headerPage: async ({ letcodeInPage }, use) => {
        const headerPage = new HeaderPage(letcodeInPage);
        await use(headerPage);
    },
    loginPage: async ({ letcodeInPage }, use) => {
        const loginPage = new LoginPage(letcodeInPage);
        await use(loginPage);
    },
    common: async ({ letcodeInPage }, use) => {
        const common = new CommonFunctions(letcodeInPage);
        await use(common);
    },
});

export const test = it;
export const expect = test.expect;