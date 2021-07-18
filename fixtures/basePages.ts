import LoginPage from "../page/Login.page"
import HeaderPage from "../page/Header.page"
import CommonFunctions from "../page/common.page"

import { test as baseTexst } from "@playwright/test";
// var a;
// var b: string;

// type pages=  {
//     loginPage: LoginPage;
//     headerPage: HeaderPage;
//     commonPage: CommonFunctions;
// }

const test = baseTexst.extend<{
    loginPage: LoginPage;
    headerPage: HeaderPage;
    commonPage: CommonFunctions;
}>({
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    headerPage: async ({ page }, use) => {
        await use(new HeaderPage(page));
    },
    commonPage: async ({ page }, use) => {
        await use(new CommonFunctions(page));
    },
})
export default test;
export const expect = test.expect;
