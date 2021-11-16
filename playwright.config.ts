import { PlaywrightTestConfig } from "@playwright/test";


const config: PlaywrightTestConfig = {
    use: {
        headless: !true,
        browserName: "chromium",
        screenshot: "on",
        trace: "retain-on-failure",
        baseURL: "https://dev110556.service-now.com/api/now/table/incident",
        extraHTTPHeaders: {

            "Authorization": "Basic YWRtaW46VVptQlFNMW00ZGll"
        }
        // baseURL: "https://letcode.in",
        // contextOptions: {
        //     permissions: ["clipboard-read"]
        // }
        // launchOptions: {
        //     logger: {
        //         isEnabled: (name, severity) => true,
        //         log: (name, severity, message, args) => console.log(name, severity)
        // }
        // }
    },

    // timeout: 10000,
    // grep: [new RegExp("@smoke"), new RegExp("@reg")],
    // testMatch: ["apitest/service-now.test.ts"],
    retries: 0,
    // reporter: "./customReport/myReporter.ts"
    reporter: [["dot"], ["json", { outputFile: "test-result.json" }],
    ['experimental-allure-playwright']],
}
export default config;