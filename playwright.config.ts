import { devices, PlaywrightTestConfig } from "@playwright/test";


const config: PlaywrightTestConfig = {


    // workers: 4,
    // fullyParallel: true,
    // projects: [
    //     {
    //         name: 'chromium',
    //         use: { ...devices['Desktop Chrome'] },
    //     },
    //     {
    //         name: 'Pixel',
    //         use: { ...devices['Pixel 5'] },
    //     },
    //     // {
    //     //     name: 'firefox',
    //     //     use: { ...devices['Desktop Firefox'] },
    //     // },
    //     // {
    //     //     name: 'webkit',
    //     //     use: { ...devices['Desktop Safari'] },
    //     // },
    // ],

    use: {
        viewport: null,
        headless: !true,
        // browserName: "chromium",
        screenshot: "on",
        video: "on",
        // trace: "on",
        baseURL: "https://www.letcode.in",
        // baseURL: "https://dev107189.service-now.com/api/now/table/incident",
        extraHTTPHeaders: {
            "Authorization": "Basic YWRtaW46U0NxN2pDb2tDbFI4"
        }
        // baseURL: "https://letcode.in",
        // contextOptions: {
        //     permissions: ["clipboard-read"]
        // }
        ,
        launchOptions: {
            args: ["--start-maximized"],

            // logger: {
            //     // isEnabled: (name, severity) => true,
            //     // log: (name, severity, message, args) => console.log(name, severity)
            // }
        }
    },
    // timeout: 60000,
    // grep: [new RegExp("@smoke"), new RegExp("@reg")],
    // testMatch: ["harDemo/trackRequest.test.ts"],
    retries: 0,
    // reporter: "./customReport/myReporter.ts"
    reporter: [
        ["dot"], // -> console
        ["json", { outputFile: "test-result.json" }], //  -> JSON
        ['html', {
            open: "always"
        }] // -> HTML
    ],
    // globalTeardown: './helper/globalsetup.ts'
}
export default config;