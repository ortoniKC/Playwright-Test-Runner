import { FullConfig } from "@playwright/test";
const AdmZip = require("adm-zip");

async function globalSetup(config: FullConfig) {
    console.log("Report path " + config.rootDir);

    const reportPath = config.rootDir + "\\playwright-report";
    console.log("Report path: " + reportPath);

    var zip = new AdmZip();
    zip.addLocalFolder(reportPath, "./playwrightReport");
    zip.writeZip("./report.zip")

}
export default globalSetup;